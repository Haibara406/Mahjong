'use client'

import React from 'react'
import * as ReactDOM from 'react-dom'

// Tile data + Tile component. Uses /tiles/*.svg.
// Mahjong has 34 unique tiles × 4 copies = 136 + 8 bonus flowers/seasons.

const TILES = {
  wan: [  // 萬 — Characters / Cracks / Myriads
    { id: 'wan-1', num: 1, zh: '一萬', en: 'One of Characters' },
    { id: 'wan-2', num: 2, zh: '二萬', en: 'Two of Characters' },
    { id: 'wan-3', num: 3, zh: '三萬', en: 'Three of Characters' },
    { id: 'wan-4', num: 4, zh: '四萬', en: 'Four of Characters' },
    { id: 'wan-5', num: 5, zh: '五萬', en: 'Five of Characters' },
    { id: 'wan-6', num: 6, zh: '六萬', en: 'Six of Characters' },
    { id: 'wan-7', num: 7, zh: '七萬', en: 'Seven of Characters' },
    { id: 'wan-8', num: 8, zh: '八萬', en: 'Eight of Characters' },
    { id: 'wan-9', num: 9, zh: '九萬', en: 'Nine of Characters' },
  ],
  tiao: [  // 條 — Bamboo / Sticks
    { id: 'tiao-1', num: 1, zh: '一條', en: 'One of Bamboo' },
    { id: 'tiao-2', num: 2, zh: '二條', en: 'Two of Bamboo' },
    { id: 'tiao-3', num: 3, zh: '三條', en: 'Three of Bamboo' },
    { id: 'tiao-4', num: 4, zh: '四條', en: 'Four of Bamboo' },
    { id: 'tiao-5', num: 5, zh: '五條', en: 'Five of Bamboo' },
    { id: 'tiao-6', num: 6, zh: '六條', en: 'Six of Bamboo' },
    { id: 'tiao-7', num: 7, zh: '七條', en: 'Seven of Bamboo' },
    { id: 'tiao-8', num: 8, zh: '八條', en: 'Eight of Bamboo' },
    { id: 'tiao-9', num: 9, zh: '九條', en: 'Nine of Bamboo' },
  ],
  bing: [  // 餅 — Dots / Circles / Coins
    { id: 'bing-1', num: 1, zh: '一餅', en: 'One of Dots' },
    { id: 'bing-2', num: 2, zh: '二餅', en: 'Two of Dots' },
    { id: 'bing-3', num: 3, zh: '三餅', en: 'Three of Dots' },
    { id: 'bing-4', num: 4, zh: '四餅', en: 'Four of Dots' },
    { id: 'bing-5', num: 5, zh: '五餅', en: 'Five of Dots' },
    { id: 'bing-6', num: 6, zh: '六餅', en: 'Six of Dots' },
    { id: 'bing-7', num: 7, zh: '七餅', en: 'Seven of Dots' },
    { id: 'bing-8', num: 8, zh: '八餅', en: 'Eight of Dots' },
    { id: 'bing-9', num: 9, zh: '九餅', en: 'Nine of Dots' },
  ],
  wind: [
    { id: 'east', zh: '東', en: 'East Wind' },
    { id: 'south', zh: '南', en: 'South Wind' },
    { id: 'west', zh: '西', en: 'West Wind' },
    { id: 'north', zh: '北', en: 'North Wind' },
  ],
  dragon: [
    { id: 'red', zh: '中', en: 'Red Dragon' },
    { id: 'green', zh: '發', en: 'Green Dragon' },
    { id: 'white', zh: '白', en: 'White Dragon' },
  ],
};

// Flower & season bonus tiles — Taiwan variant only
const FLOWER_TILES = {
  flower: [
    { id: 'mei', num: 1, zh: '梅', en: 'Plum Blossom' },
    { id: 'lan', num: 2, zh: '蘭', en: 'Orchid' },
    { id: 'ju',  num: 3, zh: '菊', en: 'Chrysanthemum' },
    { id: 'zhu', num: 4, zh: '竹', en: 'Bamboo Shoot' },
  ],
  season: [
    { id: 'spring', num: 1, zh: '春', en: 'Spring' },
    { id: 'summer', num: 2, zh: '夏', en: 'Summer' },
    { id: 'autumn', num: 3, zh: '秋', en: 'Autumn' },
    { id: 'winter', num: 4, zh: '冬', en: 'Winter' },
  ],
};

const FLOWER_META = {
  flower: { label: 'Flowers', sub: '花 · Huā', desc: 'Four flower tiles. Each player\'s seat number has a matching flower — drawing your own flower is worth 1 臺 bonus.' },
  season: { label: 'Seasons', sub: '季 · Jì', desc: 'Four season tiles. Same matching rule as flowers — your seat number matches one season for a 1 臺 bonus.' },
};

const BLOG_URL = 'https://haerin.haikari.top/about';

const SUIT_META = {
  wan: { label: 'Characters', sub: '萬 · Wàn', desc: 'Numbered 1–9. The character 萬 means "ten thousand."' },
  tiao: { label: 'Bamboo', sub: '條 · Tiáo', desc: 'Numbered 1–9. Sticks of bamboo. The 1-bamboo is traditionally drawn as a bird.' },
  bing: { label: 'Dots', sub: '餅 · Bǐng', desc: 'Numbered 1–9. Circles represent coins, one of the three original suits.' },
  wind: { label: 'Winds', sub: '風 · Fēng', desc: 'Four winds — East, South, West, North. Honor tiles.' },
  dragon: { label: 'Dragons', sub: '箭 · Jiàn', desc: 'Three dragons — Red (中), Green (發), White (板). Honor tiles.' },
};

// Tile visual — wraps the SVG in a "physical" container with shadow + lift.
function Tile({ id, size = 'md', selected, dimmed, onClick, onMouseEnter, onMouseLeave, style, face = true, discard = false }) {
  const dims = {
    xs: { w: 32, h: 41 },
    sm: { w: 44, h: 56 },
    md: { w: 60, h: 77 },
    lg: { w: 78, h: 100 },
    xl: { w: 100, h: 128 },
  }[size];

  const interactive = !!onClick;
  const [hovered, setHovered] = React.useState(false);
  const lifted = selected || hovered;

  return (
    <div
      className={`mj-tile mj-tile-${size} ${dimmed ? 'is-dimmed' : ''}`}
      data-size={size}
      onClick={onClick}
      onMouseEnter={(e) => { setHovered(true); onMouseEnter && onMouseEnter(e); }}
      onMouseLeave={(e) => { setHovered(false); onMouseLeave && onMouseLeave(e); }}
      style={{
        '--tile-w': dims.w + 'px',
        '--tile-h': dims.h + 'px',
        width: 'var(--tile-w)',
        height: 'calc(var(--tile-h) + 6px)',
        position: 'relative',
        cursor: interactive ? 'pointer' : 'default',
        transition: 'filter 180ms',
        filter: dimmed ? 'grayscale(0.7) opacity(0.35)' : 'none',
        flexShrink: 0,
        ...style,
      }}
    >
      {/* back/bottom of tile — bone shadow layer to suggest thickness (stays put on hover) */}
      <div style={{
        position: 'absolute', inset: 0, top: 4,
        borderRadius: 7,
        background: discard ? '#d6cfc0' : '#e8dfc9',
        boxShadow: lifted
          ? '0 10px 20px -4px rgba(0,40,0,0.3)'
          : '0 3px 6px -1px rgba(0,30,0,0.2), 0 1px 2px rgba(0,0,0,0.1)',
        transition: 'background 180ms, box-shadow 180ms',
      }} />
      {/* face — lifts up on hover, revealing the bottom/sides */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: 'var(--tile-h)',
        borderRadius: 7,
        background: '#fdfbf2',
        overflow: 'hidden',
        boxShadow: selected ? '0 0 0 1.5px #006C00' : 'none',
        transform: interactive && lifted ? 'translateY(-3px)' : 'none',
        transition: 'transform 180ms cubic-bezier(.2,.7,.3,1), box-shadow 180ms',
      }}>
        {face ? (
          <img
            src={`tiles/${id}.svg`}
            alt={id}
            draggable={false}
            style={{ width: '100%', height: '100%', display: 'block', pointerEvents: 'none' }}
          />
        ) : (
          <div style={{
            width: '100%', height: '100%',
            background: 'linear-gradient(135deg, #1a6a1e, #0c4a15)',
            backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0, rgba(255,255,255,0.04) 6px, transparent 6px, transparent 12px)',
            border: '2px solid #003500',
            borderRadius: 6,
          }} />
        )}
      </div>
    </div>
  );
}

// A meld (pung / chow / kong / pair) — tiles grouped visually.
function Meld({ tiles, size = 'md', label, highlighted, onTileClick, rotated }) {
  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
      <div style={{
        display: 'flex',
        gap: 2,
        padding: highlighted ? '10px 12px' : '0',
        background: highlighted ? 'rgba(127,238,100,0.08)' : 'transparent',
        borderRadius: 10,
        transition: 'all 200ms',
      }}>
        {tiles.map((t, i) => (
          <div key={i} style={{ transform: rotated && i === rotated ? 'rotate(90deg)' : 'none' }}>
            <Tile id={t} size={size} onClick={onTileClick ? () => onTileClick(i) : undefined} />
          </div>
        ))}
      </div>
      {label && (
        <div style={{
          fontSize: 12,
          letterSpacing: 0.6,
          textTransform: 'uppercase',
          color: 'var(--ink-muted)',
          fontWeight: 500,
        }}>{label}</div>
      )}
    </div>
  );
}

// Section 1 — What are the tiles?
// Interactive: hover/click tiles to see name + cultural meaning.
// Filter by suit pill.

