interface CardProps {
  children: React.ReactNode
  className?: string
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={`bg-white border border-light-pink rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow ${className}`}
    >
      {children}
    </div>
  )
}
