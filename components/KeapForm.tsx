'use client'

interface KeapFormProps {
  formPath?: string
}

export default function KeapForm({ formPath = '/forms/contact.html' }: KeapFormProps) {
  return (
    <iframe
      src={formPath}
      style={{ border: 'none', minHeight: '600px', width: '100%' }}
      title="Contact form"
    />
  )
}
