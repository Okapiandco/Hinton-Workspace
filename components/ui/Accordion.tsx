'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface AccordionItem {
  question: string
  answer: string
}

interface AccordionProps {
  items: AccordionItem[]
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="space-y-3">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="border border-light-pink rounded-lg overflow-hidden bg-white"
        >
          <button
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-cream transition-colors"
          >
            <h3 className="font-serif font-bold text-left text-dark-green text-lg">
              {item.question}
            </h3>
            <ChevronDown
              size={24}
              className={`text-dark-green transition-transform flex-shrink-0 ml-4 ${
                openIndex === idx ? 'rotate-180' : ''
              }`}
            />
          </button>

          {openIndex === idx && (
            <div className="px-6 py-4 bg-cream border-t border-light-pink">
              <p className="font-sans text-gray-700 leading-relaxed">
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
