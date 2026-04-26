'use client'

import { useState } from 'react'
import Image from 'next/image'

const tileCategories = [
  { id: 'all', name: 'All 34', count: 34 },
  { id: 'characters', name: 'Characters', count: 9 },
  { id: 'bamboo', name: 'Bamboo', count: 9 },
  { id: 'dots', name: 'Dots', count: 9 },
  { id: 'winds', name: 'Winds', count: 4 },
  { id: 'dragons', name: 'Dragons', count: 3 },
]

const tiles = {
  characters: Array.from({ length: 9 }, (_, i) => ({ id: `wan-${i + 1}`, name: `${i + 1} Characters` })),
  bamboo: Array.from({ length: 9 }, (_, i) => ({ id: `tiao-${i + 1}`, name: `${i + 1} Bamboo` })),
  dots: Array.from({ length: 9 }, (_, i) => ({ id: `bing-${i + 1}`, name: `${i + 1} Dots` })),
  winds: [
    { id: 'east', name: 'East Wind' },
    { id: 'south', name: 'South Wind' },
    { id: 'west', name: 'West Wind' },
    { id: 'north', name: 'North Wind' },
  ],
  dragons: [
    { id: 'red', name: 'Red Dragon' },
    { id: 'green', name: 'Green Dragon' },
    { id: 'white', name: 'White Dragon' },
  ],
}

export default function TilesSection() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [hoveredTile, setHoveredTile] = useState<string | null>(null)

  const getDisplayTiles = () => {
    if (selectedCategory === 'all') {
      return [...tiles.characters, ...tiles.bamboo, ...tiles.dots, ...tiles.winds, ...tiles.dragons]
    }
    return tiles[selectedCategory as keyof typeof tiles] || []
  }

  return (
    <section id="section-tiles" className="min-h-screen px-8 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ fontSize: '11px', fontWeight: 700, marginBottom: '16px', color: 'var(--ink-faint)', letterSpacing: '0.05em', fontFamily: 'var(--sans)' }}>
        SECTION 01 · THE DECK
      </div>
      <h2 style={{ fontSize: '48px', fontWeight: 500, lineHeight: 1.1, marginBottom: '32px', color: 'var(--ink)' }}>
        What are the tiles?
      </h2>

      <p style={{ fontSize: '20px', lineHeight: 1.6, marginBottom: '16px', maxWidth: '800px', color: 'var(--ink)' }}>
        A mahjong set has <strong>136 tiles</strong>: 34 unique designs, four of each. Three suits run 1–9 (Characters, Bamboo, Dots), plus the honor tiles — four Winds and three Dragons.
      </p>
      <p style={{ fontSize: '16px', color: 'var(--ink-muted)', marginBottom: '48px' }}>
        Hover or tap any tile to learn its name.
      </p>

      <div className="flex flex-wrap gap-2 mb-12" style={{ fontFamily: 'var(--sans)' }}>
        {tileCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            style={{
              padding: '8px 16px',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: 500,
              backgroundColor: selectedCategory === cat.id ? 'var(--jade)' : 'var(--bg-alt)',
              color: selectedCategory === cat.id ? 'white' : 'var(--ink-soft)',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            {cat.name} <span style={{ opacity: 0.7 }}>{cat.count}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-9 gap-4 mb-8">
        {getDisplayTiles().map((tile) => (
          <div
            key={tile.id}
            className="relative group cursor-pointer"
            onMouseEnter={() => setHoveredTile(tile.id)}
            onMouseLeave={() => setHoveredTile(null)}
          >
            <div 
              style={{
                background: 'var(--paper)',
                borderRadius: '8px',
                padding: '12px',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.2s'
              }}
            >
              <Image
                src={`/tiles/${tile.id}.svg`}
                alt={tile.name}
                width={75}
                height={96}
                className="w-full h-auto"
              />
            </div>
            {hoveredTile === tile.id && (
              <div 
                className="absolute bottom-full left-1/2 mb-2 px-3 py-2 rounded whitespace-nowrap z-10"
                style={{
                  transform: 'translateX(-50%)',
                  backgroundColor: 'var(--ink)',
                  color: 'var(--paper)',
                  fontSize: '14px',
                  fontFamily: 'var(--sans)'
                }}
              >
                {tile.name}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center" style={{ fontSize: '16px', color: 'var(--ink-muted)', lineHeight: 1.6 }}>
        {hoveredTile ? (
          <p>Each appears four times in the wall. The numbered suits behave like three independent decks; the honors can't form runs.</p>
        ) : (
          <p>Hover or tap a tile</p>
        )}
      </div>
    </section>
  )
}
