import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'outline-light' | 'book-tour'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'font-sans font-semibold rounded transition-colors'

  const variants = {
    primary: 'bg-dark-green text-white hover:bg-[#0F2321]',
    secondary: 'bg-pink text-white hover:bg-[#C49A85]',
    outline:
      'border-2 border-dark-green text-dark-green hover:bg-dark-green hover:text-white',
    'outline-light':
      'border-2 border-white text-white hover:bg-white hover:text-dark-green',
    'book-tour':
      'bg-pink text-dark-green hover:bg-light-pink shadow-lg',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
