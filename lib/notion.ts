import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

// Lazily initialize the Notion client to ensure env vars are loaded
let notion: Client | null = null;
let n2m: NotionToMarkdown | null = null;

function getNotionClient() {
  if (!process.env.NOTION_TOKEN) {
    return null;
  }
  if (!notion) {
    notion = new Client({
      auth: process.env.NOTION_TOKEN,
    });
    n2m = new NotionToMarkdown({ notionClient: notion });
  }
  return notion;
}

function getN2M() {
  getNotionClient();
  return n2m;
}

// Types for Notion properties
interface NotionPage {
  id: string;
  properties: {
    Title?: { title: Array<{ plain_text: string }> };
    Name?: { title: Array<{ plain_text: string }> };
    Slug?: { rich_text: Array<{ plain_text: string }> };
    Published?: { checkbox: boolean };
    Date?: { date: { start: string } | null };
    Excerpt?: { rich_text: Array<{ plain_text: string }> };
    Location?: { rich_text: Array<{ plain_text: string }> };
    "End Date"?: { date: { start: string } | null };
    "Featured Image"?: { files: Array<{ file?: { url: string }; external?: { url: string } }> };
  };
}

// Helper to get title from either Title or Name property
function getTitle(properties: NotionPage["properties"]): string {
  if (properties.Title?.title?.[0]?.plain_text) {
    return properties.Title.title[0].plain_text;
  }
  if (properties.Name?.title?.[0]?.plain_text) {
    return properties.Name.title[0].plain_text;
  }
  return "";
}

// Helper to get featured image URL
function getFeaturedImage(properties: NotionPage["properties"]): string | null {
  const files = properties["Featured Image"]?.files;
  if (!files || files.length === 0) return null;
  const file = files[0];
  return file.file?.url || file.external?.url || null;
}

// Get all published pages
export async function getPages() {
  const client = getNotionClient();
  if (!client || !process.env.NOTION_PAGES_DB) return [];

  try {
    const response = await client.databases.query({
      database_id: process.env.NOTION_PAGES_DB,
      filter: {
        property: "Published",
        checkbox: {
          equals: true,
        },
      },
    });
    return response.results as NotionPage[];
  } catch (error) {
    console.error("Failed to fetch pages from Notion:", error);
    return [];
  }
}

// Get a single page by slug
export async function getPageBySlug(slug: string) {
  const client = getNotionClient();
  const markdown = getN2M();
  if (!client || !markdown || !process.env.NOTION_PAGES_DB) return null;

  try {
    const response = await client.databases.query({
      database_id: process.env.NOTION_PAGES_DB,
      filter: {
        and: [
          {
            property: "Slug",
            rich_text: {
              equals: slug,
            },
          },
          {
            property: "Published",
            checkbox: {
              equals: true,
            },
          },
        ],
      },
    });

    if (response.results.length === 0) {
      return null;
    }

    const page = response.results[0] as NotionPage;
    const mdBlocks = await markdown.pageToMarkdown(page.id);
    const content = markdown.toMarkdownString(mdBlocks);

    return {
      id: page.id,
      title: getTitle(page.properties),
      slug: page.properties.Slug?.rich_text?.[0]?.plain_text || "",
      content: content.parent,
    };
  } catch (error) {
    console.error("Failed to fetch page from Notion:", error);
    return null;
  }
}

// Get all published blog posts
export async function getBlogPosts() {
  const client = getNotionClient();
  if (!client || !process.env.NOTION_BLOG_DB) return [];

  try {
    const response = await client.databases.query({
      database_id: process.env.NOTION_BLOG_DB,
      filter: {
        property: "Published",
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: "Date",
          direction: "descending",
        },
      ],
    });

    return (response.results as NotionPage[]).map((post) => ({
      id: post.id,
      title: getTitle(post.properties),
      slug: post.properties.Slug?.rich_text?.[0]?.plain_text || "",
      date: post.properties.Date?.date?.start || "",
      excerpt: post.properties.Excerpt?.rich_text?.[0]?.plain_text || "",
    }));
  } catch (error) {
    console.error("Failed to fetch blog posts from Notion:", error);
    return [];
  }
}

// Get single blog post by slug
export async function getBlogPostBySlug(slug: string) {
  const client = getNotionClient();
  const markdown = getN2M();
  if (!client || !markdown || !process.env.NOTION_BLOG_DB) return null;

  try {
    const response = await client.databases.query({
      database_id: process.env.NOTION_BLOG_DB,
      filter: {
        and: [
          {
            property: "Slug",
            rich_text: {
              equals: slug,
            },
          },
          {
            property: "Published",
            checkbox: {
              equals: true,
            },
          },
        ],
      },
    });

    if (response.results.length === 0) {
      return null;
    }

    const post = response.results[0] as NotionPage;
    const mdBlocks = await markdown.pageToMarkdown(post.id);
    const content = markdown.toMarkdownString(mdBlocks);

    return {
      id: post.id,
      title: getTitle(post.properties),
      slug: post.properties.Slug?.rich_text?.[0]?.plain_text || "",
      date: post.properties.Date?.date?.start || "",
      excerpt: post.properties.Excerpt?.rich_text?.[0]?.plain_text || "",
      content: content.parent,
    };
  } catch (error) {
    console.error("Failed to fetch blog post from Notion:", error);
    return null;
  }
}

// Get upcoming events
export async function getEvents() {
  const client = getNotionClient();
  if (!client || !process.env.NOTION_EVENTS_DB) return [];

  try {
    const today = new Date().toISOString().split("T")[0];

    const response = await client.databases.query({
      database_id: process.env.NOTION_EVENTS_DB,
      filter: {
        and: [
          {
            property: "Published",
            checkbox: {
              equals: true,
            },
          },
          {
            property: "Date",
            date: {
              on_or_after: today,
            },
          },
        ],
      },
      sorts: [
        {
          property: "Date",
          direction: "ascending",
        },
      ],
    });

    return (response.results as NotionPage[]).map((event) => ({
      id: event.id,
      title: getTitle(event.properties),
      slug: event.properties.Slug?.rich_text?.[0]?.plain_text || "",
      date: event.properties.Date?.date?.start || "",
      location: event.properties.Location?.rich_text?.[0]?.plain_text || "",
      featuredImage: getFeaturedImage(event.properties),
    }));
  } catch (error) {
    console.error("Failed to fetch events from Notion:", error);
    return [];
  }
}

// Get single event by slug
export async function getEventBySlug(slug: string) {
  const client = getNotionClient();
  const markdown = getN2M();
  if (!client || !markdown || !process.env.NOTION_EVENTS_DB) return null;

  try {
    const response = await client.databases.query({
      database_id: process.env.NOTION_EVENTS_DB,
      filter: {
        and: [
          {
            property: "Slug",
            rich_text: {
              equals: slug,
            },
          },
          {
            property: "Published",
            checkbox: {
              equals: true,
            },
          },
        ],
      },
    });

    if (response.results.length === 0) {
      return null;
    }

    const event = response.results[0] as NotionPage;
    const mdBlocks = await markdown.pageToMarkdown(event.id);
    const content = markdown.toMarkdownString(mdBlocks);

    return {
      id: event.id,
      title: getTitle(event.properties),
      slug: event.properties.Slug?.rich_text?.[0]?.plain_text || "",
      date: event.properties.Date?.date?.start || "",
      location: event.properties.Location?.rich_text?.[0]?.plain_text || "",
      content: content.parent,
    };
  } catch (error) {
    console.error("Failed to fetch event from Notion:", error);
    return null;
  }
}
