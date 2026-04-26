'use client'

import { useState } from 'react'
import Image from 'next/image'

interface WinningSectionProps {
  ruleset: 'hongkong' | 'taiwan'
}

const winningHands = [
  {
    id: 'standard',
    name: 'Standard hand',
    chinese: '平胡',
    fan: '1 FAN',
    description: 'Four sets + one pair. The pair is the "eyes". Any combination of chows and pungs works.',
  },
  {
    id: 'all-chows',
    name: 'All Chows',
    chinese: '平胡',
    fan: '1 FAN',
    description: 'All four sets are chows (sequences), and the pair is not an honor tile.',
  },
  {
    id: 'all-pungs',
    name: 'All Pungs',
    chinese: '對對胡',
    fan: '3 FAN',
    description: 'Every set is a triplet — no runs allowed.',
  },
]

export default function WinningSection({ ruleset }: WinningSectionProps) {
  const [selectedHand, setSelectedHand] = useState('standard')
  const currentHand = winningHands.find((h) => h.id === selectedHand) || winningHands[0]

  return (
    <section id="section-win" className="min-h-screen px-8 py-20 bg-black/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-xs font-bold mb-4 opacity-50">SECTION 02 · THE GOAL</div>
        <h2 className="text-5xl font-bold mb-8">How do you win?</h2>
        <p className="text-xl mb-12 max-w-3xl">
          A winning hand is <strong>4 sets + 1 pair</strong> — 14 tiles total.
        </p>
        <div className="flex flex-wrap gap-2 mb-12">
          {winningHands.map((hand) => (
            <button
              key={hand.id}
              onClick={() => setSelectedHand(hand.id)}
              className={`px-4 py-2 rounded ${selectedHand === hand.id ? 'bg-green-800 text-white' : 'bg-gray-100'}`}
            >
              {hand.chinese} {hand.name}
            </button>
          ))}
        </div>
        <div className="bg-white rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">{currentHand.name}</h3>
          <p className="text-lg">{currentHand.description}</p>
        </div>
      </div>
    </section>
  )
}
