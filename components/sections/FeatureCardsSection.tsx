import Card from '@/components/ui/Card'
import Section from '@/components/ui/Section'
import ScrollReveal from '@/components/ui/ScrollReveal'

interface Feature {
  title: string
  description: string
  icon?: React.ReactNode
}

interface FeatureCardsSectionProps {
  title: string
  subtitle?: string
  features: Feature[]
}

export default function FeatureCardsSection({
  title,
  subtitle,
  features,
}: FeatureCardsSectionProps) {
  return (
    <Section>
      <ScrollReveal>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-dark-green mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg font-sans text-gray-600">{subtitle}</p>
          )}
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <ScrollReveal key={idx} delay={idx * 120}>
            <Card>
              {feature.icon && <div className="mb-4 text-4xl">{feature.icon}</div>}
              <h3 className="text-2xl font-serif font-bold text-dark-green mb-2">
                {feature.title}
              </h3>
              <p className="font-sans text-gray-600">{feature.description}</p>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  )
}
