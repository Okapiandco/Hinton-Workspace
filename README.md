# Hinton Workspace Website

A Next.js website for Hinton Workspace, using Notion as a CMS for blog posts and events.

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Notion Integration

1. Go to [notion.so/my-integrations](https://www.notion.so/my-integrations)
2. Click "New integration"
3. Name it "Hinton Workspace Website"
4. Copy the Internal Integration Secret

### 3. Create Notion Databases

Create three databases in Notion:

**Pages Database**
| Property | Type |
|----------|------|
| Title | Title |
| Slug | Text |
| Published | Checkbox |

**Blog Posts Database**
| Property | Type |
|----------|------|
| Title | Title |
| Slug | Text |
| Date | Date |
| Excerpt | Text |
| Published | Checkbox |

**Events Database**
| Property | Type |
|----------|------|
| Title | Title |
| Slug | Text |
| Date | Date |
| Location | Text |
| Published | Checkbox |

### 4. Connect Integration to Databases

For each database:
1. Open the database in Notion
2. Click the "..." menu (top right)
3. Go to "Connections"
4. Add your integration

### 5. Get Database IDs

For each database:
1. Open as a full page
2. Copy the ID from the URL (the long string after your workspace name)

### 6. Set Up Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Fill in your values:

```
NOTION_TOKEN=ntn_your_token_here
NOTION_PAGES_DB=your_pages_database_id
NOTION_BLOG_DB=your_blog_database_id
NOTION_EVENTS_DB=your_events_database_id
```

### 7. Add Images

Add the following images to the `/public` folder:
- `hero-image.jpg` - Hero background image
- `logo-icon.png` - White logo icon for header
- `logo-icon-white.png` - White logo for dark sections
- `logo-square.png` - Square logo for footer
- `coworking.jpg` - Co-working space photo
- `meeting-rooms.jpg` - Meeting room photo
- `event-space.jpg` - Event space photo
- `kitchen.jpg` - Kitchen photo
- `meeting-rooms-small.jpg` - Meeting rooms feature image
- `reception.jpg` - Reception photo
- `ev-charging.jpg` - EV charging photo
- `dog-friendly.jpg` - Dog friendly photo
- `quiet-pods.jpg` - Quiet pods photo

### 8. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables in Vercel dashboard
5. Deploy

### Environment Variables in Vercel

Add these in your Vercel project settings:
- `NOTION_TOKEN`
- `NOTION_PAGES_DB`
- `NOTION_BLOG_DB`
- `NOTION_EVENTS_DB`

## Content Management

### Adding Blog Posts

1. Open your Blog database in Notion
2. Create a new entry
3. Fill in Title, Slug, Date, Excerpt
4. Write content in the page body
5. Tick "Published"
6. Changes appear within 60 seconds

### Adding Events

1. Open your Events database in Notion
2. Create a new entry
3. Fill in Title, Slug, Date, Location
4. Write event details in the page body
5. Tick "Published"
6. Changes appear within 60 seconds

### Editing Pages

1. Open your Pages database in Notion
2. Create entries for pages like "about", "location", "gallery"
3. Set the Slug to match the URL path
4. Tick "Published"

## Customisation

### Colours

Edit `app/globals.css` to change the brand colours:

```css
:root {
  --hinton-dark: #1a3a3a;
  --hinton: #2d5a5a;
  --hinton-light: #3d7a7a;
  --hinton-accent: #4a9a9a;
}
```

### Contact Form

Replace the placeholder in `app/contact/page.tsx` with your form embed code (Typeform, Tally, etc.)

## File Structure

```
hinton-workspace/
├── app/
│   ├── page.tsx          # Homepage
│   ├── layout.tsx        # Global layout
│   ├── globals.css       # Global styles
│   ├── about/
│   ├── blog/
│   ├── contact/
│   ├── events/
│   ├── pricing/
│   └── workspace/
│       ├── co-working/
│       ├── meeting-rooms/
│       └── event-space/
├── components/
│   ├── Header.tsx
│   └── Footer.tsx
├── lib/
│   └── notion.ts         # Notion API helpers
└── public/               # Images and static files
```

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Notion API
- Vercel (recommended hosting)