function SectionTiles() {
  const variant = React.useContext(VariantContext);
  const [hovered, setHovered] = React.useState(null);
  const [selected, setSelected] = React.useState(null);
  const [suit, setSuit] = React.useState('all');
  const [isTouch, setIsTouch] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    setIsTouch(window.matchMedia('(hover: none) and (pointer: coarse)').matches);
  }, []);

  React.useEffect(() => {
    setSuit('all');
    setSelected(null);
  }, [variant]);

  const allTiles = [];
  const groups = suit === 'all' ? Object.keys(TILES) : [suit];
  for (const g of groups) {
    if (!TILES[g]) continue;
    for (const t of TILES[g]) allTiles.push({ ...t, suit: g });
  }
  // flower tiles are always shown separately, not in the filtered grid
  const allFlowerTiles = variant === 'taiwan'
    ? [...FLOWER_TILES.flower.map(t => ({...t, suit: 'flower'})), ...FLOWER_TILES.season.map(t => ({...t, suit: 'season'}))]
    : [];

  const activeId = hovered || selected;
  const info = activeId
    ? allTiles.find((t) => t.id === activeId)
      || allFlowerTiles.find((t) => t.id === activeId)
      || Object.values(TILES).flat().find(t => t.id === activeId)
    : null;

  const suits = [
    { id: 'all', label: 'All 34', count: 34 },
    { id: 'wan', label: 'Characters', count: 9 },
    { id: 'tiao', label: 'Bamboo', count: 9 },
    { id: 'bing', label: 'Dots', count: 9 },
    { id: 'wind', label: 'Winds', count: 4 },
    { id: 'dragon', label: 'Dragons', count: 3 },
    ...(variant === 'taiwan' ? [{ id: 'flower', label: 'Bonus', count: 8 }] : []),
  ];

  return (
    <section id="section-tiles" className="mj-section" data-screen-label="01 Tiles">
      <div className="mj-section-head">
        <div className="mj-kicker">Section 01 · The deck</div>
        <h2 className="mj-h2">What are the tiles?</h2>
        <p className="mj-lede">
          {variant === 'taiwan' ? (
            <>A mahjong set in Taiwan rules has <strong>144 tiles</strong>: the same 34 unique designs × 4, plus <strong>8 bonus tiles</strong> — four Flowers and four Seasons. These are never part of a winning hand; they score separately.</>
          ) : (
            <>A mahjong set has <strong>136 tiles</strong>: 34 unique designs, four of each. Three suits run 1–9 (Characters, Bamboo, Dots), plus the honor tiles — four Winds and three Dragons.</>
          )}
          {' '}Hover or tap any tile to learn its name.
        </p>
      </div>

      <div className="mj-tile-explorer">
        {/* Filter pills */}
        <div className="mj-pills">
          {suits.map((s) => (
            <button
              key={s.id}
              className={`mj-pill ${suit === s.id ? 'is-active' : ''}`}
              onClick={() => { setSuit(s.id); setSelected(null); }}
            >
              {s.label}
              <span className="mj-pill-count">{s.count}</span>
            </button>
          ))}
        </div>


        <div className="mj-tile-grid-wrap" onClick={() => setSelected(null)}>
          <div className="mj-tile-grid">
            {suit === 'flower' ? (
              Object.keys(FLOWER_TILES).map((group) => (
                <div key={group} className="mj-suit-row">
                  <div className="mj-suit-label">
                    <div className="mj-suit-title">{FLOWER_META[group].label}</div>
                    <div className="mj-suit-sub">{FLOWER_META[group].sub}</div>
                    <div className="mj-suit-desc">{FLOWER_META[group].desc}</div>
                    <div className="mj-suit-count">4 tiles · each 1 of a kind</div>
                  </div>
                  <div className="mj-suit-tiles mj-suit-tiles-honors">
                    {FLOWER_TILES[group].map((t) => (
                      <div
                        key={t.id}
                        onMouseEnter={isTouch ? undefined : () => setHovered(t.id)}
                        onMouseLeave={isTouch ? undefined : () => setHovered((h) => (h === t.id ? null : h))}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelected((s) => (s === t.id ? null : t.id));
                        }}
                      >
                        <Tile
                          id={t.id}
                          size="md"
                          selected={activeId === t.id}
                          dimmed={activeId && activeId !== t.id}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              groups.map((g) => (
                <div key={g} className="mj-suit-row">
                  <div className="mj-suit-label">
                    <div className="mj-suit-title">{SUIT_META[g].label}</div>
                    <div className="mj-suit-sub">{SUIT_META[g].sub}</div>
                    <div className="mj-suit-desc">{SUIT_META[g].desc}</div>
                    <div className="mj-suit-count">{TILES[g].length} × 4 = {TILES[g].length * 4} tiles</div>
                  </div>
                  <div className={`mj-suit-tiles ${g === 'wind' || g === 'dragon' ? 'mj-suit-tiles-honors' : ''}`}>
                    {TILES[g].map((t) => (
                      <div
                        key={t.id}
                        onMouseEnter={isTouch ? undefined : () => setHovered(t.id)}
                        onMouseLeave={isTouch ? undefined : () => setHovered((h) => (h === t.id ? null : h))}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelected((s) => (s === t.id ? null : t.id));
                        }}
                      >
                        <Tile
                          id={t.id}
                          size="md"
                          selected={activeId === t.id}
                          dimmed={activeId && activeId !== t.id}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Info card — sticky on desktop */}
          <aside className="mj-info-card">
            {info ? (
              <>
                <div className="mj-info-big">
                  <Tile id={info.id} size="xl" />
                </div>
                <div className="mj-info-zh">{info.zh}</div>
                <div className="mj-info-en">{info.en}</div>
                <div className="mj-info-meta">
                  {info.suit === 'wan' && 'Suit · Characters (萬). Read the top symbol as the number, bottom as the suit.'}
                  {info.suit === 'tiao' && 'Suit · Bamboo (條). The 1-bamboo shows a bird — a classical flourish.'}
                  {info.suit === 'bing' && 'Suit · Dots (餅). Each circle is a stack of coins.'}
                  {info.suit === 'wind' && 'Honor tile · one of four winds. Your seat wind and the round wind both matter for scoring.'}
                  {info.suit === 'dragon' && 'Honor tile · one of three dragons. A pung of dragons is always worth points.'}
                  {info.suit === 'flower' && `Bonus tile · Taiwan only. Reveal immediately when drawn, then draw a replacement. Tile #${info.num} matches seat ${info.num} — worth 1 臺 if the number matches your seat.`}
                  {info.suit === 'season' && `Bonus tile · Taiwan only. Reveal immediately when drawn, then draw a replacement. Tile #${info.num} matches seat ${info.num} — worth 1 臺 if the number matches your seat.`}
                </div>
              </>
            ) : (
              <div className="mj-info-empty">
                <div className="mj-info-empty-h">Hover or tap a tile</div>
                <div className="mj-info-empty-p">
                  Each appears four times in the wall. The numbered suits behave like three independent decks; the honors can't form runs.
                </div>
              </div>
            )}
          </aside>
        </div>

        {mounted && ReactDOM.createPortal(
          <div
            className={`mj-tile-popup ${selected ? 'is-active' : ''}`}
            onClick={() => setSelected(null)}
          >
            <div className="mj-tile-popup-sheet" onClick={e => e.stopPropagation()}>
              <button className="mj-tile-popup-close" onClick={() => setSelected(null)}>✕</button>
              {info && (
                <>
                  <div className="mj-info-big"><Tile id={info.id} size="xl" /></div>
                  <div className="mj-info-zh">{info.zh}</div>
                  <div className="mj-info-en">{info.en}</div>
                  <div className="mj-info-meta">
                    {info.suit === 'wan' && 'Suit · Characters (萬). Read the top symbol as the number, bottom as the suit.'}
                    {info.suit === 'tiao' && 'Suit · Bamboo (條). The 1-bamboo shows a bird — a classical flourish.'}
                    {info.suit === 'bing' && 'Suit · Dots (餅). Each circle is a stack of coins.'}
                    {info.suit === 'wind' && 'Honor tile · one of four winds. Your seat wind and the round wind both matter for scoring.'}
                    {info.suit === 'dragon' && 'Honor tile · one of three dragons. A pung of dragons is always worth points.'}
                    {info.suit === 'flower' && `Bonus tile · Taiwan only. Reveal immediately when drawn, then draw a replacement. Tile #${info.num} matches seat ${info.num} — worth 1 臺 if the number matches your seat.`}
                    {info.suit === 'season' && `Bonus tile · Taiwan only. Reveal immediately when drawn, then draw a replacement. Tile #${info.num} matches seat ${info.num} — worth 1 臺 if the number matches your seat.`}
                  </div>
                </>
              )}
            </div>
          </div>,
          document.body
        )}

        {variant === 'taiwan' && suit !== 'flower' && (
          <div className="mj-flower-section">
            <div className="mj-kicker" style={{marginBottom: 28}}>Bonus tiles · Taiwan only</div>
            <div className="mj-tile-grid">
            {Object.keys(FLOWER_TILES).map((group) => (
              <div key={group} className="mj-suit-row">
                <div className="mj-suit-label">
                  <div className="mj-suit-title">{FLOWER_META[group].label}</div>
                  <div className="mj-suit-sub">{FLOWER_META[group].sub}</div>
                  <div className="mj-suit-desc">{FLOWER_META[group].desc}</div>
                  <div className="mj-suit-count">4 tiles · each 1 of a kind</div>
                </div>
                <div className="mj-suit-tiles mj-suit-tiles-honors">
                  {FLOWER_TILES[group].map((t) => (
                    <div
                      key={t.id}
                      onMouseEnter={isTouch ? undefined : () => setHovered(t.id)}
                      onMouseLeave={isTouch ? undefined : () => setHovered((h) => (h === t.id ? null : h))}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelected((s) => (s === t.id ? null : t.id));
                      }}
                    >
                      <Tile
                        id={t.id}
                        size="md"
                        selected={activeId === t.id}
                        dimmed={activeId && activeId !== t.id}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// Section 2 — How do you win?
// Animated hand reveal. Shows 13+1 tiles resolving into 4 melds + 1 pair.
// Also includes a scoring rundown with example hands.

const WINNING_HANDS = [
  {
    id: 'basic',
    name: 'Standard hand',
    zh: '平胡',
    melds: [
      { type: 'chow', tiles: ['wan-2', 'wan-3', 'wan-4'], label: 'Chow · 2-3-4 Characters' },
      { type: 'pung', tiles: ['tiao-5', 'tiao-5', 'tiao-5'], label: 'Pung · 5 Bamboo' },
      { type: 'chow', tiles: ['bing-7', 'bing-8', 'bing-9'], label: 'Chow · 7-8-9 Circles' },
      { type: 'pung', tiles: ['east', 'east', 'east'], label: 'Pung · East Wind' },
      { type: 'pair', tiles: ['red', 'red'], label: 'Pair · Red Dragon' },
    ],
    points: '1 fan',
    desc: 'Four sets + one pair. The pair is the "eyes". Any combination of chows and pungs works.',
  },
  {
    id: 'pingwu',
    name: 'All Chows',
    zh: '平胡',
    melds: [
      { type: 'chow', tiles: ['wan-2', 'wan-3', 'wan-4'], label: 'Chow · 2-3-4 Characters' },
      { type: 'chow', tiles: ['tiao-5', 'tiao-6', 'tiao-7'], label: 'Chow · 5-6-7 Bamboo' },
      { type: 'chow', tiles: ['bing-3', 'bing-4', 'bing-5'], label: 'Chow · 3-4-5 Circles' },
      { type: 'chow', tiles: ['wan-6', 'wan-7', 'wan-8'], label: 'Chow · 6-7-8 Characters' },
      { type: 'pair', tiles: ['bing-9', 'bing-9'], label: 'Pair · 9 Circles' },
    ],
    points: '1 fan',
    desc: 'All four sets are chows (sequences), and the pair is not an honor tile. The most common 1-fan bonus.',
  },
  {
    id: 'allpungs',
    name: 'All Pungs',
    zh: '對對胡',
    melds: [
      { type: 'pung', tiles: ['wan-3', 'wan-3', 'wan-3'], label: 'Pung · 3 Characters' },
      { type: 'pung', tiles: ['tiao-7', 'tiao-7', 'tiao-7'], label: 'Pung · 7 Bamboo' },
      { type: 'pung', tiles: ['bing-2', 'bing-2', 'bing-2'], label: 'Pung · 2 Circles' },
      { type: 'pung', tiles: ['south', 'south', 'south'], label: 'Pung · South Wind' },
      { type: 'pair', tiles: ['green', 'green'], label: 'Pair · Green Dragon' },
    ],
    points: '3 fan',
    desc: 'Every set is a triplet — no runs allowed. A fan/yaku in most rulesets.',
  },
  {
    id: 'sevenpairs',
    name: 'Seven Pairs',
    zh: '七對子',
    melds: [
      { type: 'pair', tiles: ['wan-1', 'wan-1'], label: 'Pair · 1 Characters' },
      { type: 'pair', tiles: ['tiao-4', 'tiao-4'], label: 'Pair · 4 Bamboo' },
      { type: 'pair', tiles: ['bing-7', 'bing-7'], label: 'Pair · 7 Circles' },
      { type: 'pair', tiles: ['bing-3', 'bing-3'], label: 'Pair · 3 Circles' },
      { type: 'pair', tiles: ['east', 'east'], label: 'Pair · East Wind' },
      { type: 'pair', tiles: ['red', 'red'], label: 'Pair · Red Dragon' },
      { type: 'pair', tiles: ['wan-8', 'wan-8'], label: 'Pair · 8 Characters' },
    ],
    points: '3 fan',
    desc: 'Seven pairs — no sets at all. All 14 tiles pair up. Each pair must be unique (you can\'t use four-of-a-kind as two pairs).',
  },
  {
    id: 'halfflush',
    name: 'Half Flush',
    zh: '混一色',
    melds: [
      { type: 'chow', tiles: ['tiao-1', 'tiao-2', 'tiao-3'], label: 'Chow · 1-2-3 Bamboo' },
      { type: 'chow', tiles: ['tiao-5', 'tiao-6', 'tiao-7'], label: 'Chow · 5-6-7 Bamboo' },
      { type: 'pung', tiles: ['tiao-9', 'tiao-9', 'tiao-9'], label: 'Pung · 9 Bamboo' },
      { type: 'pung', tiles: ['east', 'east', 'east'], label: 'Pung · East Wind' },
      { type: 'pair', tiles: ['red', 'red'], label: 'Pair · Red Dragon' },
    ],
    points: '3 fan',
    desc: 'One suit mixed with honor tiles (winds and/or dragons). All numbered tiles must be the same suit.',
  },
  {
    id: 'purity',
    name: 'All Same Suit',
    zh: '清一色',
    melds: [
      { type: 'chow', tiles: ['bing-1', 'bing-2', 'bing-3'], label: 'Chow · 1-2-3 Circles' },
      { type: 'chow', tiles: ['bing-4', 'bing-5', 'bing-6'], label: 'Chow · 4-5-6 Circles' },
      { type: 'chow', tiles: ['bing-7', 'bing-8', 'bing-9'], label: 'Chow · 7-8-9 Circles' },
      { type: 'pung', tiles: ['bing-2', 'bing-2', 'bing-2'], label: 'Pung · 2 Circles' },
      { type: 'pair', tiles: ['bing-5', 'bing-5'], label: 'Pair · 5 Circles' },
    ],
    points: '6 fan',
    desc: 'The entire hand is one suit. No honors, no winds, no dragons. Rare and beautiful.',
  },
  {
    id: 'thirteen',
    name: 'Thirteen Orphans',
    zh: '十三幺',
    melds: [
      { type: 'special', tiles: ['wan-1', 'wan-9', 'tiao-1', 'tiao-9', 'bing-1', 'bing-9', 'east'], label: 'Terminals & honors' },
      { type: 'special', tiles: ['south', 'west', 'north', 'red', 'green', 'white', 'wan-1'], label: 'Plus any duplicate' },
    ],
    points: 'Limit',
    desc: 'One of each terminal (1s and 9s) and each honor tile, plus any one of those duplicated. A special hand.',
  },
];

const WINNING_HANDS_TAIWAN = [
  {
    id: 'basic',
    name: 'Standard hand',
    zh: '平胡',
    melds: [
      { type: 'chow', tiles: ['wan-2', 'wan-3', 'wan-4'], label: 'Chow · 2-3-4 Characters' },
      { type: 'chow', tiles: ['tiao-3', 'tiao-4', 'tiao-5'], label: 'Chow · 3-4-5 Bamboo' },
      { type: 'chow', tiles: ['bing-6', 'bing-7', 'bing-8'], label: 'Chow · 6-7-8 Circles' },
      { type: 'pung', tiles: ['east', 'east', 'east'], label: 'Pung · East Wind' },
      { type: 'chow', tiles: ['wan-6', 'wan-7', 'wan-8'], label: 'Chow · 6-7-8 Characters' },
      { type: 'pair', tiles: ['red', 'red'], label: 'Pair · Red Dragon' },
    ],
    points: '1 臺',
    desc: 'Five sets + one pair — 17 tiles total. Taiwan hands have one extra meld compared to Hong Kong. You need at least 1 臺 to declare a valid win.',
  },
  {
    id: 'allpungs',
    name: 'All Pungs',
    zh: '對對胡',
    melds: [
      { type: 'pung', tiles: ['wan-3', 'wan-3', 'wan-3'], label: 'Pung · 3 Characters' },
      { type: 'pung', tiles: ['tiao-7', 'tiao-7', 'tiao-7'], label: 'Pung · 7 Bamboo' },
      { type: 'pung', tiles: ['bing-2', 'bing-2', 'bing-2'], label: 'Pung · 2 Circles' },
      { type: 'pung', tiles: ['south', 'south', 'south'], label: 'Pung · South Wind' },
      { type: 'pung', tiles: ['wan-9', 'wan-9', 'wan-9'], label: 'Pung · 9 Characters' },
      { type: 'pair', tiles: ['green', 'green'], label: 'Pair · Green Dragon' },
    ],
    points: '3 臺',
    desc: 'All five sets are triplets — no runs at all. Worth 3 臺 in Taiwan scoring.',
  },
  {
    id: 'halfflush',
    name: 'Half Flush',
    zh: '混一色',
    melds: [
      { type: 'chow', tiles: ['wan-1', 'wan-2', 'wan-3'], label: 'Chow · 1-2-3 Characters' },
      { type: 'chow', tiles: ['wan-4', 'wan-5', 'wan-6'], label: 'Chow · 4-5-6 Characters' },
      { type: 'pung', tiles: ['wan-9', 'wan-9', 'wan-9'], label: 'Pung · 9 Characters' },
      { type: 'pung', tiles: ['east', 'east', 'east'], label: 'Pung · East Wind' },
      { type: 'pung', tiles: ['red', 'red', 'red'], label: 'Pung · Red Dragon' },
      { type: 'pair', tiles: ['wan-7', 'wan-7'], label: 'Pair · 7 Characters' },
    ],
    points: '3 臺',
    desc: 'One suit plus honor tiles (winds or dragons). Mixing honors with a single suit earns 3 臺.',
  },
  {
    id: 'sevenpairs',
    name: 'Seven Pairs',
    zh: '七對子',
    melds: [
      { type: 'pair', tiles: ['wan-2', 'wan-2'], label: 'Pair · 2 Characters' },
      { type: 'pair', tiles: ['tiao-5', 'tiao-5'], label: 'Pair · 5 Bamboo' },
      { type: 'pair', tiles: ['bing-8', 'bing-8'], label: 'Pair · 8 Circles' },
      { type: 'pair', tiles: ['wan-6', 'wan-6'], label: 'Pair · 6 Characters' },
      { type: 'pair', tiles: ['south', 'south'], label: 'Pair · South Wind' },
      { type: 'pair', tiles: ['green', 'green'], label: 'Pair · Green Dragon' },
      { type: 'pair', tiles: ['bing-1', 'bing-1'], label: 'Pair · 1 Circles' },
    ],
    points: '3 臺',
    desc: 'Seven pairs — a special hand of exactly 14 tiles (not 17). Each pair must be unique. Worth 3 臺.',
  },
  {
    id: 'purity',
    name: 'All Same Suit',
    zh: '清一色',
    melds: [
      { type: 'chow', tiles: ['bing-1', 'bing-2', 'bing-3'], label: 'Chow · 1-2-3 Circles' },
      { type: 'chow', tiles: ['bing-2', 'bing-3', 'bing-4'], label: 'Chow · 2-3-4 Circles' },
      { type: 'chow', tiles: ['bing-5', 'bing-6', 'bing-7'], label: 'Chow · 5-6-7 Circles' },
      { type: 'pung', tiles: ['bing-8', 'bing-8', 'bing-8'], label: 'Pung · 8 Circles' },
      { type: 'chow', tiles: ['bing-7', 'bing-8', 'bing-9'], label: 'Chow · 7-8-9 Circles' },
      { type: 'pair', tiles: ['bing-5', 'bing-5'], label: 'Pair · 5 Circles' },
    ],
    points: '8 臺',
    desc: 'All five sets and the pair are the same suit — no honors, no winds, no dragons. One of the biggest regular hands in Taiwan rules.',
  },
  {
    id: 'thirteen',
    name: 'Thirteen Orphans',
    zh: '十三幺',
    melds: [
      { type: 'special', tiles: ['wan-1', 'wan-9', 'tiao-1', 'tiao-9', 'bing-1', 'bing-9', 'east'], label: 'Terminals & honors' },
      { type: 'special', tiles: ['south', 'west', 'north', 'red', 'green', 'white', 'wan-1'], label: 'Plus any duplicate' },
    ],
    points: 'Limit',
    desc: 'One of each terminal (1s and 9s) and each honor tile, plus any one of those duplicated. A special hand worth max payout.',
  },
];

function SectionWin() {
  const variant = React.useContext(VariantContext);
  const hands = variant === 'taiwan' ? WINNING_HANDS_TAIWAN : WINNING_HANDS;
  const [handIdx, setHandIdx] = React.useState(0);
  const [stage, setStage] = React.useState(0);
  const [playing, setPlaying] = React.useState(false);
  const tabsRef = React.useRef(null);
  const hand = hands[handIdx];
  const allTiles = hand.melds.flatMap((m) => m.tiles);

  // Reset hand selection when switching variants
  React.useEffect(() => { setHandIdx(0); }, [variant]);

  // Auto-play the reveal when a hand is selected
  React.useEffect(() => {
    setStage(0);
    const t1 = setTimeout(() => setStage(1), 400);
    const t2 = setTimeout(() => setStage(2), 1300);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [handIdx]);

  // Scroll active tab into view in the tab bar
  React.useEffect(() => {
    const container = tabsRef.current;
    if (!container) return;
    const tab = container.children[handIdx];
    if (!tab) return;
    const cRect = container.getBoundingClientRect();
    const tRect = tab.getBoundingClientRect();
    const target = container.scrollLeft + tRect.left - cRect.left - (cRect.width - tRect.width) / 2;
    container.scrollTo({ left: Math.max(0, target), behavior: 'smooth' });
  }, [handIdx]);

  const replay = () => {
    setStage(0);
    setTimeout(() => setStage(1), 400);
    setTimeout(() => setStage(2), 1300);
  };

  return (
    <section id="section-win" className="mj-section" data-screen-label="02 Win">
      <div className="mj-section-head">
        <div className="mj-kicker">Section 02 · The goal</div>
        <h2 className="mj-h2">How do you win?</h2>
        <p className="mj-lede">
          {variant === 'taiwan' ? (
            <>A winning hand is <strong>5 sets + 1 pair</strong> — 17 tiles total (you hold 16, draw 1 to win). A "set" is a <em>chow</em> (three in a row, same suit), a <em>pung</em> (three of a kind), or a <em>kong</em> (four of a kind). You must reach at least <strong>1 臺</strong> to declare — a bare hand with no scoring combination is not allowed.</>
          ) : (
            <>A winning hand is <strong>4 sets + 1 pair</strong> — 14 tiles total. A "set" is either a <em>chow</em> (three in a row, same suit), a <em>pung</em> (three of a kind), or a <em>kong</em> (four of a kind). The pair is called the <em>eyes</em>.</>
          )}
        </p>
        <div className="mj-callout">
          {variant === 'taiwan' ? (
            <>You always hold <strong>16 tiles</strong>. You win the moment you draw or claim a 17th tile that completes your hand — so every standard winning hand is exactly 17 tiles. (Seven Pairs is a special exception at 14 tiles.)</>
          ) : (
            <>You always hold <strong>13 tiles</strong>. You win the moment you draw or claim a 14th tile that completes your hand — so every winning hand is exactly 14 tiles total.</>
          )}
        </div>
      </div>

      <div className="mj-hand-reveal">
        <div className="mj-wins-kicker">Winning hands</div>
        <div className="mj-hand-tabs" ref={tabsRef}>
          {hands.map((h, i) => (
            <button
              key={h.id}
              className={`mj-tab ${handIdx === i ? 'is-active' : ''}`}
              onClick={() => setHandIdx(i)}
            >
              <div className="mj-tab-zh">{h.zh}</div>
              <div className="mj-tab-name">{h.name}</div>
              <div className="mj-tab-pts">{h.points}</div>
            </button>
          ))}
        </div>

        <div className="mj-hand-stage">
          <div className="mj-stage-header">
            <div>
              <div className="mj-stage-name">{hand.name} <span className="mj-stage-zh">· {hand.zh}</span></div>
              <div className="mj-stage-desc">{hand.desc}</div>
            </div>
            <button className="mj-btn" onClick={replay}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M1 2v4h4M13 12v-4h-4"/>
                <path d="M11 5A5 5 0 0 0 2 6M3 9a5 5 0 0 0 9-1"/>
              </svg>
              Replay
            </button>
          </div>

          {hand.id === 'thirteen' ? (
            <div className="mj-hand-flat">
              {hand.melds[0].tiles.concat(hand.melds[1].tiles).map((t, i) => (
                <div key={i} style={{
                  opacity: stage >= 1 ? 1 : 0,
                  transform: stage >= 1 ? 'translateY(0) rotate(0deg)' : `translateY(28px) rotate(${(i % 2 === 0 ? 1 : -1) * ((i % 5) + 2)}deg)`,
                  transition: `all 380ms cubic-bezier(.2,.85,.2,1) ${i * 65}ms`,
                }}>
                  <Tile id={t} size="md" />
                </div>
              ))}
            </div>
          ) : (
            <div className={`mj-hand-sets stage-${stage}`}>
              {hand.melds.map((meld, mi) => (
                <div key={mi} className={`mj-meld meld-${meld.type}`} style={{
                  opacity: stage >= 1 ? 1 : 0,
                  transform: stage >= 1 ? 'translateY(0)' : 'translateY(12px)',
                  transition: `all 500ms cubic-bezier(.3,.7,.3,1) ${mi * 140}ms`,
                }}>
                  <div className="mj-meld-tiles">
                    {meld.tiles.map((t, ti) => (
                      <div key={ti} style={{
                        opacity: stage >= 2 ? 1 : stage >= 1 ? 0.85 : 0,
                        transform: stage >= 2 ? 'translateY(0)' : 'translateY(-4px)',
                        transition: `all 400ms cubic-bezier(.3,.7,.3,1) ${mi * 140 + ti * 80 + 200}ms`,
                      }}>
                        <Tile id={t} size="lg" />
                      </div>
                    ))}
                  </div>
                  <div className="mj-meld-label" style={{
                    opacity: stage >= 2 ? 1 : 0,
                    transition: `opacity 300ms ${mi * 140 + 500}ms`,
                  }}>
                    {meld.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mj-stage-footer">
            <div className="mj-stage-count">
              <div className="mj-count-big">{allTiles.length}</div>
              <div className="mj-count-lbl">tiles total</div>
            </div>
            <div className="mj-stage-arrow">→</div>
            <div className="mj-stage-formula">
              {hand.id === 'sevenpairs' ? (
                <span><strong>7</strong> pairs</span>
              ) : (
                <span><strong>{hand.melds.filter(m => m.type !== 'pair').length}</strong> sets + <strong>1</strong> pair</span>
              )}
            </div>
            <div className="mj-stage-arrow">=</div>
            <div className="mj-stage-pts">{hand.points}</div>
          </div>
        </div>

        {/* Winning hands summary grid */}
        <div className="mj-scoring">
          <div className="mj-scoring-h">At a glance</div>
          <div className="mj-scoring-grid">
            {hands.map((h, i) => {
              const preview = h.id === 'thirteen'
                ? h.melds[0].tiles.slice(0, 5)
                : h.id === 'sevenpairs'
                ? [...h.melds[0].tiles, ...h.melds[1].tiles]
                : h.melds[0].tiles;
              return (
                <div
                  key={h.id}
                  className={`mj-score-row mj-score-row-hand${handIdx === i ? ' is-active' : ''}`}
                  onClick={() => setHandIdx(i)}
                >
                  <div className="mj-score-name">{h.name}<span className="mj-score-zh"> · {h.zh}</span></div>
                  <div className="mj-score-tiles">{preview.map((t, ti) => <Tile key={ti} id={t} size="xs" />)}</div>
                  <div className="mj-score-desc">{h.desc}</div>
                  <div className="mj-score-val">{h.points}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Scoring aside */}
        {variant === 'taiwan' ? (
          <div className="mj-scoring">
            <div className="mj-scoring-h">Scoring bonuses · Taiwan</div>
            <div className="mj-scoring-fan">
              <strong>臺</strong> (tái) = scoring unit. Each 臺 doubles your base payout — same exponential logic as fan, different name. Minimum <strong>1 臺</strong> to win; a hand with zero 臺 is an illegal win (烏龍) and earns a penalty. These bonuses stack on top of any winning hand.
            </div>
            <div className="mj-scoring-grid">
              {[
                { name: 'Self-draw (自摸)', desc: 'You drew your own winning tile', val: '1 臺', tiles: ['wan-5'] },
                { name: 'Pung of dragons', desc: 'Three of any dragon tile', val: '1 臺', tiles: ['red','red','red'] },
                { name: 'Pung of seat/round wind', desc: 'Your wind, or the prevailing wind', val: '1 臺', tiles: ['east','east','east'] },
                { name: 'Matching flower or season', desc: 'Flower/season number = your seat number', val: '1 臺 each', tiles: ['spring','mei'] },
              ].map((r, i) => (
                <div key={i} className={`mj-score-row${r.limit ? ' mj-score-limit' : ''}`}>
                  <div className="mj-score-name">{r.name}</div>
                  <div className="mj-score-tiles">{r.tiles.map((t, ti) => <Tile key={ti} id={t} size="xs" />)}</div>
                  <div className="mj-score-desc">{r.desc}</div>
                  <div className="mj-score-val">{r.val}</div>
                </div>
              ))}
            </div>
            <div className="mj-scoring-note">
              Self-draw (自摸): all three opponents pay you directly. On a discard win, only the discarder pays. Dealer pays or receives double.
            </div>
          </div>
        ) : (
          <div className="mj-scoring">
            <div className="mj-scoring-h">Scoring bonuses</div>
            <div className="mj-scoring-fan">
              <strong>Fan</strong> (番 · fān) = scoring doubles. Every fan <em>doubles</em> your base points — so 3 fan = 2³ = 8× base, 6 fan = 64×. These bonuses stack on top of any winning hand.
            </div>
            <div className="mj-scoring-grid">
              {[
                { name: 'Pung of dragons', desc: 'Three of any dragon tile', val: '1 fan', tiles: ['red','red','red'] },
                { name: 'Pung of seat/round wind', desc: 'Your wind, or the prevailing wind', val: '1 fan', tiles: ['east','east','east'] },
                { name: 'Self-drawn winning tile', desc: 'You drew your own winner', val: '+1 fan', tiles: ['wan-8'] },
              ].map((r, i) => (
                <div key={i} className={`mj-score-row${r.limit ? ' mj-score-limit' : ''}`}>
                  <div className="mj-score-name">{r.name}</div>
                  <div className="mj-score-tiles">{r.tiles.map((t, ti) => <Tile key={ti} id={t} size="xs" />)}</div>
                  <div className="mj-score-desc">{r.desc}</div>
                  <div className="mj-score-val">{r.val}</div>
                </div>
              ))}
            </div>
            <div className="mj-scoring-note">
              Final score ≈ base points × 2<sup>fan</sup>. More fan = exponentially more points. The loser(s) pay the winner; self-draw means everyone pays.
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// Section 4 — How do you draw cards?
// Interactive wall. All 4 steps visible at once; wall shown for each.

function SectionDraw() {
  const variant = React.useContext(VariantContext);
  const MAX_HAND = variant === 'taiwan' ? 17 : 14;

  const [hand, setHand] = React.useState([]);
  const [drawing, setDrawing] = React.useState(false);
  const [sorted, setSorted] = React.useState(false);

  const DRAW_POOL = [
    'wan-3', 'bing-7', 'tiao-5', 'east', 'wan-8', 'bing-2',
    'tiao-2', 'red', 'wan-5', 'bing-5', 'south', 'tiao-9',
    'green', 'wan-1', 'bing-9', 'tiao-4', 'west', 'wan-6',
  ];

  const SUIT_ORDER = { wan: 0, bing: 1, tiao: 2 };
  const WIND_ORDER = { east: 0, south: 1, west: 2, north: 3 };
  const DRAGON_ORDER = { red: 0, green: 1, white: 2 };
  const WINDS = new Set(['east', 'south', 'west', 'north']);
  const DRAGONS = new Set(['red', 'green', 'white']);

  const sortHand = (tiles) => [...tiles].sort((a, b) => {
    const getSuit = t => t.includes('-') ? t.split('-')[0] : t;
    const getNum = t => t.includes('-') ? parseInt(t.split('-')[1]) : 0;
    const suitA = getSuit(a), suitB = getSuit(b);
    const groupA = WINDS.has(a) ? 1 : DRAGONS.has(a) ? 2 : 0;
    const groupB = WINDS.has(b) ? 1 : DRAGONS.has(b) ? 2 : 0;
    if (groupA !== groupB) return groupA - groupB;
    if (groupA === 0) {
      if (suitA !== suitB) return SUIT_ORDER[suitA] - SUIT_ORDER[suitB];
      return getNum(a) - getNum(b);
    }
    if (groupA === 1) return WIND_ORDER[a] - WIND_ORDER[b];
    return DRAGON_ORDER[a] - DRAGON_ORDER[b];
  });

  // Dice-driven break logic (classical Hong Kong / Chinese rules):
  //   total mod 4: 1→E, 2→S, 3→W, 0→N (treating 4/8/12 as N)
  //   then count that many stacks from the RIGHT end of that player's wall.
  const [d1, setD1] = React.useState(3);
  const [d2, setD2] = React.useState(5);
  const [rolling, setRolling] = React.useState(false);
  const total = d1 + d2;
  const SEATS = ['east', 'south', 'west', 'north'];
  const SEAT_META = {
    east:  { zh: '東', en: 'East',  label: '東 E',  wallSide: 'right',  nums: [1, 5, 9] },
    south: { zh: '南', en: 'South', label: '南 S',  wallSide: 'bottom', nums: [2, 6, 10] },
    west:  { zh: '西', en: 'West',  label: '西 W',  wallSide: 'left',   nums: [3, 7, 11] },
    north: { zh: '北', en: 'North', label: '北 N',  wallSide: 'top',    nums: [4, 8, 12] },
  };
  const seatFor = (t) => SEATS[(t - 1) % 4];
  const breakSeat = seatFor(total);
  // Count `total` stacks from the right end of that wall (0-indexed from right):
  const breakStackFromRight = total - 1;

  const rollDice = () => {
    if (rolling) return;
    setRolling(true);
    let ticks = 0;
    const iv = setInterval(() => {
      setD1(1 + Math.floor(Math.random() * 6));
      setD2(1 + Math.floor(Math.random() * 6));
      ticks++;
      if (ticks >= 10) {
        clearInterval(iv);
        setRolling(false);
      }
    }, 60);
  };

  const DiceFace = ({ v }) => {
    const faces = ['⚀','⚁','⚂','⚃','⚄','⚅'];
    return <span className="mj-die-face">{faces[v - 1]}</span>;
  };

  const doDraw = () => {
    if (drawing || hand.length >= MAX_HAND) return;
    setDrawing(true);
    const next = DRAW_POOL[hand.length % DRAW_POOL.length];
    setTimeout(() => {
      setHand((h) => {
        const newHand = [...h, next];
        if (newHand.length === MAX_HAND) {
          setSorted(true);
          return sortHand(newHand);
        }
        return newHand;
      });
      setDrawing(false);
    }, 280);
  };

  const resetHand = () => {
    setHand([]);
    setSorted(false);
  };

  const discardTile = (idx) => {
    if (hand.length !== MAX_HAND) return;
    setHand(h => h.filter((_, i) => i !== idx));
    setSorted(false);
  };

  const wallSides = ['top', 'right', 'bottom', 'left'];

  const SmallWall = ({ variant, showDirection, breakSeat: bSeat, breakIdx }) => (
    <div className={`mj-wall-mini variant-${variant}`}>
      <div className="mj-wall-inner">
        {wallSides.map((side) => {
          // Map side → seat for dynamic break highlighting
          const sideToSeat = { top: 'north', right: 'east', bottom: 'south', left: 'west' };
          const isBreakSide = variant === 'break' && bSeat && sideToSeat[side] === bSeat;
          return (
          <div key={side} className={`mj-wall-side mj-wall-${side} ${isBreakSide ? 'is-break-side' : ''}`}>
            {Array.from({ length: 17 }).map((_, i) => {
              // For the break: count breakIdx stacks from the RIGHT end of the side.
              // In the DOM each .mj-wall-side goes left→right; "right end" = last stack (i=16).
              const isBroken = isBreakSide && i === 16 - breakIdx;
              const isBreakDead = isBreakSide && i > 16 - breakIdx;
              const isDealt = variant === 'deal' && side === 'top' && i >= 10;
              return (
                <div
                  key={i}
                  className={`mj-wall-stack ${isBroken ? 'is-break' : ''} ${isBreakDead ? 'is-dim' : ''} ${isDealt ? 'is-drawn' : ''}`}
                >
                  <div className="mj-wall-tile mj-wall-top-tile" />
                  <div className="mj-wall-tile mj-wall-bot-tile" />
                </div>
              );
            })}
          </div>
          );
        })}
        {variant === 'break' && showDirection !== false && (
          <>
            <div className="mj-dir-arrow mj-dir-arrow-top"><span className="mj-dir-arrow-label">北 N</span></div>
            <div className="mj-dir-arrow mj-dir-arrow-left"><span className="mj-dir-arrow-label">西 W</span></div>
            <div className="mj-dir-arrow mj-dir-arrow-bottom"><span className="mj-dir-arrow-label">南 S</span></div>
            <div className="mj-dir-arrow mj-dir-arrow-right"><span className="mj-dir-arrow-label">東 E</span></div>
          </>
        )}
        {showDirection && variant !== 'break' && (
          <>
            <div className="mj-dir-arrow mj-dir-arrow-top"><span className="mj-dir-arrow-label">北 N</span><span className="mj-dir-arrow-glyph">←</span></div>
            <div className="mj-dir-arrow mj-dir-arrow-left"><span className="mj-dir-arrow-glyph">↓</span><span className="mj-dir-arrow-label">西 W</span></div>
            <div className="mj-dir-arrow mj-dir-arrow-bottom"><span className="mj-dir-arrow-glyph">→</span><span className="mj-dir-arrow-label">南 S</span></div>
            <div className="mj-dir-arrow mj-dir-arrow-right"><span className="mj-dir-arrow-label">東 E</span><span className="mj-dir-arrow-glyph">↑</span></div>
          </>
        )}
      </div>
    </div>
  );

  const handFull = hand.length === MAX_HAND;

  return (
    <section id="section-draw" className="mj-section" data-screen-label="04 Draw">
      <div className="mj-section-head">
        <div className="mj-kicker">Section 03 · Opening the game</div>
        <h2 className="mj-h2">How do you draw tiles?</h2>
        <p className="mj-lede">
          Before the first turn, the 136 tiles become a <strong>square wall</strong> that shrinks as players draw from it. Here's the opening ritual — in four steps.
        </p>
      </div>

      {/* Dealer selection callout */}
      <div className="mj-dealer-card">
        <div className="mj-dealer-item">
          <div className="mj-dealer-item-h">Choosing the first dealer</div>
          <p>Each player rolls two dice. The highest total takes the <strong>East seat</strong> and becomes the first dealer. Ties re-roll between the tied players.</p>
        </div>
        <div className="mj-dealer-divider" />
        <div className="mj-dealer-item">
          <div className="mj-dealer-item-h">Dealer rotation</div>
          {variant === 'taiwan' ? (
            <p>Same as Hong Kong rules — the dealer keeps the East seat as long as they win. When any <em>other</em> player wins, the deal passes <strong>counter-clockwise</strong>. A drawn hand also keeps the dealer in place.</p>
          ) : (
            <p>The dealer keeps the East seat for as long as they keep winning. The moment any <em>other</em> player wins, the deal passes <strong>counter-clockwise</strong> — South becomes East, West becomes South, and so on. A drawn hand (荒莊) also keeps the dealer in place.</p>
          )}
        </div>
      </div>

      {/* 4-step walkthrough — all visible at once */}
      <div className="mj-draw-steps">
        <div className="mj-draw-step">
          <div className="mj-draw-step-num">1</div>
          <div className="mj-draw-step-content">
            <div className="mj-draw-step-title">Build the wall</div>
            <p>All 136 tiles are shuffled face-down and stacked two-high in a square. Each side is 17 stacks long — 17 × 2 × 4 = 136.</p>
          </div>
          <SmallWall variant="build" />
        </div>

        <div className="mj-draw-step">
          <div className="mj-draw-step-num">2</div>
          <div className="mj-draw-step-content">
            <div className="mj-draw-step-title">Break the wall</div>
            <p>The dealer rolls two dice. The <strong>total</strong> does two things at once — it picks whose wall to break, and how many stacks in from the right to break it.</p>

            <div className="mj-break-rules">
              <div className="mj-break-rule">
                <div className="mj-break-rule-h">① Whose wall?</div>
                <div className="mj-break-rule-p">Count the total <em>counter-clockwise</em> starting from the dealer (East = 1).</div>
                <div className="mj-break-map">
                  <div className={`mj-break-map-row ${breakSeat==='east'?'is-on':''}`}><span className="mj-break-map-seat"><em>東</em> East</span><span className="mj-break-map-nums">1 · 5 · 9</span></div>
                  <div className={`mj-break-map-row ${breakSeat==='south'?'is-on':''}`}><span className="mj-break-map-seat"><em>南</em> South</span><span className="mj-break-map-nums">2 · 6 · 10</span></div>
                  <div className={`mj-break-map-row ${breakSeat==='west'?'is-on':''}`}><span className="mj-break-map-seat"><em>西</em> West</span><span className="mj-break-map-nums">3 · 7 · 11</span></div>
                  <div className={`mj-break-map-row ${breakSeat==='north'?'is-on':''}`}><span className="mj-break-map-seat"><em>北</em> North</span><span className="mj-break-map-nums">4 · 8 · 12</span></div>
                </div>
              </div>
              <div className="mj-break-rule">
                <div className="mj-break-rule-h">② Where on it?</div>
                <div className="mj-break-rule-p">On that player's wall, count the same total in stacks from the <em>right end</em>. That's your break point. Tiles to the left are the live wall; to the right, the dead wall (kongs &amp; replacements).</div>
              </div>
            </div>

            <div className="mj-dice-row">
              <button className="mj-dice-btn" onClick={rollDice} disabled={rolling}>
                <DiceFace v={d1} /><DiceFace v={d2} />
                <span className="mj-dice-total">= {total}</span>
                <span className="mj-dice-reroll">{rolling ? 'rolling…' : '↻ roll'}</span>
              </button>
              <div className="mj-dice-explain">
                → {total} lands on <strong>{SEAT_META[breakSeat].en}</strong> <em>({SEAT_META[breakSeat].zh})</em>. Break at stack <strong>{total}</strong> from the right.
              </div>
            </div>
          </div>
          <SmallWall variant="break" breakSeat={breakSeat} breakIdx={breakStackFromRight} />
        </div>

        <div className="mj-draw-step">
          <div className="mj-draw-step-num">3</div>
          <div className="mj-draw-step-content">
            <div className="mj-draw-step-title">
              {variant === 'taiwan' ? 'Deal 16 to each player' : 'Deal 13 to each player'}
            </div>
            {variant === 'taiwan' ? (
              <p>Four tiles at a time until everyone has 16. The dealer draws first to hold 17. Any <strong>flower or season tile</strong> drawn during the deal is immediately revealed, set aside, and replaced from the dead wall — this can chain if the replacement is also a bonus tile.</p>
            ) : (
              <p>Starting with the dealer, players take tiles in <strong>counter-clockwise</strong> order (East → South → West → North). Four tiles at a time until everyone has 12, then one more each. The dealer takes 14.</p>
            )}
          </div>
          <SmallWall variant="deal" showDirection />
        </div>

        <div className="mj-draw-step">
          <div className="mj-draw-step-num">4</div>
          <div className="mj-draw-step-content">
            <div className="mj-draw-step-title">Draw on your turn</div>
            {variant === 'taiwan' ? (
              <p>Click a stack in the wall to draw the next tile. You now have 17 — discard one to return to 16. If you draw a flower or season tile, reveal it, set it aside, and draw a replacement instead. Play continues <strong>counter-clockwise</strong> (E → S → W → N).</p>
            ) : (
              <p>Click a stack in the wall to draw the next tile. You now have 14 — discard one to return to 13. Play continues <strong>counter-clockwise</strong> (E → S → W → N).</p>
            )}
            <div className="mj-draw-controls">
              <button className="mj-btn mj-btn-primary" onClick={doDraw} disabled={drawing || handFull}>
                {hand.length === 0 ? 'Start drawing' : !handFull ? `Draw tile ${hand.length + 1}` : 'Hand full'}
              </button>
              <button className="mj-btn" onClick={resetHand}>Reset</button>
            </div>
          </div>
          <div className={`mj-wall-mini variant-interactive`}>
            <div className="mj-wall-inner">
              {wallSides.map((side) => (
                <div key={side} className={`mj-wall-side mj-wall-${side}`}>
                  {Array.from({ length: 17 }).map((_, i) => {
                    const drawnCount = hand.length;
                    const isDrawn = side === 'top' && i >= 17 - Math.min(drawnCount, 17);
                    return (
                      <div
                        key={i}
                        className={`mj-wall-stack ${isDrawn ? 'is-drawn' : ''}`}
                        onClick={side === 'top' && !isDrawn ? doDraw : undefined}
                        style={{ cursor: side === 'top' && !isDrawn ? 'pointer' : 'default' }}
                      >
                        <div className="mj-wall-tile mj-wall-top-tile" />
                        <div className="mj-wall-tile mj-wall-bot-tile" />
                      </div>
                    );
                  })}
                </div>
              ))}
              <div className="mj-dir-arrow mj-dir-arrow-top"><span className="mj-dir-arrow-label">北 N</span><span className="mj-dir-arrow-glyph">←</span></div>
              <div className="mj-dir-arrow mj-dir-arrow-left"><span className="mj-dir-arrow-glyph">↓</span><span className="mj-dir-arrow-label">西 W</span></div>
              <div className="mj-dir-arrow mj-dir-arrow-bottom"><span className="mj-dir-arrow-glyph">→</span><span className="mj-dir-arrow-label">南 S</span></div>
              <div className="mj-dir-arrow mj-dir-arrow-right"><span className="mj-dir-arrow-label">東 E</span><span className="mj-dir-arrow-glyph">↑</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* Your hand */}
      <div className="mj-your-hand">
        <div className="mj-hand-label">
          Your hand · <span className="mj-hand-count">{hand.length} / {MAX_HAND}</span>
          {handFull && <span className="mj-hand-discard-hint"> — tap a tile to discard</span>}
        </div>
        <div className={`mj-hand-row ${handFull ? 'is-discard-mode' : ''}`}>
          {hand.map((t, i) => (
            <div
              key={`${t}-${i}`}
              className={`mj-hand-tile-wrap ${handFull ? 'is-discardable' : ''}`}
              style={{ animation: !sorted && i === hand.length - 1 ? 'mjDrawIn 340ms cubic-bezier(.3,.7,.3,1)' : 'none' }}
              onClick={handFull ? () => discardTile(i) : undefined}
            >
              <Tile id={t} size="md" />
            </div>
          ))}
          {hand.length === 0 && (
            <div className="mj-hand-empty">Click a stack in the wall (step 4) to draw a tile →</div>
          )}
        </div>
      </div>

      {/* Simple list — re-done as per user request */}
      <ul className="mj-draw-list">
        <li><strong>Draw order.</strong> Counter-clockwise. East (the dealer) always starts.</li>
        <li><strong>Dead wall.</strong> The last 14 tiles are reserved for kongs and replacements.</li>
        <li><strong>Kong replacement.</strong> Declare a kong → draw one extra tile from the dead wall's end.</li>
        {variant === 'taiwan' && <li><strong>Flower replacement.</strong> Draw a flower or season tile → reveal it, set it aside face-up, and draw a replacement from the dead wall. Happens during the deal and on any subsequent draw.</li>}
        <li><strong>Exhausted wall.</strong> If the live wall runs out with no winner, it's a draw (黃莊 · huáng zhuāng).</li>
      </ul>
    </section>
  );
}

// Section 3 — What steps can you take each turn?
// Simple, non-clickable, non-button action list + valid/invalid examples.

const TURN_ACTIONS = [
  {
    id: 'draw',
    name: 'Draw',
    zh: '摸牌',
    pinyin: 'mō pái',
    en: '"feel for a tile"',
    timing: 'on-turn',
    when: 'Always — starts your turn',
    desc: 'Take one tile from the wall — now 14. You must then discard one to return to 13.',
    example: ['bing-5'],
    exampleNote: 'one new tile',
  },
  {
    id: 'discard',
    name: 'Discard',
    zh: '打牌',
    pinyin: 'dǎ pái',
    en: '"strike the tile"',
    timing: 'on-turn',
    when: 'End of your turn',
    desc: 'Throw away one tile face-up. Your hand returns to 13.',
    example: ['wan-1'],
    exampleNote: 'one tile out',
  },
  {
    id: 'pung',
    name: 'Pung',
    zh: '碰',
    pinyin: 'pèng',
    en: '"bump"',
    timing: 'out-of-turn',
    when: 'From any player, any seat',
    desc: 'Claim any player\'s discard to complete a triplet. Interrupt their discard — beats chow.',
    example: ['bing-7', 'bing-7', 'bing-7'],
    exampleNote: 'three 7-dots',
  },
  {
    id: 'chow',
    name: 'Chow',
    zh: '吃',
    pinyin: 'chī',
    en: '"eat"',
    timing: 'out-of-turn',
    when: 'Only from the player on your left',
    desc: 'Claim the just-discarded tile to complete a run of three — but only from the player directly before you.',
    example: ['tiao-3', 'tiao-4', 'tiao-5'],
    exampleNote: '3–4–5 bamboo',
  },
  {
    id: 'kong',
    name: 'Kong',
    zh: '杠',
    pinyin: 'gàng',
    en: '"bar"',
    timing: 'either',
    when: 'From any discard, or concealed in your hand',
    desc: 'Four of a kind. Draw a replacement tile from the dead wall.',
    example: ['east', 'east', 'east', 'east'],
    exampleNote: 'four East winds',
  },
  {
    id: 'hu',
    name: 'Hu · Mahjong!',
    zh: '胡',
    pinyin: 'hú',
    en: '"complete"',
    timing: 'either',
    when: 'When your hand would be complete',
    desc: 'Declare win. Ends the hand. Highest priority — beats everyone.',
    example: ['red', 'red'],
    exampleNote: 'final pair lands',
  },
];

const SET_EXAMPLES = [
  {
    kind: 'Chow (chī) · 吃',
    desc: 'Three tiles in a row, same suit.',
    valid: [
      { tiles: ['wan-4', 'wan-5', 'wan-6'], note: 'Clean run in Characters' },
      { tiles: ['tiao-1', 'tiao-2', 'tiao-3'], note: 'Lowest run in Bamboo' },
      { tiles: ['bing-7', 'bing-8', 'bing-9'], note: 'Run including terminal 9' },
    ],
    invalid: [
      { tiles: ['wan-1', 'wan-2', 'tiao-3'], note: 'Mixed suits — not allowed' },
      { tiles: ['bing-2', 'bing-4', 'bing-6'], note: 'Not consecutive' },
      { tiles: ['east', 'south', 'west'], note: 'Honors can never form a chow' },
    ],
  },
  {
    kind: 'Pung (pèng) · 碰',
    desc: 'Three identical tiles.',
    valid: [
      { tiles: ['wan-5', 'wan-5', 'wan-5'], note: 'Triple 5 of Characters' },
      { tiles: ['east', 'east', 'east'], note: 'Triple East Wind' },
      { tiles: ['red', 'red', 'red'], note: 'Triple Red Dragon — scoring!' },
    ],
    invalid: [
      { tiles: ['wan-5', 'wan-5', 'wan-6'], note: 'Only two match — this is a pair + one' },
      { tiles: ['tiao-3', 'bing-3', 'wan-3'], note: 'Same number across suits doesn\'t count' },
      { tiles: ['east', 'south', 'east'], note: 'Two East ≠ three East' },
    ],
  },
  {
    kind: 'Kong (gàng) · 杠',
    desc: 'Four of the same tile. Earns a bonus draw.',
    valid: [
      { tiles: ['tiao-4', 'tiao-4', 'tiao-4', 'tiao-4'], note: 'All four 4-bamboos' },
      { tiles: ['white', 'white', 'white', 'white'], note: 'Concealed kong of White Dragon' },
    ],
    invalid: [
      { tiles: ['bing-2', 'bing-2', 'bing-2', 'bing-3'], note: 'One tile is different' },
      { tiles: ['wan-7', 'wan-7', 'wan-7'], note: 'Only three — this is a pung' },
    ],
  },
  {
    kind: 'Pair · 對 (the "eyes")',
    desc: 'Two identical tiles. Every winning hand has exactly one.',
    valid: [
      { tiles: ['green', 'green'], note: 'Pair of Green Dragons' },
      { tiles: ['bing-5', 'bing-5'], note: 'Any two of the same' },
    ],
    invalid: [
      { tiles: ['bing-5', 'bing-6'], note: 'Different tiles — not a pair' },
      { tiles: ['east', 'west'], note: 'Different winds — not a pair' },
    ],
  },
];

function SectionActions() {
  const variant = React.useContext(VariantContext);
  return (
    <section id="section-actions" className="mj-section" data-screen-label="04 Actions">
      <div className="mj-section-head">
        <div className="mj-kicker">Section 04 · Your turn</div>
        <h2 className="mj-h2">What can you do each turn?</h2>
        <p className="mj-lede">
          Your basic move is to draw one tile then discard one — you always keep exactly <strong>{variant === 'taiwan' ? '16' : '13'} tiles</strong> in hand. Between turns you can <em>interrupt</em> to claim a discard from any player (pung) or just from the player before you (chow).
        </p>
      </div>

      {/* Simple, non-button list of actions */}
      <div className="mj-action-list">
        {[...TURN_ACTIONS, ...(variant === 'taiwan' ? [{
          id: 'flower',
          name: 'Reveal Flower / Season',
          zh: '補花',
          pinyin: 'bǔ huā',
          en: '"replenish flower"',
          timing: 'on-turn',
          when: 'Immediately on drawing a bonus tile',
          desc: 'Show the flower or season tile, set it aside face-up, then draw a replacement from the dead wall. It never enters your hand.',
          example: ['mei', 'spring'],
          exampleNote: 'reveal & replace',
        }] : [])].map((a) => (
          <div key={a.id} className="mj-action-row">
            <div className="mj-action-zh-col">
              <div className="mj-action-zh">{a.zh}</div>
              <div className="mj-action-pinyin">{a.pinyin}</div>
              <div className="mj-action-lit">{a.en}</div>
            </div>
            <div className="mj-action-main">
              <div className="mj-action-name">{a.name}</div>
              <div className="mj-action-desc">{a.desc}</div>
            </div>
            <div className="mj-action-example">
              {a.example.map((t, i) => <Tile key={i} id={t} size="sm" />)}
            </div>
            <div className="mj-action-when-col">
              <span className={`mj-action-timing mj-timing-${a.timing}`}>
                {a.timing === 'on-turn' ? 'Your turn' : a.timing === 'out-of-turn' ? 'Out of turn' : 'Either'}
              </span>
              <span className="mj-action-when-txt">{a.when}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Priority explainer */}
      <div className="mj-priority">
        <div className="mj-priority-h">What if two players want the same discard?</div>
        <div className="mj-priority-ladder">
          <div className="mj-prio-row">
            <div className="mj-prio-rank">1</div>
            <div className="mj-prio-name">Hu (win)</div>
            <div className="mj-prio-desc">Always wins — if the discarded tile completes your hand, you win immediately.</div>
          </div>
          <div className="mj-prio-row">
            <div className="mj-prio-rank">2</div>
            <div className="mj-prio-name">Pung / Kong</div>
            <div className="mj-prio-desc">Anyone, any seat — beats chow.</div>
          </div>
          <div className="mj-prio-row">
            <div className="mj-prio-rank">3</div>
            <div className="mj-prio-name">Chow</div>
            <div className="mj-prio-desc">Only the next player (to the discarder's right).</div>
          </div>
        </div>
      </div>

      {/* Valid vs invalid — tabbed, single block */}
      <div className="mj-vi-head">
        <h3 className="mj-h3">Valid vs. invalid sets</h3>
        <p className="mj-vi-sub">A set is the building block of a winning hand. Here's what counts — and what doesn't.</p>
      </div>

      <ValidInvalidTabs />
    </section>
  );
}

function ValidInvalidTabs() {
  const [idx, setIdx] = React.useState(0);
  const ex = SET_EXAMPLES[idx];
  return (
    <div className="mj-vi-block">
      <div className="mj-vi-tabs">
        {SET_EXAMPLES.map((e, i) => (
          <button
            key={i}
            className={`mj-vi-tab ${idx === i ? 'is-active' : ''}`}
            onClick={() => setIdx(i)}
          >{e.kind}</button>
        ))}
      </div>
      <div className="mj-vi-desc mj-vi-block-desc">{ex.desc}</div>
      <div className="mj-vi-cols">
        <div className="mj-vi-col mj-vi-valid">
          <div className="mj-vi-col-head">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M2 7l3.5 3.5L12 4"/></svg>
            Valid
          </div>
          {ex.valid.map((v, vi) => (
            <div key={vi} className="mj-vi-example">
              <div className="mj-vi-tiles">
                {v.tiles.map((t, ti) => <Tile key={ti} id={t} size="sm" />)}
              </div>
              <div className="mj-vi-note">{v.note}</div>
            </div>
          ))}
        </div>
        <div className="mj-vi-col mj-vi-invalid">
          <div className="mj-vi-col-head">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M3 3l8 8M11 3l-8 8"/></svg>
            Not valid
          </div>
          {ex.invalid.map((v, vi) => (
            <div key={vi} className="mj-vi-example">
              <div className="mj-vi-tiles">
                {v.tiles.map((t, ti) => <Tile key={ti} id={t} size="sm" />)}
              </div>
              <div className="mj-vi-note">{v.note}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "jade",
  "showThemePicker": true
}/*EDITMODE-END*/;

const VariantContext = React.createContext('hk');

const SECTIONS = [
  { id: 'section-tiles', num: '01', label: 'What are the tiles?' },
  { id: 'section-win', num: '02', label: 'How do you win?' },
  { id: 'section-draw', num: '03', label: 'How do you draw tiles?' },
  { id: 'section-actions', num: '04', label: 'Valid moves on a turn' },
];

function App() {
  const [theme, setTheme] = React.useState(TWEAK_DEFAULTS.theme);
  const [variant, setVariant] = React.useState('hk');
  const [active, setActive] = React.useState('section-tiles');
  const [tweaksOn, setTweaksOn] = React.useState(false);

  // Apply theme
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Tweaks host protocol
  React.useEffect(() => {
    const onMsg = (e) => {
      if (e.data?.type === '__activate_edit_mode') setTweaksOn(true);
      if (e.data?.type === '__deactivate_edit_mode') setTweaksOn(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  const setTheme2 = (t) => {
    setTheme(t);
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { theme: t } }, '*');
  };

  // Scroll spy
  React.useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const en of entries) {
          if (en.isIntersecting) setActive(en.target.id);
        }
      },
      { rootMargin: '-35% 0px -55% 0px' }
    );
    for (const s of SECTIONS) {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    }
    return () => obs.disconnect();
  }, []);

  const go = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <VariantContext.Provider value={variant}>
      <aside className="mj-sidenav">
        <div className="mj-brand">
          <img src="tiles/modal-tile.svg" className="mj-brand-logo" alt="" />
          Mahjong <span className="mj-brand-zh">麻將</span>
        </div>
        <nav className="mj-nav">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={active === s.id ? 'is-active' : ''}
              onClick={(e) => { e.preventDefault(); go(s.id); }}
            >
              <span className="mj-nav-num">{s.num}</span>
              <span className="mj-nav-label">{s.label}</span>
            </a>
          ))}
        </nav>
        <div className="mj-theme-picker">
          <div className="mj-theme-label">Theme</div>
          {[
            { id: 'jade', label: 'Jade' },
            { id: 'lacquer', label: 'Lacquer' },
            { id: 'study', label: 'Study' },
          ].map((t) => (
            <button
              key={t.id}
              className={`mj-theme-btn ${theme === t.id ? 'is-active' : ''}`}
              onClick={() => setTheme2(t.id)}
            >{t.label}</button>
          ))}
        </div>
        <div className="mj-theme-picker">
          <div className="mj-theme-label">Ruleset</div>
          {[
            { id: 'hk', label: 'Hong Kong' },
            { id: 'taiwan', label: 'Taiwan' },
          ].map((v) => (
            <button
              key={v.id}
              className={`mj-theme-btn ${variant === v.id ? 'is-active' : ''}`}
              onClick={() => setVariant(v.id)}
            >{v.label}</button>
          ))}
        </div>
      </aside>

      {/* Mobile collapsible topbar */}
      <MobileTopbar active={active} go={go} />

      <div className="mj-main">
        <Hero theme={theme} setTheme2={setTheme2} setVariant={setVariant} />
        <div className="mj-theme-bar">
          <span className="mj-theme-bar-label">Ruleset</span>
          <div className="mj-theme-bar-btns">
            {[
              { id: 'hk', label: 'Hong Kong' },
              { id: 'taiwan', label: 'Taiwan' },
            ].map((v) => (
              <button
                key={v.id}
                className={`mj-theme-bar-btn ${variant === v.id ? 'is-active' : ''}`}
                onClick={() => setVariant(v.id)}
              >{v.label}</button>
            ))}
          </div>
        </div>
        <div className="mj-theme-bar">
          <span className="mj-theme-bar-label">Color theme</span>
          <div className="mj-theme-bar-btns">
            {[
              { id: 'jade', label: 'Jade' },
              { id: 'lacquer', label: 'Lacquer' },
              { id: 'study', label: 'Study' },
            ].map((t) => (
              <button
                key={t.id}
                className={`mj-theme-bar-btn ${theme === t.id ? 'is-active' : ''}`}
                onClick={() => setTheme2(t.id)}
              >{t.label}</button>
            ))}
          </div>
        </div>
        <SectionTiles />
        <SectionWin />
        <SectionDraw />
        <SectionActions />
      </div>

      <footer className="mj-foot">
        <div className="mj-foot-brand">Mahjong <em>麻將</em></div>
        <div className="mj-foot-note">
          A visual guide for total beginners.
          <div className="mj-foot-credit">
            Mahjong tile SVGs adapted from <a href="https://commons.wikimedia.org/wiki/Category:SVG_Planar_illustrations_of_Mahjong_tiles" target="_blank" rel="noopener noreferrer">Shizhao</a> (derivative work by shizhao), Public domain, via Wikimedia Commons — with minor design edits.
          </div>
        </div>
        <a className="mj-foot-cta" href={BLOG_URL} target="_blank" rel="noopener noreferrer">
          <span className="mj-foot-cta-tile">
            <img src="tiles/modal-tile.svg" alt="" />
          </span>
          <span className="mj-foot-cta-text">
            <span className="mj-foot-cta-kicker">You're invited</span>
            <span className="mj-foot-cta-title">RSVP for Modal Mahjong Night</span>
          </span>
          <span className="mj-foot-cta-arrow">→</span>
        </a>
      </footer>

      <ToastInvite />

      {tweaksOn && (
        <div style={{
          position: 'fixed', bottom: 20, right: 20, zIndex: 100,
          background: 'var(--paper)', border: '1px solid var(--rule)',
          padding: 16, borderRadius: 10, boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
          fontFamily: 'var(--sans)', minWidth: 200,
        }}>
          <div style={{ fontSize: 11, letterSpacing: 1.2, textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: 10, fontWeight: 600 }}>Tweaks</div>
          <div style={{ fontSize: 13, marginBottom: 8, color: 'var(--ink-soft)' }}>Color theme</div>
          <div style={{ display: 'flex', gap: 4 }}>
            {['jade', 'lacquer', 'study'].map((t) => (
              <button
                key={t}
                onClick={() => setTheme2(t)}
                style={{
                  flex: 1, padding: '8px 10px', fontSize: 12, cursor: 'pointer',
                  border: '1px solid ' + (theme === t ? 'var(--jade)' : 'var(--rule)'),
                  background: theme === t ? 'var(--jade-wash)' : 'var(--paper)',
                  color: 'var(--ink)', borderRadius: 5, fontFamily: 'inherit', textTransform: 'capitalize',
                }}
              >{t}</button>
            ))}
          </div>
        </div>
      )}
    </VariantContext.Provider>
  );
}

function MobileTopbar({ active, go }) {
  const [open, setOpen] = React.useState(false);
  const activeSection = SECTIONS.find((s) => s.id === active) || SECTIONS[0];

  // Close on escape
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={`mj-topbar-mobile ${open ? 'is-open' : ''}`}>
      <div className="mj-topbar-mobile-row">
        <div className="mj-brand"><img src="tiles/modal-tile.svg" className="mj-brand-logo" alt="" />Mahjong <span className="mj-brand-zh">麻將</span></div>
        <button
          className="mj-menu-btn"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="mj-menu-btn-label">
            <span className="mj-menu-btn-num">{activeSection.num}</span>
            {activeSection.label}
          </span>
          <span className={`mj-menu-btn-icon ${open ? 'is-open' : ''}`}>
            <span></span><span></span><span></span>
          </span>
        </button>
      </div>
      {open && (
        <nav className="mj-nav-mobile-vert">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={active === s.id ? 'is-active' : ''}
              onClick={(e) => { e.preventDefault(); go(s.id); setOpen(false); }}
            >
              <span className="mj-nav-num">{s.num}</span>
              {s.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

const ASCII_ART = `      %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%      
   %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%   
  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%  
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%##******###%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%##******##**#******##%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%####**#*#****#****#*#*********##%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%####****************************###*****####%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%#####*#******#***##***###***##*##***#****#*#######*####%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%##*#**#####**##**####**#*#*##***#*#*###**#*###########*##########%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%######*##**#*###***##**###*#*###**#*#*#****#**#*#**######################*##%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%*#*****#**##*###********#****#******#***#*##**##*#*###*##################*##%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%#**###*****#**#*##*********#**#***##*******##**#**####*######*###%%%%#####*#%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%***##########****#*************************#*****#**###*####%%%%%%%%%###*###%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%##***###%#%%####**********#********************##**###%%%%%%%%%%%%%%##**##%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%*######*###%%%%%%%###***************************#%%%%%%%%%%%%%%%%%######%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%###*##*#****###%%%%%%%%%####*#****************##%%%%%%%%%%%%%%#######%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%########*#*****#####%%%%%%%%%###************#*##%%%%%%%%%%#######%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%####%#%#######****################*************##############%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%####%%%%%%%%%%#######*##*#**************#**#**##*****##%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%#*###%%%%%%%%%%%%%%%%%%%%#######*#####*#########%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#***######%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%##%%%%%%%%%%%%%%%%%%%%%%%%%%*#*#####%%%%%%%%%%%%%%%%%%%#%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%###*******###%%%%%%%%%%%%%%%%%%%%%####%%#%%%%%%%%%%%%%%%#####*##*##%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%###*#***************###%%%%%%%%%%%%%%%#####%%%%%%%%%%###**#****##*##*######%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%##*##********************#%#%%%%%%%%%%####%%%%%%###*#****#*#*#####**#####%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%##*#####**#*********#######**###%%%%%%###########*#****###*#*#####*#*######%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%*####*#*#**#**#*#*#####****######*#######*###########****#*#*#***#*#######**%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%#*****##*****#******#**##*#################*#######***#******#*#*###########%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%#***#*#**#*#*****#*#**#****##**##*#*###*#*##**#****#**#***#**#####**#***###*%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%******#*****#*#********##*#********##*#*#****###*****#***#*#*####***#****#*#%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%#*##**#**#**#*****#*##***#***#***#*******##*##**#######*###***#####**#######%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%#*#**#****#**##**#*##*#***#*****#*******#****###*#***####*##*#*#***##**#####%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%*#*#**###*#########**##*###*##***#*******#****#*##*#####*#*##***#########*#*%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%##*#*##*#***#*###*##***####***##*#*#*###**##*#**#**#****##**##***#*########%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%####*#*#*##*##*#*****##*##*#*##**#*###*#**####*##*###**#***######%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%#######*#**##*#***##**#*###****####*###*######*###**######%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%####*###*###**#########*###*######*#**###*######**###*#####*######%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%#############*#########*###########*#**#*#**####*####**###*################%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%**#########*###########*###*###################*#**##*################%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%***######%%%#######*#####**#####*########**#*##**#*##*###########%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%******#####%%%%%%%######**#*##*#****#**#*#*#*#**############%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%#****###*#####%%%%%%%%%#####****#*#*****#*#############%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%*#*##***#########%%%%%%%%%%%%##***###*****#*##*###%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%###################%%%%%%%%%%%%%%#############%%%%%%%%#############%#%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%########*#####*########%%%%%%%%%%%%%%%####%%%%%%%#%#####*#*#############%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%###########################%%%%%%%%%%%#%%%%%%######*####**##**##*#######%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%#############################%%%%%%%%%%%%%#%######****##*#*#*###########%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%##########################*##%#%#%%%%######*##*##*##***###*#######%##%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%##############################%#######*#**#*****#*##*#*#*#*###%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%#######*#########***#*######**#************#*#*######%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#######*********#**###********#*##***###%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%###************#**#****#****###%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%##***************###%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%###****###%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
 %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 
  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%  
   %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%   
      %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%      `;

function AsciiArt() {
  const ref = React.useRef(null);

  const rows = React.useMemo(() => ASCII_ART.split('\n'), []);

  // Auto-size font so the 107-col art fits the container width
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fit = () => {
      const container = el.parentElement;
      if (!container) return;
      const avail = container.clientWidth;
      if (!avail) return;
      const PREF = 11;
      el.style.setProperty('--ascii-fs', PREF + 'px');
      const rowWidth = el.scrollWidth;
      if (rowWidth > avail) {
        const finalPx = Math.max(5, Math.floor((avail / rowWidth) * PREF * 10) / 10);
        el.style.setProperty('--ascii-fs', finalPx + 'px');
      }
    };

    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el.parentElement || el);
    window.addEventListener('resize', fit);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', fit);
    };
  }, []);

  return (
    <pre ref={ref} className="mj-ascii-art" aria-hidden="true">
      {rows.map((row, y) => (
        <div key={y} className="mj-ascii-row">
          {Array.from(row).map((ch, x) => {
            const isHidden = ch === ' ' || ch === '%';
            if (isHidden) {
              return <span key={x} className="mj-ascii-ch is-space">{'\u00A0'}</span>;
            }
            return <span key={x} className="mj-ascii-ch is-dot">{ch}</span>;
          })}
        </div>
      ))}
    </pre>
  );
}

function ToastInvite() {
  const [visible, setVisible] = React.useState(() => {
    try { return !localStorage.getItem('mj-invite-dismissed'); } catch { return true; }
  });
  if (!visible) return null;
  const dismiss = (e) => {
    e.preventDefault(); e.stopPropagation();
    try { localStorage.setItem('mj-invite-dismissed', '1'); } catch {}
    setVisible(false);
  };
  return (
    <div className="mj-toast-invite">
      <a
        className="mj-toast-invite-link"
        href={BLOG_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="mj-foot-cta-tile">
          <img src="tiles/modal-tile.svg" alt="" />
        </span>
        <span className="mj-foot-cta-text">
          <span className="mj-foot-cta-kicker">You're invited</span>
          <span className="mj-foot-cta-title">RSVP for Modal Mahjong Night</span>
        </span>
        <span className="mj-foot-cta-arrow">→</span>
      </a>
      <button className="mj-toast-invite-close" onClick={dismiss} aria-label="Dismiss">×</button>
    </div>
  );
}

function Hero({ theme, setTheme2, setVariant }) {
  const variant = React.useContext(VariantContext);
  const [rulesetOpen, setRulesetOpen] = React.useState(false);
  const [themeOpen, setThemeOpen] = React.useState(false);
  const rulesetRef = React.useRef(null);
  const themeRef = React.useRef(null);

  React.useEffect(() => {
    const handler = (e) => {
      if (rulesetRef.current && !rulesetRef.current.contains(e.target)) setRulesetOpen(false);
      if (themeRef.current && !themeRef.current.contains(e.target)) setThemeOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const RULESETS = [
    { id: 'hk', label: 'Hong Kong rules · 香港麻將' },
    { id: 'taiwan', label: 'Taiwan rules · 台灣麻將' },
  ];
  const THEMES = [
    { id: 'jade', label: 'Jade', swatch: '#006C00' },
    { id: 'lacquer', label: 'Lacquer', swatch: '#0c1a0e' },
    { id: 'study', label: 'Study', swatch: '#d89b2a' },
  ];

  const currentRuleset = RULESETS.find(r => r.id === variant);

  return (
    <section className="mj-hero mj-hero-ascii">
      <div className="mj-hero-text">
        <div className="mj-hero-kicker">
          {/* Desktop: static label */}
          <span className="mj-kicker-static">
            {currentRuleset.label}
          </span>
          {/* Mobile: interactive row */}
          <div className="mj-kicker-interactive">
            <div className="mj-kicker-ruleset-wrap" ref={rulesetRef}>
              <button
                className="mj-kicker-ruleset-btn"
                onClick={() => { setRulesetOpen(!rulesetOpen); setThemeOpen(false); }}
              >
                {currentRuleset.label}
                <svg className="mj-kicker-chevron" width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {rulesetOpen && (
                <div className="mj-kicker-dropdown">
                  {RULESETS.map(r => (
                    <button
                      key={r.id}
                      className={`mj-kicker-drop-item ${variant === r.id ? 'is-active' : ''}`}
                      onClick={() => { setVariant(r.id); setRulesetOpen(false); }}
                    >{r.label}</button>
                  ))}
                </div>
              )}
            </div>
            <div className="mj-kicker-theme-wrap" ref={themeRef}>
              <button
                className="mj-kicker-theme-btn"
                onClick={() => { setThemeOpen(!themeOpen); setRulesetOpen(false); }}
                aria-label="Color theme"
              >
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <circle cx="7.5" cy="7.5" r="2.5" fill="currentColor" stroke="none"/>
                  <line x1="7.5" y1="0.5" x2="7.5" y2="2.5"/>
                  <line x1="7.5" y1="12.5" x2="7.5" y2="14.5"/>
                  <line x1="0.5" y1="7.5" x2="2.5" y2="7.5"/>
                  <line x1="12.5" y1="7.5" x2="14.5" y2="7.5"/>
                  <line x1="2.7" y1="2.7" x2="4.1" y2="4.1"/>
                  <line x1="10.9" y1="10.9" x2="12.3" y2="12.3"/>
                  <line x1="12.3" y1="2.7" x2="10.9" y2="4.1"/>
                  <line x1="4.1" y1="10.9" x2="2.7" y2="12.3"/>
                </svg>
              </button>
              {themeOpen && (
                <div className="mj-kicker-dropdown mj-kicker-dropdown-right">
                  {THEMES.map(t => (
                    <button
                      key={t.id}
                      className={`mj-kicker-drop-item ${theme === t.id ? 'is-active' : ''}`}
                      onClick={() => { setTheme2(t.id); setThemeOpen(false); }}
                    >
                      <span className="mj-kicker-swatch" style={{background: t.swatch}} />
                      {t.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <h1>
          Learn <em>mahjong</em><br/>
          A visual <em>guide</em><span className="mj-zh">麻將</span>
        </h1>
        <div className="mj-hero-meta">
          {variant === 'taiwan' ? (
            <>
              <div><strong>144</strong>tiles in a set</div>
              <div><strong>16</strong>tiles dealt, 17 to win</div>
              <div><strong>5</strong>sets + 1 pair</div>
            </>
          ) : (
            <>
              <div><strong>136</strong>tiles in a set</div>
              <div><strong>13</strong>tiles dealt, 14 to win</div>
              <div><strong>4</strong>sets + 1 pair</div>
            </>
          )}
        </div>
      </div>

      <div className="mj-hero-ascii-bg" aria-hidden="true">
        <AsciiArt />
      </div>

      <div className="mj-hero-signature">
        inspired by emily <span className="mj-hero-signature-heart">💚</span>
      </div>
    </section>
  );
}

export default App;
