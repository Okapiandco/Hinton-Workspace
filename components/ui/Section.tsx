interface SectionProps {
  children: React.ReactNode
  className?: string
  bgColor?: 'cream' | 'white' | 'dark-green'
}

export default function Section({
  children,
  className = '',
  bgColor = 'cream',
}: SectionProps) {
  const bgColors = {
    cream: 'bg-cream',
    white: 'bg-white',
    'dark-green': 'bg-dark-green text-white',
  }

  return (
    <section className={`${bgColors[bgColor]} py-16 md:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4">{children}</div>
    </section>
  )
}
