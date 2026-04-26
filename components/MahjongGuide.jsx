'use client'

import React from 'react'

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
  flower: { label: 'Flowers', labelZh: '花牌', sub: '花 · Huā', desc: 'Four flower tiles. Each player\'s seat number has a matching flower — drawing your own flower is worth 1 臺 bonus.', descZh: '梅、兰、菊、竹四张花牌。台湾规则中，花牌亮出后补牌，若花号与座位对应可计 1 台。' },
  season: { label: 'Seasons', labelZh: '季牌', sub: '季 · Jì', desc: 'Four season tiles. Same matching rule as flowers — your seat number matches one season for a 1 臺 bonus.', descZh: '春、夏、秋、冬四张季牌。规则与花牌相同：亮出、补牌，座位对应时计分。' },
};

const BLOG_URL = 'https://haerin.haikari.top/about';

const RULESETS = [
  { id: 'hk', shortLabel: 'Hong Kong', shortLabelZh: '香港', label: 'Hong Kong rules · 香港麻將', labelZh: '香港麻将规则 · 香港麻將' },
  { id: 'taiwan', shortLabel: 'Taiwan', shortLabelZh: '台湾', label: 'Taiwan rules · 台灣麻將', labelZh: '台湾麻将规则 · 台灣麻將' },
  { id: 'sichuan', shortLabel: 'Sichuan', shortLabelZh: '四川', label: 'Sichuan rules · 四川麻将', labelZh: '四川麻将规则 · 四川麻将' },
];

const THEMES = [
  { id: 'jade', label: 'Jade', labelZh: '青玉', swatch: '#006C00' },
  { id: 'lacquer', label: 'Lacquer', labelZh: '漆色', swatch: '#0c1a0e' },
  { id: 'study', label: 'Study', labelZh: '书房', swatch: '#d89b2a' },
];

const LANG_OPTIONS = [
  { id: 'en', label: 'English', shortLabel: 'EN' },
  { id: 'zh', label: '中文', shortLabel: '中' },
];

const SUITED_GROUPS = ['wan', 'tiao', 'bing'];

const SUIT_META = {
  wan: { label: 'Characters', labelZh: '万子', sub: '萬 · Wàn', desc: 'Numbered 1–9. The character 萬 means "ten thousand."', descZh: '数字一到九。牌面下方的「万」表示万子，是三门花色之一。' },
  tiao: { label: 'Bamboo', labelZh: '条子', sub: '條 · Tiáo', desc: 'Numbered 1–9. Sticks of bamboo. The 1-bamboo is traditionally drawn as a bird.', descZh: '数字一到九。条子也叫索子，一条常画成鸟形，是传统牌面样式。' },
  bing: { label: 'Dots', labelZh: '筒子', sub: '餅 · Bǐng', desc: 'Numbered 1–9. Circles represent coins, one of the three original suits.', descZh: '数字一到九。筒子也叫饼子，圆点来自铜钱图案。' },
  wind: { label: 'Winds', labelZh: '风牌', sub: '風 · Fēng', desc: 'Four winds — East, South, West, North. Honor tiles.', descZh: '东、南、西、北四张风牌，属于字牌，不能组成顺子。' },
  dragon: { label: 'Dragons', labelZh: '箭牌', sub: '箭 · Jiàn', desc: 'Three dragons — Red (中), Green (發), White (板). Honor tiles.', descZh: '中、发、白三张箭牌，属于字牌，刻子通常有额外番种。' },
};

function textByLang(lang, en, zh) {
  return lang === 'zh' ? zh : en;
}

function rulesetLabel(ruleset, lang, compact = false) {
  if (!ruleset) return '';
  if (compact) return lang === 'zh' ? ruleset.shortLabelZh : ruleset.shortLabel;
  return lang === 'zh' ? ruleset.labelZh : ruleset.label;
}

function themeLabel(theme, lang) {
  return lang === 'zh' ? theme.labelZh : theme.label;
}

function tileDisplayName(tile, lang) {
  if (!tile) return '';
  return lang === 'zh' ? tile.zh : tile.en;
}

function tileSuitInfo(suit, num, lang) {
  if (lang !== 'zh') {
    if (suit === 'wan') return 'Suit · Characters (萬). Read the top symbol as the number, bottom as the suit.';
    if (suit === 'tiao') return 'Suit · Bamboo (條). The 1-bamboo shows a bird — a classical flourish.';
    if (suit === 'bing') return 'Suit · Dots (餅). Each circle is a stack of coins.';
    if (suit === 'wind') return 'Honor tile · one of four winds. Your seat wind and the round wind both matter for scoring.';
    if (suit === 'dragon') return 'Honor tile · one of three dragons. A pung of dragons is always worth points.';
    if (suit === 'flower') return `Bonus tile · Taiwan only. Reveal immediately when drawn, then draw a replacement. Tile #${num} matches seat ${num} — worth 1 臺 if the number matches your seat.`;
    if (suit === 'season') return `Bonus tile · Taiwan only. Reveal immediately when drawn, then draw a replacement. Tile #${num} matches seat ${num} — worth 1 臺 if the number matches your seat.`;
    return '';
  }
  if (suit === 'wan') return '花色牌 · 万子。上方是数字，下方的「万」表示花色。';
  if (suit === 'tiao') return '花色牌 · 条子。一条常画成鸟形，是传统牌面样式。';
  if (suit === 'bing') return '花色牌 · 筒子。圆点源自钱币图案。';
  if (suit === 'wind') return '字牌 · 四风之一。门风、圈风会影响计分。';
  if (suit === 'dragon') return '字牌 · 中、发、白之一。箭牌刻子通常有额外番种。';
  if (suit === 'flower') return `花牌 · 台湾规则使用。摸到后亮出并从岭上补牌；第 ${num} 张花与第 ${num} 门座位对应时计 1 台。`;
  if (suit === 'season') return `季牌 · 台湾规则使用。摸到后亮出并从岭上补牌；第 ${num} 张季与第 ${num} 门座位对应时计 1 台。`;
  return '';
}

function tileShort(id, lang) {
  const tile = Object.values(TILES).flat().find((t) => t.id === id)
    || Object.values(FLOWER_TILES).flat().find((t) => t.id === id);
  if (!tile) return id;
  return lang === 'zh' ? tile.zh : tile.en.replace('One of ', '1 ').replace('Two of ', '2 ').replace('Three of ', '3 ').replace('Four of ', '4 ').replace('Five of ', '5 ').replace('Six of ', '6 ').replace('Seven of ', '7 ').replace('Eight of ', '8 ').replace('Nine of ', '9 ');
}

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
  const lang = React.useContext(LanguageContext);
  const [hovered, setHovered] = React.useState(null);
  const [selected, setSelected] = React.useState(null);
  const [suit, setSuit] = React.useState('all');
  const [isTouch, setIsTouch] = React.useState(false);

  React.useEffect(() => {
    setIsTouch(window.matchMedia('(hover: none) and (pointer: coarse)').matches);
  }, []);

  React.useEffect(() => {
    setSuit('all');
    setSelected(null);
  }, [variant]);

  const tileGroups = variant === 'sichuan' ? SUITED_GROUPS : Object.keys(TILES);
  const allTiles = [];
  const groups = suit === 'all' ? tileGroups : [suit];
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

  const suits = variant === 'sichuan'
    ? [
      { id: 'all', label: textByLang(lang, 'All 27', '全部 27'), count: 27 },
      { id: 'wan', label: textByLang(lang, 'Characters', '万子'), count: 9 },
      { id: 'tiao', label: textByLang(lang, 'Bamboo', '条子'), count: 9 },
      { id: 'bing', label: textByLang(lang, 'Dots', '筒子'), count: 9 },
    ]
    : [
      { id: 'all', label: textByLang(lang, 'All 34', '全部 34'), count: 34 },
      { id: 'wan', label: textByLang(lang, 'Characters', '万子'), count: 9 },
      { id: 'tiao', label: textByLang(lang, 'Bamboo', '条子'), count: 9 },
      { id: 'bing', label: textByLang(lang, 'Dots', '筒子'), count: 9 },
      { id: 'wind', label: textByLang(lang, 'Winds', '风牌'), count: 4 },
      { id: 'dragon', label: textByLang(lang, 'Dragons', '箭牌'), count: 3 },
      ...(variant === 'taiwan' ? [{ id: 'flower', label: textByLang(lang, 'Bonus', '花季牌'), count: 8 }] : []),
    ];

  return (
    <section id="section-tiles" className="mj-section" data-screen-label="01 Tiles">
      <div className="mj-section-head">
        <div className="mj-kicker">{textByLang(lang, 'Section 01 · The deck', '第 01 节 · 牌组')}</div>
        <h2 className="mj-h2">{textByLang(lang, 'What are the tiles?', '麻将有哪些牌？')}</h2>
        <p className="mj-lede">
          {lang === 'zh' ? (
            variant === 'taiwan' ? (
              <>台湾麻将一副牌有 <strong>144 张</strong>：34 种基础牌各 4 张，再加 <strong>8 张花季牌</strong>，也就是四张花牌和四张季牌。花季牌不组成手牌，摸到后亮出并补牌，另行计分。</>
            ) : variant === 'sichuan' ? (
              <>四川麻将使用更精简的 <strong>108 张</strong>：只保留万、条、筒三门序数牌，每种 4 张。风牌、箭牌、花牌、季牌全部不用，所以这里看到的每张牌都可能进入手牌。</>
            ) : (
              <>一副麻将有 <strong>136 张</strong>：34 种牌各 4 张。三门花色牌从一到九，分别是万子、条子、筒子；另有四风和三元等字牌。</>
            )
          ) : (
            variant === 'taiwan' ? (
              <>A mahjong set in Taiwan rules has <strong>144 tiles</strong>: the same 34 unique designs × 4, plus <strong>8 bonus tiles</strong> — four Flowers and four Seasons. These are never part of a winning hand; they score separately.</>
            ) : variant === 'sichuan' ? (
              <>Sichuan mahjong uses a lean <strong>108-tile</strong> set: only the three numbered suits, 1–9, four of each. Winds, dragons, flowers, and seasons are removed, so every tile you see here can enter the hand.</>
            ) : (
              <>A mahjong set has <strong>136 tiles</strong>: 34 unique designs, four of each. Three suits run 1–9 (Characters, Bamboo, Dots), plus the honor tiles — four Winds and three Dragons.</>
            )
          )}
          {' '}{textByLang(lang, 'Hover or tap any tile to learn its name.', '把鼠标移到牌上，或轻点牌面，可以查看名称和说明。')}
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
                    <div className="mj-suit-title">{textByLang(lang, FLOWER_META[group].label, FLOWER_META[group].labelZh)}</div>
                    <div className="mj-suit-sub">{FLOWER_META[group].sub}</div>
                    <div className="mj-suit-desc">{textByLang(lang, FLOWER_META[group].desc, FLOWER_META[group].descZh)}</div>
                    <div className="mj-suit-count">{textByLang(lang, '4 tiles · each 1 of a kind', '4 张 · 每张各 1 枚')}</div>
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
                    <div className="mj-suit-title">{textByLang(lang, SUIT_META[g].label, SUIT_META[g].labelZh)}</div>
                    <div className="mj-suit-sub">{SUIT_META[g].sub}</div>
                    <div className="mj-suit-desc">{textByLang(lang, SUIT_META[g].desc, SUIT_META[g].descZh)}</div>
                    <div className="mj-suit-count">{TILES[g].length} × 4 = {TILES[g].length * 4} {textByLang(lang, 'tiles', '张')}</div>
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
                <div className="mj-info-en">{tileDisplayName(info, lang)}</div>
                <div className="mj-info-meta">
                  {tileSuitInfo(info.suit, info.num, lang)}
                </div>
              </>
            ) : (
              <div className="mj-info-empty">
                <div className="mj-info-empty-h">{textByLang(lang, 'Hover or tap a tile', '悬停或轻点一张牌')}</div>
                <div className="mj-info-empty-p">
                  {lang === 'zh'
                    ? variant === 'sichuan'
                      ? '每种牌各有四张。四川麻将只用三门花色牌，因此从开局起就要围绕定缺和缺一门来整理手牌。'
                      : '每种牌在牌墙里都有四张。花色牌可以组成顺子，字牌不能组成顺子。'
                    : variant === 'sichuan'
                      ? 'Each tile appears four times. Sichuan keeps only the three numbered suits, which makes suit management and the missing-suit rule matter immediately.'
                      : "Each appears four times in the wall. The numbered suits behave like three independent decks; the honors can't form runs."}
                </div>
              </div>
            )}
          </aside>
        </div>

        <div
          className={`mj-tile-popup ${selected ? 'is-active' : ''}`}
          onClick={() => setSelected(null)}
        >
          <div className="mj-tile-popup-sheet" onClick={e => e.stopPropagation()}>
            <button className="mj-tile-popup-close" onClick={() => setSelected(null)} aria-label={textByLang(lang, 'Close', '关闭')}>✕</button>
            {info && (
              <>
                <div className="mj-info-big"><Tile id={info.id} size="xl" /></div>
                <div className="mj-info-zh">{info.zh}</div>
                <div className="mj-info-en">{tileDisplayName(info, lang)}</div>
                <div className="mj-info-meta">
                  {tileSuitInfo(info.suit, info.num, lang)}
                </div>
              </>
            )}
          </div>
        </div>

        {variant === 'taiwan' && suit !== 'flower' && (
          <div className="mj-flower-section">
            <div className="mj-kicker" style={{marginBottom: 28}}>{textByLang(lang, 'Bonus tiles · Taiwan only', '花季牌 · 台湾规则')}</div>
            <div className="mj-tile-grid">
            {Object.keys(FLOWER_TILES).map((group) => (
              <div key={group} className="mj-suit-row">
                <div className="mj-suit-label">
                  <div className="mj-suit-title">{textByLang(lang, FLOWER_META[group].label, FLOWER_META[group].labelZh)}</div>
                  <div className="mj-suit-sub">{FLOWER_META[group].sub}</div>
                  <div className="mj-suit-desc">{textByLang(lang, FLOWER_META[group].desc, FLOWER_META[group].descZh)}</div>
                  <div className="mj-suit-count">{textByLang(lang, '4 tiles · each 1 of a kind', '4 张 · 每张各 1 枚')}</div>
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

const WINNING_HANDS_SICHUAN = [
  {
    id: 'basic',
    name: 'Standard missing-suit hand',
    zh: '缺一門',
    melds: [
      { type: 'chow', tiles: ['wan-2', 'wan-3', 'wan-4'], label: 'Run · 2-3-4 Characters' },
      { type: 'chow', tiles: ['wan-6', 'wan-7', 'wan-8'], label: 'Run · 6-7-8 Characters' },
      { type: 'pung', tiles: ['bing-3', 'bing-3', 'bing-3'], label: 'Pung · 3 Dots' },
      { type: 'chow', tiles: ['bing-7', 'bing-8', 'bing-9'], label: 'Run · 7-8-9 Dots' },
      { type: 'pair', tiles: ['wan-5', 'wan-5'], label: 'Pair · 5 Characters' },
    ],
    points: 'base',
    desc: 'Four sets + one pair, with one suit missing. This example has no Bamboo tiles, so it satisfies 缺一門 after choosing Bamboo as the missing suit.',
  },
  {
    id: 'allpungs',
    name: 'All Pungs',
    zh: '碰碰胡',
    melds: [
      { type: 'pung', tiles: ['wan-3', 'wan-3', 'wan-3'], label: 'Pung · 3 Characters' },
      { type: 'pung', tiles: ['wan-9', 'wan-9', 'wan-9'], label: 'Pung · 9 Characters' },
      { type: 'pung', tiles: ['bing-2', 'bing-2', 'bing-2'], label: 'Pung · 2 Dots' },
      { type: 'pung', tiles: ['bing-7', 'bing-7', 'bing-7'], label: 'Pung · 7 Dots' },
      { type: 'pair', tiles: ['wan-5', 'wan-5'], label: 'Pair · 5 Characters' },
    ],
    points: '2+ fan',
    desc: 'Every set is a triplet. Sichuan has no honor tiles, so this hand is built entirely from suited pungs.',
  },
  {
    id: 'sevenpairs',
    name: 'Seven Pairs',
    zh: '七對',
    melds: [
      { type: 'pair', tiles: ['wan-1', 'wan-1'], label: 'Pair · 1 Characters' },
      { type: 'pair', tiles: ['wan-4', 'wan-4'], label: 'Pair · 4 Characters' },
      { type: 'pair', tiles: ['wan-8', 'wan-8'], label: 'Pair · 8 Characters' },
      { type: 'pair', tiles: ['bing-2', 'bing-2'], label: 'Pair · 2 Dots' },
      { type: 'pair', tiles: ['bing-5', 'bing-5'], label: 'Pair · 5 Dots' },
      { type: 'pair', tiles: ['bing-7', 'bing-7'], label: 'Pair · 7 Dots' },
      { type: 'pair', tiles: ['bing-9', 'bing-9'], label: 'Pair · 9 Dots' },
    ],
    points: '4+ fan',
    desc: 'Seven pairs is a special 14-tile hand. It still must satisfy 缺一門; this example is missing Bamboo.',
  },
  {
    id: 'purity',
    name: 'Pure One Suit',
    zh: '清一色',
    melds: [
      { type: 'chow', tiles: ['tiao-1', 'tiao-2', 'tiao-3'], label: 'Run · 1-2-3 Bamboo' },
      { type: 'chow', tiles: ['tiao-3', 'tiao-4', 'tiao-5'], label: 'Run · 3-4-5 Bamboo' },
      { type: 'pung', tiles: ['tiao-6', 'tiao-6', 'tiao-6'], label: 'Pung · 6 Bamboo' },
      { type: 'chow', tiles: ['tiao-7', 'tiao-8', 'tiao-9'], label: 'Run · 7-8-9 Bamboo' },
      { type: 'pair', tiles: ['tiao-5', 'tiao-5'], label: 'Pair · 5 Bamboo' },
    ],
    points: '4+ fan',
    desc: 'Every tile comes from one suit. Since the other two suits are absent, it automatically satisfies the missing-suit requirement.',
  },
  {
    id: 'longpairs',
    name: 'Dragon Seven Pairs',
    zh: '龍七對',
    melds: [
      { type: 'pair', tiles: ['wan-2', 'wan-2'], label: 'Pair · 2 Characters' },
      { type: 'pair', tiles: ['wan-2', 'wan-2'], label: 'Extra pair · same tile' },
      { type: 'pair', tiles: ['wan-5', 'wan-5'], label: 'Pair · 5 Characters' },
      { type: 'pair', tiles: ['wan-8', 'wan-8'], label: 'Pair · 8 Characters' },
      { type: 'pair', tiles: ['bing-1', 'bing-1'], label: 'Pair · 1 Dots' },
      { type: 'pair', tiles: ['bing-4', 'bing-4'], label: 'Pair · 4 Dots' },
      { type: 'pair', tiles: ['bing-9', 'bing-9'], label: 'Pair · 9 Dots' },
    ],
    points: 'higher',
    desc: 'A Sichuan-style seven-pairs upgrade: one pair is actually all four copies of the same tile. Local tables score the exact fan differently.',
  },
];

const HAND_TEXT_ZH = {
  hk: {
    basic: { name: '标准和牌', points: '1 番', desc: '四组面子加一对将，组合可以是顺子、刻子或杠。对子也叫「将」或「眼」。' },
    pingwu: { name: '平和', points: '1 番', desc: '四组面子全部是顺子，且将牌不是字牌。是最常见的低番牌型之一。' },
    allpungs: { name: '对对胡', points: '3 番', desc: '四组面子全部是刻子，没有顺子。多数规则里都属于稳定的加番牌型。' },
    sevenpairs: { name: '七对子', points: '3 番', desc: '十四张牌正好组成七个对子，不需要面子。每个对子必须独立，不能把一组四张当成两个对子。' },
    halfflush: { name: '混一色', points: '3 番', desc: '只使用一种花色牌，再混入风牌或箭牌。所有序数牌必须来自同一门花色。' },
    purity: { name: '清一色', points: '6 番', desc: '整副手牌全部来自同一门花色，不含风牌和箭牌，难度高、分值也高。' },
    thirteen: { name: '十三幺', points: '满贯', desc: '一、九端张加全部字牌各一张，再任意重复其中一张。属于特殊牌型。' },
  },
  taiwan: {
    basic: { name: '标准和牌', points: '1 台', desc: '五组面子加一对将，共 17 张。台湾麻将比港式多一组面子，通常至少要 1 台才能胡牌。' },
    allpungs: { name: '对对胡', points: '3 台', desc: '五组面子全部是刻子，没有顺子。台湾规则中常计 3 台。' },
    halfflush: { name: '混一色', points: '3 台', desc: '一种花色牌搭配风牌或箭牌。花色越集中，牌型价值越高。' },
    sevenpairs: { name: '七对子', points: '3 台', desc: '七对子是 14 张的特殊牌型，不按台湾标准 17 张结构计算。每个对子必须独立。' },
    purity: { name: '清一色', points: '8 台', desc: '五组面子和一对将都来自同一门花色，不含风牌、箭牌。是台湾规则中常见的大牌。' },
    thirteen: { name: '十三幺', points: '满贯', desc: '全部幺九牌和字牌各一张，再重复其中任意一张。特殊牌型，通常按高分处理。' },
  },
  sichuan: {
    basic: { name: '缺一门标准牌', points: '基础', desc: '四组面子加一对将，并且缺一门。本例没有条子，因此若定缺为条，就满足缺一门要求。' },
    allpungs: { name: '碰碰胡', points: '2+ 番', desc: '四组面子全部是刻子。四川麻将不用字牌，所以碰碰胡完全由花色牌组成。' },
    sevenpairs: { name: '七对', points: '4+ 番', desc: '七对是 14 张特殊牌型，仍然要满足缺一门。本例没有条子。' },
    purity: { name: '清一色', points: '4+ 番', desc: '整副手牌都来自同一门花色，自然缺另外两门，通常是四川麻将里的高价值牌型。' },
    longpairs: { name: '龙七对', points: '更高', desc: '七对的升级型：其中一对实际拿齐了同一张牌的四张。不同地方对具体番数会有差异。' },
  },
};

function variantKey(variant) {
  return variant === 'taiwan' ? 'taiwan' : variant === 'sichuan' ? 'sichuan' : 'hk';
}

function handText(hand, variant, lang) {
  if (lang !== 'zh') return { name: hand.name, desc: hand.desc, points: hand.points };
  return HAND_TEXT_ZH[variantKey(variant)]?.[hand.id] || { name: hand.name, desc: hand.desc, points: hand.points };
}

function meldLabel(meld, lang) {
  if (lang !== 'zh') return meld.label;
  if (meld.type === 'chow') return `顺子 · ${meld.tiles.map((t) => tileShort(t, 'zh')).join('-')}`;
  if (meld.type === 'pung') return `刻子 · ${tileShort(meld.tiles[0], 'zh')}`;
  if (meld.type === 'kong') return `杠 · ${tileShort(meld.tiles[0], 'zh')}`;
  if (meld.type === 'pair') return `对子 · ${tileShort(meld.tiles[0], 'zh')}`;
  return meld.label === 'Terminals & honors' ? '幺九牌与字牌' : meld.label === 'Plus any duplicate' ? '再重复任意一张' : '特殊牌组';
}

function SectionWin() {
  const variant = React.useContext(VariantContext);
  const lang = React.useContext(LanguageContext);
  const hands = variant === 'taiwan' ? WINNING_HANDS_TAIWAN : variant === 'sichuan' ? WINNING_HANDS_SICHUAN : WINNING_HANDS;
  const [handIdx, setHandIdx] = React.useState(0);
  const [stage, setStage] = React.useState(0);
  const [playing, setPlaying] = React.useState(false);
  const tabsRef = React.useRef(null);
  const hand = hands[handIdx];
  const currentHandText = handText(hand, variant, lang);
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
        <div className="mj-kicker">{textByLang(lang, 'Section 02 · The goal', '第 02 节 · 胜利条件')}</div>
        <h2 className="mj-h2">{textByLang(lang, 'How do you win?', '怎样算胡牌？')}</h2>
        <p className="mj-lede">
          {lang === 'zh' ? (
            variant === 'taiwan' ? (
              <>胡牌通常是 <strong>5 组面子 + 1 对将</strong>，共 17 张（手里 16 张，摸到或吃碰到第 17 张胡牌）。面子可以是<em>顺子</em>、<em>刻子</em>或<em>杠</em>。台湾麻将一般至少要有 <strong>1 台</strong> 才能胡。</>
            ) : variant === 'sichuan' ? (
              <>常规胡牌是 <strong>4 组面子 + 1 对将</strong>，共 14 张，也有七对等特殊牌型。四川麻将额外要求 <strong>缺一门</strong>：定缺之后，胡牌时手里不能再有那一门花色。</>
            ) : (
              <>胡牌通常是 <strong>4 组面子 + 1 对将</strong>，共 14 张。面子可以是<em>顺子</em>（同花色连续三张）、<em>刻子</em>（三张相同）或<em>杠</em>（四张相同）；对子也叫「将」或「眼」。</>
            )
          ) : (
            variant === 'taiwan' ? (
              <>A winning hand is <strong>5 sets + 1 pair</strong> — 17 tiles total (you hold 16, draw 1 to win). A "set" is a <em>chow</em> (three in a row, same suit), a <em>pung</em> (three of a kind), or a <em>kong</em> (four of a kind). You must reach at least <strong>1 臺</strong> to declare — a bare hand with no scoring combination is not allowed.</>
            ) : variant === 'sichuan' ? (
              <>A winning hand is usually <strong>4 sets + 1 pair</strong> — 14 tiles total, with special hands like Seven Pairs. The extra Sichuan test is <strong>缺一門</strong>: after choosing a missing suit, your winning hand must contain none of that suit.</>
            ) : (
              <>A winning hand is <strong>4 sets + 1 pair</strong> — 14 tiles total. A "set" is either a <em>chow</em> (three in a row, same suit), a <em>pung</em> (three of a kind), or a <em>kong</em> (four of a kind). The pair is called the <em>eyes</em>.</>
            )
          )}
        </p>
        <div className="mj-callout">
          {lang === 'zh' ? (
            variant === 'taiwan' ? (
              <>平时手里保持 <strong>16 张</strong>。摸到或吃碰杠到第 17 张时，如果牌型完成就可以胡牌；七对是 14 张特殊牌型。</>
            ) : variant === 'sichuan' ? (
              <>平时手里保持 <strong>13 张</strong>。四川麻将常见打法是血战到底：有人先胡后，其余未胡玩家继续打，直到三家胡牌或牌墙摸完。</>
            ) : (
              <>平时手里保持 <strong>13 张</strong>。摸到或吃碰到第 14 张时，如果牌型完成就胡牌。</>
            )
          ) : (
            variant === 'taiwan' ? (
              <>You always hold <strong>16 tiles</strong>. You win the moment you draw or claim a 17th tile that completes your hand — so every standard winning hand is exactly 17 tiles. (Seven Pairs is a special exception at 14 tiles.)</>
            ) : variant === 'sichuan' ? (
              <>You always hold <strong>13 tiles</strong>. Sichuan tables commonly play 血戰到底: after the first player wins, the hand continues until three players have won or the wall runs out.</>
            ) : (
              <>You always hold <strong>13 tiles</strong>. You win the moment you draw or claim a 14th tile that completes your hand — so every winning hand is exactly 14 tiles total.</>
            )
          )}
        </div>
      </div>

      <div className="mj-hand-reveal">
        <div className="mj-wins-kicker">{textByLang(lang, 'Winning hands', '常见胡牌牌型')}</div>
        <div className="mj-hand-tabs" ref={tabsRef}>
          {hands.map((h, i) => (
            <button
              key={h.id}
              className={`mj-tab ${handIdx === i ? 'is-active' : ''}`}
              onClick={() => setHandIdx(i)}
            >
              <div className="mj-tab-zh">{h.zh}</div>
              <div className="mj-tab-name">{handText(h, variant, lang).name}</div>
              <div className="mj-tab-pts">{handText(h, variant, lang).points}</div>
            </button>
          ))}
        </div>

        <div className="mj-hand-stage">
          <div className="mj-stage-header">
            <div>
              <div className="mj-stage-name">{currentHandText.name} <span className="mj-stage-zh">· {hand.zh}</span></div>
              <div className="mj-stage-desc">{currentHandText.desc}</div>
            </div>
            <button className="mj-btn" onClick={replay}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M1 2v4h4M13 12v-4h-4"/>
                <path d="M11 5A5 5 0 0 0 2 6M3 9a5 5 0 0 0 9-1"/>
              </svg>
              {textByLang(lang, 'Replay', '重播')}
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
                    {meldLabel(meld, lang)}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mj-stage-footer">
            <div className="mj-stage-count">
              <div className="mj-count-big">{allTiles.length}</div>
              <div className="mj-count-lbl">{textByLang(lang, 'tiles total', '张牌')}</div>
            </div>
            <div className="mj-stage-arrow">→</div>
            <div className="mj-stage-formula">
              {hand.melds.every(m => m.type === 'pair') ? (
                <span><strong>7</strong> {textByLang(lang, 'pairs', '对')}</span>
              ) : (
                <span><strong>{hand.melds.filter(m => m.type !== 'pair').length}</strong> {textByLang(lang, 'sets', '组面子')} + <strong>1</strong> {textByLang(lang, 'pair', '对将')}</span>
              )}
            </div>
            <div className="mj-stage-arrow">=</div>
            <div className="mj-stage-pts">{currentHandText.points}</div>
          </div>
        </div>

        {/* Winning hands summary grid */}
        <div className="mj-scoring">
          <div className="mj-scoring-h">{textByLang(lang, 'At a glance', '快速对照')}</div>
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
                  <div className="mj-score-name">{handText(h, variant, lang).name}<span className="mj-score-zh"> · {h.zh}</span></div>
                  <div className="mj-score-tiles">{preview.map((t, ti) => <Tile key={ti} id={t} size="xs" />)}</div>
                  <div className="mj-score-desc">{handText(h, variant, lang).desc}</div>
                  <div className="mj-score-val">{handText(h, variant, lang).points}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Scoring aside */}
        {variant === 'taiwan' ? (
          <div className="mj-scoring">
            <div className="mj-scoring-h">{textByLang(lang, 'Scoring bonuses · Taiwan', '计分加成 · 台湾')}</div>
            <div className="mj-scoring-fan">
              {lang === 'zh' ? (
                <><strong>台</strong> 是台湾麻将的计分单位。每多一台，基础输赢通常翻倍。一般至少 <strong>1 台</strong> 才能胡牌；没有台数却喊胡，属于诈胡或乌龙，会被罚分。</>
              ) : (
                <><strong>臺</strong> (tái) = scoring unit. Each 臺 doubles your base payout — same exponential logic as fan, different name. Minimum <strong>1 臺</strong> to win; a hand with zero 臺 is an illegal win (烏龍) and earns a penalty. These bonuses stack on top of any winning hand.</>
              )}
            </div>
            <div className="mj-scoring-grid">
              {[
                { name: textByLang(lang, 'Self-draw (自摸)', '自摸'), desc: textByLang(lang, 'You drew your own winning tile', '自己摸到胡牌张'), val: textByLang(lang, '1 臺', '1 台'), tiles: ['wan-5'] },
                { name: textByLang(lang, 'Pung of dragons', '箭刻'), desc: textByLang(lang, 'Three of any dragon tile', '中、发、白任意一种刻子'), val: textByLang(lang, '1 臺', '1 台'), tiles: ['red','red','red'] },
                { name: textByLang(lang, 'Pung of seat/round wind', '门风 / 圈风刻'), desc: textByLang(lang, 'Your wind, or the prevailing wind', '自己的门风，或当前圈风刻子'), val: textByLang(lang, '1 臺', '1 台'), tiles: ['east','east','east'] },
                { name: textByLang(lang, 'Matching flower or season', '正花 / 正季'), desc: textByLang(lang, 'Flower/season number = your seat number', '花季牌编号与座位对应'), val: textByLang(lang, '1 臺 each', '每张 1 台'), tiles: ['spring','mei'] },
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
              {textByLang(lang, 'Self-draw (自摸): all three opponents pay you directly. On a discard win, only the discarder pays. Dealer pays or receives double.', '自摸时三家都要付；荣胡时通常由放铳者付。庄家输赢多有加倍处理。')}
            </div>
          </div>
        ) : variant === 'sichuan' ? (
          <div className="mj-scoring">
            <div className="mj-scoring-h">{textByLang(lang, 'Scoring bonuses · Sichuan', '计分加成 · 四川')}</div>
            <div className="mj-scoring-fan">
              {lang === 'zh' ? (
                <>四川麻将也常用 <strong>番</strong> 来表达倍率，但各地细则会不同。稳定的理解是：自摸更贵，特殊牌型加番，杠和根会带来额外收益。</>
              ) : (
                <>Sichuan tables still speak in <strong>fan</strong>, but exact values vary by house. The stable ideas: self-draw pays more, special hand shapes multiply, and kongs/roots add bonus value.</>
              )}
            </div>
            <div className="mj-scoring-grid">
              {[
                { name: textByLang(lang, 'Self-draw (自摸)', '自摸'), desc: textByLang(lang, 'You draw your own winning tile; usually all unfinished players pay', '自己摸到胡牌张，通常未胡的玩家都要付'), val: textByLang(lang, '+ fan', '加番'), tiles: ['wan-5'] },
                { name: textByLang(lang, 'All Pungs (碰碰胡)', '碰碰胡'), desc: textByLang(lang, 'Four triplets plus a pair', '四组刻子加一对将'), val: textByLang(lang, '2+ fan', '2+ 番'), tiles: ['bing-7','bing-7','bing-7'] },
                { name: textByLang(lang, 'Pure One Suit (清一色)', '清一色'), desc: textByLang(lang, 'All tiles from one suit', '整副手牌只用一门花色'), val: textByLang(lang, '4+ fan', '4+ 番'), tiles: ['tiao-3','tiao-4','tiao-5'] },
                { name: textByLang(lang, 'Kong / Root (杠 / 根)', '杠 / 根'), desc: textByLang(lang, 'Four copies of a tile, exposed or concealed, add bonus value', '同一张牌四张齐全，明暗都可能产生额外收益'), val: textByLang(lang, '+ bonus', '加收'), tiles: ['wan-2','wan-2','wan-2','wan-2'] },
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
              {textByLang(lang, 'The ruleset here models the common beginner-facing Sichuan pattern: 108 suited tiles, no chow claims, 定缺/缺一門, and 血戰到底 continuation.', '这里采用适合初学者理解的四川麻将核心规则：108 张花色牌、不吃牌、定缺 / 缺一门，以及血战到底。')}
            </div>
          </div>
        ) : (
          <div className="mj-scoring">
            <div className="mj-scoring-h">{textByLang(lang, 'Scoring bonuses', '计分加成')}</div>
            <div className="mj-scoring-fan">
              {lang === 'zh' ? (
                <><strong>番</strong> 是倍率单位。每多一番，基础分通常翻倍；例如 3 番约等于 2³，也就是 8 倍基础分。不同番种可以叠加。</>
              ) : (
                <><strong>Fan</strong> (番 · fān) = scoring doubles. Every fan <em>doubles</em> your base points — so 3 fan = 2³ = 8× base, 6 fan = 64×. These bonuses stack on top of any winning hand.</>
              )}
            </div>
            <div className="mj-scoring-grid">
              {[
                { name: textByLang(lang, 'Pung of dragons', '箭刻'), desc: textByLang(lang, 'Three of any dragon tile', '中、发、白任意一种刻子'), val: textByLang(lang, '1 fan', '1 番'), tiles: ['red','red','red'] },
                { name: textByLang(lang, 'Pung of seat/round wind', '门风 / 圈风刻'), desc: textByLang(lang, 'Your wind, or the prevailing wind', '自己的门风，或当前圈风刻子'), val: textByLang(lang, '1 fan', '1 番'), tiles: ['east','east','east'] },
                { name: textByLang(lang, 'Self-drawn winning tile', '自摸'), desc: textByLang(lang, 'You drew your own winner', '自己摸到胡牌张'), val: textByLang(lang, '+1 fan', '+1 番'), tiles: ['wan-8'] },
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
              {lang === 'zh' ? <>最终分数大致是基础分 × 2<sup>番</sup>。番数越高，倍率增长越快；点炮通常由放铳者付，自摸则三家都付。</> : <>Final score ≈ base points × 2<sup>fan</sup>. More fan = exponentially more points. The loser(s) pay the winner; self-draw means everyone pays.</>}
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
  const lang = React.useContext(LanguageContext);
  const MAX_HAND = variant === 'taiwan' ? 17 : 14;
  const isSichuan = variant === 'sichuan';

  const [hand, setHand] = React.useState([]);
  const [drawing, setDrawing] = React.useState(false);
  const [sorted, setSorted] = React.useState(false);

  const DRAW_POOL = isSichuan ? [
    'wan-3', 'bing-7', 'tiao-5', 'wan-8', 'bing-2', 'tiao-2',
    'wan-5', 'bing-5', 'tiao-9', 'wan-1', 'bing-9', 'tiao-4',
    'wan-6', 'bing-3', 'tiao-7', 'wan-9', 'bing-1', 'tiao-6',
  ] : [
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
    east:  { zh: '東', en: 'East', zhName: '东家',  label: '東 E',  wallSide: 'right',  nums: [1, 5, 9] },
    south: { zh: '南', en: 'South', zhName: '南家', label: '南 S',  wallSide: 'bottom', nums: [2, 6, 10] },
    west:  { zh: '西', en: 'West', zhName: '西家',  label: '西 W',  wallSide: 'left',   nums: [3, 7, 11] },
    north: { zh: '北', en: 'North', zhName: '北家', label: '北 N',  wallSide: 'top',    nums: [4, 8, 12] },
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
  const stackCountForSide = (side) => {
    if (isSichuan) return { top: 14, right: 13, bottom: 14, left: 13 }[side];
    return variant === 'taiwan' ? 18 : 17;
  };

  const SmallWall = ({ step, showDirection, breakSeat: bSeat, breakIdx }) => (
    <div className={`mj-wall-mini variant-${step}`}>
      <div className="mj-wall-inner">
        {wallSides.map((side) => {
          // Map side → seat for dynamic break highlighting
          const sideToSeat = { top: 'north', right: 'east', bottom: 'south', left: 'west' };
          const stackCount = stackCountForSide(side);
          const breakPosition = Math.max(0, stackCount - 1 - Math.min(breakIdx || 0, stackCount - 1));
          const isBreakSide = step === 'break' && bSeat && sideToSeat[side] === bSeat;
          return (
          <div key={side} className={`mj-wall-side mj-wall-${side} ${isBreakSide ? 'is-break-side' : ''}`}>
            {Array.from({ length: stackCount }).map((_, i) => {
              // For the break: count breakIdx stacks from the RIGHT end of the side.
              // In the DOM each .mj-wall-side goes left→right; "right end" = last stack.
              const isBroken = isBreakSide && i === breakPosition;
              const isBreakDead = isBreakSide && i > breakPosition;
              const isDealt = step === 'deal' && side === 'top' && i >= Math.max(0, stackCount - (isSichuan ? 5 : 7));
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
        {step === 'break' && showDirection !== false && (
          <>
            <div className="mj-dir-arrow mj-dir-arrow-top"><span className="mj-dir-arrow-label">北 N</span></div>
            <div className="mj-dir-arrow mj-dir-arrow-left"><span className="mj-dir-arrow-label">西 W</span></div>
            <div className="mj-dir-arrow mj-dir-arrow-bottom"><span className="mj-dir-arrow-label">南 S</span></div>
            <div className="mj-dir-arrow mj-dir-arrow-right"><span className="mj-dir-arrow-label">東 E</span></div>
          </>
        )}
        {showDirection && step !== 'break' && (
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
        <div className="mj-kicker">{textByLang(lang, 'Section 03 · Opening the game', '第 03 节 · 开局与摸牌')}</div>
        <h2 className="mj-h2">{textByLang(lang, 'How do you draw tiles?', '怎么摸牌？')}</h2>
        <p className="mj-lede">
          {lang === 'zh' ? (
            variant === 'taiwan' ? (
              <>开局前，144 张牌会码成一圈 <strong>方形牌墙</strong>。之后每个人都从牌墙里摸牌；花牌、季牌摸到就亮出并补牌。</>
            ) : isSichuan ? (
              <>开局前，108 张花色牌会码成一圈较短的 <strong>方形牌墙</strong>。流程和传统麻将相似，只是没有字牌与花季牌，牌墙更短。</>
            ) : (
              <>开局前，136 张牌会码成一圈 <strong>方形牌墙</strong>，之后随着摸牌逐步变短。下面用四步说明开局流程。</>
            )
          ) : (
            variant === 'taiwan' ? (
              <>Before the first turn, the 144 tiles become a <strong>square wall</strong> that shrinks as players draw from it. Flowers and seasons are revealed and replaced whenever they appear.</>
            ) : isSichuan ? (
              <>Before the first turn, the 108 suited tiles become a shorter <strong>square wall</strong>. The opening feels familiar, but the wall is leaner because honors and bonus tiles are absent.</>
            ) : (
              <>Before the first turn, the 136 tiles become a <strong>square wall</strong> that shrinks as players draw from it. Here's the opening ritual — in four steps.</>
            )
          )}
        </p>
      </div>

      {/* Dealer selection callout */}
      <div className="mj-dealer-card">
        <div className="mj-dealer-item">
          <div className="mj-dealer-item-h">{textByLang(lang, 'Choosing the first dealer', '决定第一局庄家')}</div>
          <p>{lang === 'zh' ? <>每位玩家掷两颗骰子，点数最高者坐 <strong>东位</strong>，成为第一局庄家。若点数相同，由并列者重掷。</> : <>Each player rolls two dice. The highest total takes the <strong>East seat</strong> and becomes the first dealer. Ties re-roll between the tied players.</>}</p>
        </div>
        <div className="mj-dealer-divider" />
        <div className="mj-dealer-item">
          <div className="mj-dealer-item-h">{textByLang(lang, 'Dealer rotation', '庄家轮转')}</div>
          {lang === 'zh' ? (
            variant === 'taiwan' ? (
              <p>和港式类似：庄家连庄时继续坐东；若其他玩家胡牌，庄家按 <strong>逆时针</strong> 方向轮转。流局通常也保留庄家。</p>
            ) : isSichuan ? (
              <p>庄家从东位开始，行牌按 <strong>逆时针</strong> 方向进行。血战到底时，有人胡牌后本局仍可能继续，下一局庄家按桌上约定轮转。</p>
            ) : (
              <p>庄家胡牌则连庄；一旦其他玩家胡牌，庄家按 <strong>逆时针</strong> 方向轮转。流局（荒庄）通常庄家不变。</p>
            )
          ) : (
            variant === 'taiwan' ? (
              <p>Same as Hong Kong rules — the dealer keeps the East seat as long as they win. When any <em>other</em> player wins, the deal passes <strong>counter-clockwise</strong>. A drawn hand also keeps the dealer in place.</p>
            ) : isSichuan ? (
              <p>The dealer starts as East and play moves <strong>counter-clockwise</strong>. In 血戰到底 tables, the round can continue after a win, then the next hand rotates according to the table's dealer rule.</p>
            ) : (
              <p>The dealer keeps the East seat for as long as they keep winning. The moment any <em>other</em> player wins, the deal passes <strong>counter-clockwise</strong> — South becomes East, West becomes South, and so on. A drawn hand (荒莊) also keeps the dealer in place.</p>
            )
          )}
        </div>
      </div>

      {/* 4-step walkthrough — all visible at once */}
      <div className="mj-draw-steps">
        <div className="mj-draw-step">
          <div className="mj-draw-step-num">1</div>
          <div className="mj-draw-step-content">
            <div className="mj-draw-step-title">{textByLang(lang, 'Build the wall', '码牌墙')}</div>
            {lang === 'zh' ? (
              variant === 'taiwan' ? (
                <p>144 张牌全部洗混后背面朝上，码成两层高的方形牌墙。每边 18 墩：18 × 2 × 4 = 144。</p>
              ) : isSichuan ? (
                <p>108 张花色牌洗混后背面朝上，码成两层高的牌墙。常见做法是总共 54 墩，两边 14 墩、两边 13 墩。</p>
              ) : (
                <p>136 张牌全部洗混后背面朝上，码成两层高的方形牌墙。每边 17 墩：17 × 2 × 4 = 136。</p>
              )
            ) : (
              variant === 'taiwan' ? (
                <p>All 144 tiles are shuffled face-down and stacked two-high in a square. Each side is 18 stacks long — 18 × 2 × 4 = 144.</p>
              ) : isSichuan ? (
                <p>All 108 suited tiles are shuffled face-down and stacked two-high. A common layout uses 54 stacks total — two sides with 14 stacks and two sides with 13.</p>
              ) : (
                <p>All 136 tiles are shuffled face-down and stacked two-high in a square. Each side is 17 stacks long — 17 × 2 × 4 = 136.</p>
              )
            )}
          </div>
          <SmallWall step="build" />
        </div>

        <div className="mj-draw-step">
          <div className="mj-draw-step-num">2</div>
          <div className="mj-draw-step-content">
            <div className="mj-draw-step-title">{textByLang(lang, 'Break the wall', '开门')}</div>
            <p>{lang === 'zh' ? <>庄家掷两颗骰子。<strong>点数和</strong> 同时决定两件事：从哪一家的牌墙开门，以及从右往左数第几墩开门。</> : <>The dealer rolls two dice. The <strong>total</strong> does two things at once — it picks whose wall to break, and how many stacks in from the right to break it.</>}</p>

            <div className="mj-break-rules">
              <div className="mj-break-rule">
                <div className="mj-break-rule-h">{textByLang(lang, '① Whose wall?', '① 开哪家的墙？')}</div>
                <div className="mj-break-rule-p">{lang === 'zh' ? <>从庄家东位开始，按 <em>逆时针</em> 数点数（东 = 1）。</> : <>Count the total <em>counter-clockwise</em> starting from the dealer (East = 1).</>}</div>
                <div className="mj-break-map">
                  <div className={`mj-break-map-row ${breakSeat==='east'?'is-on':''}`}><span className="mj-break-map-seat"><em>東</em> {textByLang(lang, 'East', '东家')}</span><span className="mj-break-map-nums">1 · 5 · 9</span></div>
                  <div className={`mj-break-map-row ${breakSeat==='south'?'is-on':''}`}><span className="mj-break-map-seat"><em>南</em> {textByLang(lang, 'South', '南家')}</span><span className="mj-break-map-nums">2 · 6 · 10</span></div>
                  <div className={`mj-break-map-row ${breakSeat==='west'?'is-on':''}`}><span className="mj-break-map-seat"><em>西</em> {textByLang(lang, 'West', '西家')}</span><span className="mj-break-map-nums">3 · 7 · 11</span></div>
                  <div className={`mj-break-map-row ${breakSeat==='north'?'is-on':''}`}><span className="mj-break-map-seat"><em>北</em> {textByLang(lang, 'North', '北家')}</span><span className="mj-break-map-nums">4 · 8 · 12</span></div>
                </div>
              </div>
              <div className="mj-break-rule">
                <div className="mj-break-rule-h">{textByLang(lang, '② Where on it?', '② 从哪里开？')}</div>
                <div className="mj-break-rule-p">{lang === 'zh' ? <>在那一家的牌墙上，从 <em>右端</em> 往左数同样的点数。数到的位置就是开门处；一侧是牌墙，另一侧留作岭上牌和补牌。</> : <>On that player's wall, count the same total in stacks from the <em>right end</em>. That's your break point. Tiles to the left are the live wall; to the right, the dead wall (kongs &amp; replacements).</>}</div>
              </div>
            </div>

            <div className="mj-dice-row">
              <button className="mj-dice-btn" onClick={rollDice} disabled={rolling}>
                <DiceFace v={d1} /><DiceFace v={d2} />
                <span className="mj-dice-total">= {total}</span>
                <span className="mj-dice-reroll">{rolling ? textByLang(lang, 'rolling…', '掷骰中…') : textByLang(lang, '↻ roll', '↻ 掷骰')}</span>
              </button>
              <div className="mj-dice-explain">
                {lang === 'zh' ? <>→ {total} 点落在 <strong>{SEAT_META[breakSeat].zhName}</strong> <em>({SEAT_META[breakSeat].zh})</em>。从右往左第 <strong>{total}</strong> 墩开门。</> : <>→ {total} lands on <strong>{SEAT_META[breakSeat].en}</strong> <em>({SEAT_META[breakSeat].zh})</em>. Break at stack <strong>{total}</strong> from the right.</>}
              </div>
            </div>
          </div>
          <SmallWall step="break" breakSeat={breakSeat} breakIdx={breakStackFromRight} />
        </div>

        <div className="mj-draw-step">
          <div className="mj-draw-step-num">3</div>
          <div className="mj-draw-step-content">
            <div className="mj-draw-step-title">
              {variant === 'taiwan' ? textByLang(lang, 'Deal 16 to each player', '每人发 16 张') : textByLang(lang, 'Deal 13 to each player', '每人发 13 张')}
            </div>
            {lang === 'zh' ? (
              variant === 'taiwan' ? (
                <p>每次取四张，直到每人 16 张；庄家先多取一张，手里 17 张。发牌过程中若拿到 <strong>花牌或季牌</strong>，立即亮出、放在一旁，并从岭上补牌；若补到的还是花季牌，则继续补。</p>
              ) : isSichuan ? (
                <p>从庄家开始，按 <strong>逆时针</strong> 方向摸牌，直到每人 13 张、庄家 14 张。正式出牌前，每位玩家要先选择一门花色作为定缺。</p>
              ) : (
                <p>从庄家开始，按 <strong>逆时针</strong> 方向取牌（东 → 南 → 西 → 北）。先每次取四张到每人 12 张，再每人取一张；庄家最后多一张，共 14 张。</p>
              )
            ) : (
              variant === 'taiwan' ? (
                <p>Four tiles at a time until everyone has 16. The dealer draws first to hold 17. Any <strong>flower or season tile</strong> drawn during the deal is immediately revealed, set aside, and replaced from the dead wall — this can chain if the replacement is also a bonus tile.</p>
              ) : isSichuan ? (
                <p>Starting with the dealer, players take tiles in <strong>counter-clockwise</strong> order until everyone has 13 and the dealer has 14. Before meaningful discards begin, each player chooses a missing suit: 定缺.</p>
              ) : (
                <p>Starting with the dealer, players take tiles in <strong>counter-clockwise</strong> order (East → South → West → North). Four tiles at a time until everyone has 12, then one more each. The dealer takes 14.</p>
              )
            )}
          </div>
          <SmallWall step="deal" showDirection />
        </div>

        <div className="mj-draw-step">
          <div className="mj-draw-step-num">4</div>
          <div className="mj-draw-step-content">
            <div className="mj-draw-step-title">{textByLang(lang, 'Draw on your turn', '轮到你时摸牌')}</div>
            {lang === 'zh' ? (
              variant === 'taiwan' ? (
                <p>点击牌墙中的一墩摸下一张牌。摸后你有 17 张，需要打一张回到 16 张。若摸到花牌或季牌，亮出并从岭上补牌。行牌继续按 <strong>逆时针</strong> 方向进行。</p>
              ) : isSichuan ? (
                <p>点击牌墙中的一墩摸下一张牌。摸后你有 14 张，需要打一张回到 13 张；通常先把定缺那一门打干净。行牌继续按 <strong>逆时针</strong> 方向进行。</p>
              ) : (
                <p>点击牌墙中的一墩摸下一张牌。摸后你有 14 张，需要打一张回到 13 张。行牌继续按 <strong>逆时针</strong> 方向进行。</p>
              )
            ) : (
              variant === 'taiwan' ? (
                <p>Click a stack in the wall to draw the next tile. You now have 17 — discard one to return to 16. If you draw a flower or season tile, reveal it, set it aside, and draw a replacement instead. Play continues <strong>counter-clockwise</strong> (E → S → W → N).</p>
              ) : isSichuan ? (
                <p>Click a stack in the wall to draw the next tile. You now have 14 — discard one to return to 13, usually pushing away tiles from your missing suit first. Play continues <strong>counter-clockwise</strong> (E → S → W → N).</p>
              ) : (
                <p>Click a stack in the wall to draw the next tile. You now have 14 — discard one to return to 13. Play continues <strong>counter-clockwise</strong> (E → S → W → N).</p>
              )
            )}
            <div className="mj-draw-controls">
              <button className="mj-btn mj-btn-primary" onClick={doDraw} disabled={drawing || handFull}>
                {hand.length === 0 ? textByLang(lang, 'Start drawing', '开始摸牌') : !handFull ? textByLang(lang, `Draw tile ${hand.length + 1}`, `摸第 ${hand.length + 1} 张`) : textByLang(lang, 'Hand full', '手牌已满')}
              </button>
              <button className="mj-btn" onClick={resetHand}>{textByLang(lang, 'Reset', '重置')}</button>
            </div>
          </div>
          <div className={`mj-wall-mini variant-interactive`}>
            <div className="mj-wall-inner">
              {wallSides.map((side) => (
                <div key={side} className={`mj-wall-side mj-wall-${side}`}>
                  {Array.from({ length: stackCountForSide(side) }).map((_, i) => {
                    const stackCount = stackCountForSide(side);
                    const drawnCount = hand.length;
                    const isDrawn = side === 'top' && i >= stackCount - Math.min(drawnCount, stackCount);
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
          {textByLang(lang, 'Your hand', '你的手牌')} · <span className="mj-hand-count">{hand.length} / {MAX_HAND}</span>
          {handFull && <span className="mj-hand-discard-hint"> — {textByLang(lang, 'tap a tile to discard', '轻点一张牌打出')}</span>}
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
            <div className="mj-hand-empty">{textByLang(lang, 'Click a stack in the wall (step 4) to draw a tile →', '点击第 4 步里的牌墙摸一张牌 →')}</div>
          )}
        </div>
      </div>

      {/* Simple list — re-done as per user request */}
      <ul className="mj-draw-list">
        <li><strong>{textByLang(lang, 'Draw order.', '摸牌顺序。')}</strong> {textByLang(lang, 'Counter-clockwise. East (the dealer) always starts.', '逆时针进行，永远由东家（庄家）先开始。')}</li>
        {isSichuan && <li><strong>{textByLang(lang, 'Ding Que.', '定缺。')}</strong> {textByLang(lang, 'Choose one suit to abandon. You cannot win until that suit is gone from your hand.', '选择一门要打缺的花色。手里还有这门牌时不能胡。')}</li>}
        <li><strong>{textByLang(lang, 'Dead wall.', '岭上牌。')}</strong> {textByLang(lang, 'The last tiles are reserved for kongs and replacements.', '牌墙末端留作杠牌和补牌。')}</li>
        <li><strong>{textByLang(lang, 'Kong replacement.', '杠后补牌。')}</strong> {textByLang(lang, "Declare a kong → draw one extra tile from the dead wall's end.", '开杠后，从岭上牌补摸一张。')}</li>
        {variant === 'taiwan' && <li><strong>{textByLang(lang, 'Flower replacement.', '花季补牌。')}</strong> {textByLang(lang, 'Draw a flower or season tile → reveal it, set it aside face-up, and draw a replacement from the dead wall. Happens during the deal and on any subsequent draw.', '摸到花牌或季牌时，亮出放在一旁，并从岭上补牌；发牌和之后摸牌都一样处理。')}</li>}
        {isSichuan && <li><strong>{textByLang(lang, 'Bloody battle.', '血战到底。')}</strong> {textByLang(lang, 'A win does not necessarily end the hand; unfinished players keep playing under 血戰到底 rules.', '有人胡牌并不一定结束本局，未胡玩家继续打到三家胡牌或牌墙摸完。')}</li>}
        <li><strong>{textByLang(lang, 'Exhausted wall.', '牌墙摸完。')}</strong> {textByLang(lang, "If the live wall runs out with no winner, it's a draw (黃莊 · huáng zhuāng).", '若牌墙摸完仍无人胡牌，则流局，也叫荒庄。')}</li>
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

const SICHUAN_ACTIONS = [
  {
    id: 'dingque',
    name: 'Ding Que',
    zh: '定缺',
    pinyin: 'dìng quē',
    en: '"fix the lack"',
    timing: 'on-turn',
    when: 'Before your first discard',
    desc: 'Choose one suit to abandon. You must empty that suit before you can declare Hu.',
    example: ['tiao-1', 'tiao-9'],
    exampleNote: 'chosen missing suit',
  },
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
    desc: 'Throw away one tile face-up. In Sichuan, early discards usually clear your chosen missing suit.',
    example: ['tiao-9'],
    exampleNote: 'push the missing suit out',
  },
  {
    id: 'pung',
    name: 'Pung',
    zh: '碰',
    pinyin: 'pèng',
    en: '"bump"',
    timing: 'out-of-turn',
    when: 'From any player, any seat',
    desc: 'Claim any player\'s discard to complete a triplet. Sichuan removes chow, so pung is the main discard claim before Hu.',
    example: ['bing-7', 'bing-7', 'bing-7'],
    exampleNote: 'three 7-dots',
  },
  {
    id: 'kong',
    name: 'Kong',
    zh: '杠',
    pinyin: 'gàng',
    en: '"bar"',
    timing: 'either',
    when: 'From any discard, or concealed in your hand',
    desc: 'Four of a kind. Draw a replacement tile from the back end of the wall.',
    example: ['wan-2', 'wan-2', 'wan-2', 'wan-2'],
    exampleNote: 'four 2-characters',
  },
  {
    id: 'hu',
    name: 'Hu · Mahjong!',
    zh: '胡',
    pinyin: 'hú',
    en: '"complete"',
    timing: 'either',
    when: 'Complete hand + missing suit satisfied',
    desc: 'Declare win only if your hand is complete and your chosen missing suit is gone. Under 血戰到底, other unfinished players continue.',
    example: ['wan-5', 'wan-5'],
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

const SET_EXAMPLES_SICHUAN = [
  {
    kind: 'Pung (pèng) · 碰',
    desc: 'Three identical suited tiles. This is the main discard claim in Sichuan.',
    valid: [
      { tiles: ['wan-5', 'wan-5', 'wan-5'], note: 'Triple 5 of Characters' },
      { tiles: ['tiao-8', 'tiao-8', 'tiao-8'], note: 'Triple 8 of Bamboo' },
      { tiles: ['bing-2', 'bing-2', 'bing-2'], note: 'Triple 2 of Dots' },
    ],
    invalid: [
      { tiles: ['wan-5', 'wan-5', 'wan-6'], note: 'Only two match — this is a pair + one' },
      { tiles: ['tiao-3', 'bing-3', 'wan-3'], note: 'Same number across suits does not count' },
      { tiles: ['bing-2', 'bing-2'], note: 'Only two — that is a pair, not a pung' },
    ],
  },
  {
    kind: 'Kong (gàng) · 杠',
    desc: 'Four of the same suited tile. Kongs add bonus value and require a replacement draw.',
    valid: [
      { tiles: ['tiao-4', 'tiao-4', 'tiao-4', 'tiao-4'], note: 'All four 4-bamboos' },
      { tiles: ['wan-9', 'wan-9', 'wan-9', 'wan-9'], note: 'A root / kong of 9 Characters' },
    ],
    invalid: [
      { tiles: ['bing-2', 'bing-2', 'bing-2', 'bing-3'], note: 'One tile is different' },
      { tiles: ['wan-7', 'wan-7', 'wan-7'], note: 'Only three — this is a pung' },
    ],
  },
  {
    kind: 'Pair · 對 (the "eyes")',
    desc: 'Two identical tiles. Standard hands still need exactly one pair.',
    valid: [
      { tiles: ['bing-5', 'bing-5'], note: 'Any two of the same suited tile' },
      { tiles: ['tiao-1', 'tiao-1'], note: 'Pair of 1 Bamboo' },
    ],
    invalid: [
      { tiles: ['bing-5', 'bing-6'], note: 'Different tiles — not a pair' },
      { tiles: ['wan-2', 'bing-2'], note: 'Same number, different suit — not a pair' },
    ],
  },
  {
    kind: 'Missing suit · 缺一門',
    desc: 'After 定缺, a winning hand must contain none of the suit you chose to lack.',
    valid: [
      { tiles: ['wan-2', 'wan-3', 'wan-4', 'bing-7'], note: 'Bamboo is missing' },
      { tiles: ['tiao-1', 'tiao-1', 'bing-5', 'bing-6'], note: 'Characters are missing' },
    ],
    invalid: [
      { tiles: ['wan-2', 'tiao-4', 'bing-7'], note: 'All three suits are still present' },
      { tiles: ['tiao-3', 'tiao-4', 'wan-9'], note: 'Illegal if Bamboo was your chosen missing suit' },
    ],
  },
];

const ACTION_TEXT_ZH = {
  draw: { name: '摸牌', lit: '摸一张牌', timing: '你的回合', when: '回合开始时', desc: '从牌墙摸一张牌，此时手里多一张；随后必须打一张，回到正常手牌数。' },
  discard: { name: '打牌', lit: '打出一张牌', timing: '你的回合', when: '回合结束时', desc: '把一张牌明着打出，手牌回到正常张数。四川麻将通常优先打掉定缺那一门。' },
  pung: { name: '碰', lit: '碰成刻子', timing: '他人回合', when: '任何玩家打出时', desc: '别人打出的牌若能和你手里的两张相同牌组成刻子，可以碰。四川麻将不能吃牌，碰是主要的副露方式。' },
  chow: { name: '吃', lit: '吃成顺子', timing: '他人回合', when: '只能吃上家的牌', desc: '用刚打出的牌和自己手里的两张牌组成同花色顺子；只能吃上家。' },
  kong: { name: '杠', lit: '四张相同', timing: '都可以', when: '可明杠，也可暗杠', desc: '四张相同牌组成杠。杠后要从岭上补摸一张。' },
  hu: { name: '胡牌', lit: '完成牌型', timing: '都可以', when: '牌型完成时', desc: '宣布胡牌。若多家争同一张牌，胡牌优先级最高。四川麻将还要满足缺一门。' },
  dingque: { name: '定缺', lit: '确定缺门', timing: '你的回合', when: '第一次出牌前', desc: '选择一门必须打缺的花色。胡牌前，手里不能再有这门牌。' },
  flower: { name: '补花 / 补季', lit: '亮出并补牌', timing: '你的回合', when: '摸到花季牌时立即处理', desc: '摸到花牌或季牌后，亮出放在一旁，再从岭上补一张；它不进入手牌。' },
};

const SET_EXAMPLE_TEXT_ZH = {
  default: [
    {
      kind: '顺子 (chī) · 吃',
      desc: '同一花色连续三张。',
      valid: ['万子 4-5-6，标准顺子', '条子最低顺 1-2-3', '筒子 7-8-9，包含九这张端张'],
      invalid: ['混了不同花色，不能算顺子', '数字不连续', '字牌永远不能组成顺子'],
    },
    {
      kind: '刻子 (pèng) · 碰',
      desc: '三张完全相同的牌。',
      valid: ['三张五万', '三张东风', '三张红中，通常有番'],
      invalid: ['只有两张相同，另加一张不同牌', '同数字但不同花色，不算相同', '两张东风不是刻子'],
    },
    {
      kind: '杠 (gàng) · 杠',
      desc: '四张完全相同的牌。开杠后要补牌。',
      valid: ['四张四条', '四张白板暗杠'],
      invalid: ['其中一张不同', '只有三张，这是刻子不是杠'],
    },
    {
      kind: '对子 · 将 / 眼',
      desc: '两张完全相同的牌。常规胡牌需要一对将。',
      valid: ['一对发财', '任意两张相同牌都可以作将'],
      invalid: ['两张不同，不能作将', '不同风牌，不能作将'],
    },
  ],
  sichuan: [
    {
      kind: '刻子 (pèng) · 碰',
      desc: '三张完全相同的花色牌。四川麻将不能吃，碰是主要的副露方式。',
      valid: ['三张五万', '三张八条', '三张二筒'],
      invalid: ['只有两张相同，另加一张不同牌', '同数字但不同花色，不算相同', '只有两张，这是对子不是刻子'],
    },
    {
      kind: '杠 (gàng) · 杠',
      desc: '四张完全相同的花色牌。杠和根通常会带来额外收益。',
      valid: ['四张四条', '九万成根 / 成杠'],
      invalid: ['其中一张不同', '只有三张，这是刻子不是杠'],
    },
    {
      kind: '对子 · 将 / 眼',
      desc: '两张完全相同的牌。常规胡牌仍然需要一对将。',
      valid: ['任意两张相同花色牌', '一对一条'],
      invalid: ['两张不同，不能作将', '同数字但不同花色，也不是对子'],
    },
    {
      kind: '缺一门 · 定缺',
      desc: '定缺之后，胡牌时不能再有你选择打缺的那一门。',
      valid: ['没有条子，满足缺条', '没有万子，满足缺万'],
      invalid: ['三门花色都还在', '如果定缺为条，手里仍有条子就不能胡'],
    },
  ],
};

function actionText(action, lang) {
  if (lang !== 'zh') return {
    name: action.name,
    lit: action.en,
    timing: action.timing === 'on-turn' ? 'Your turn' : action.timing === 'out-of-turn' ? 'Out of turn' : 'Either',
    when: action.when,
    desc: action.desc,
  };
  return ACTION_TEXT_ZH[action.id] || {
    name: action.name,
    lit: action.en,
    timing: action.timing,
    when: action.when,
    desc: action.desc,
  };
}

function setExampleText(ex, idx, variant, lang) {
  if (lang !== 'zh') return ex;
  return SET_EXAMPLE_TEXT_ZH[variant === 'sichuan' ? 'sichuan' : 'default']?.[idx] || ex;
}

function SectionActions() {
  const variant = React.useContext(VariantContext);
  const lang = React.useContext(LanguageContext);
  const actions = variant === 'sichuan'
    ? SICHUAN_ACTIONS
    : [
      ...TURN_ACTIONS,
      ...(variant === 'taiwan' ? [{
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
      }] : []),
    ];
  const priorityRows = variant === 'sichuan'
    ? lang === 'zh'
      ? [
        { rank: '1', name: '胡牌', desc: '优先级最高。只要牌型完成且满足缺一门，可以自摸胡，也可以胡别人打出的牌。' },
        { rank: '2', name: '碰 / 杠', desc: '任何座位都可以碰杠。四川麻将不能吃牌。' },
      ]
      : [
        { rank: '1', name: 'Hu (win)', desc: 'Highest priority. A complete hand can win from draw or discard once 缺一門 is satisfied.' },
        { rank: '2', name: 'Pung / Kong', desc: 'Anyone, any seat. Chow is not a legal claim in Sichuan.' },
      ]
    : lang === 'zh'
      ? [
        { rank: '1', name: '胡牌', desc: '最高优先级。若别人打出的牌正好让你胡牌，可以立即胡。' },
        { rank: '2', name: '碰 / 杠', desc: '任何座位都可以碰或杠，优先级高于吃。' },
        { rank: '3', name: '吃', desc: '只能吃上家刚打出的牌。' },
      ]
      : [
        { rank: '1', name: 'Hu (win)', desc: 'Always wins — if the discarded tile completes your hand, you win immediately.' },
        { rank: '2', name: 'Pung / Kong', desc: 'Anyone, any seat — beats chow.' },
        { rank: '3', name: 'Chow', desc: 'Only the next player (to the discarder\'s right).' },
      ];

  return (
    <section id="section-actions" className="mj-section" data-screen-label="04 Actions">
      <div className="mj-section-head">
        <div className="mj-kicker">{textByLang(lang, 'Section 04 · Your turn', '第 04 节 · 轮到你时')}</div>
        <h2 className="mj-h2">{textByLang(lang, 'What can you do each turn?', '每回合可以做什么？')}</h2>
        <p className="mj-lede">
          {lang === 'zh' ? (
            variant === 'sichuan' ? (
              <>基本动作仍然是摸一张、打一张，平时手里保持 <strong>13 张</strong>。四川麻将的关键是<em>定缺</em>：先选一门要打缺的花色，并且记住 <strong>四川麻将不能吃牌</strong>。</>
            ) : (
              <>基本动作是摸一张、打一张，平时手里保持 <strong>{variant === 'taiwan' ? '16' : '13'} 张</strong>。别人打牌时，你可以打断流程来碰牌；吃牌则只能吃上家。</>
            )
          ) : (
            variant === 'sichuan' ? (
              <>Your basic move is still draw one, discard one — you keep exactly <strong>13 tiles</strong> in hand. The Sichuan twist is <em>定缺</em>: pick one suit to empty, and remember that <strong>chow is not a legal discard claim</strong>.</>
            ) : (
              <>Your basic move is to draw one tile then discard one — you always keep exactly <strong>{variant === 'taiwan' ? '16' : '13'} tiles</strong> in hand. Between turns you can <em>interrupt</em> to claim a discard from any player (pung) or just from the player before you (chow).</>
            )
          )}
        </p>
      </div>

      {/* Simple, non-button list of actions */}
      <div className="mj-action-list">
        {actions.map((a) => (
          <div key={a.id} className="mj-action-row">
            <div className="mj-action-zh-col">
              <div className="mj-action-zh">{a.zh}</div>
              <div className="mj-action-pinyin">{a.pinyin}</div>
              <div className="mj-action-lit">{actionText(a, lang).lit}</div>
            </div>
            <div className="mj-action-main">
              <div className="mj-action-name">{actionText(a, lang).name}</div>
              <div className="mj-action-desc">{actionText(a, lang).desc}</div>
            </div>
            <div className="mj-action-example">
              {a.example.map((t, i) => <Tile key={i} id={t} size="sm" />)}
            </div>
            <div className="mj-action-when-col">
              <span className={`mj-action-timing mj-timing-${a.timing}`}>
                {actionText(a, lang).timing}
              </span>
              <span className="mj-action-when-txt">{actionText(a, lang).when}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Priority explainer */}
      <div className="mj-priority">
        <div className="mj-priority-h">{textByLang(lang, 'What if two players want the same discard?', '两个人都要同一张牌怎么办？')}</div>
        <div className="mj-priority-ladder">
          {priorityRows.map((row) => (
            <div key={row.rank} className="mj-prio-row">
              <div className="mj-prio-rank">{row.rank}</div>
              <div className="mj-prio-name">{row.name}</div>
              <div className="mj-prio-desc">{row.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Valid vs invalid — tabbed, single block */}
      <div className="mj-vi-head">
        <h3 className="mj-h3">{textByLang(lang, 'Valid vs. invalid sets', '哪些牌组有效？')}</h3>
        <p className="mj-vi-sub">
          {lang === 'zh'
            ? variant === 'sichuan'
              ? '四川麻将不能把吃作为副露动作；很多桌规里手牌仍可含顺子，真正额外要检查的是定缺那一门是否已经打干净。'
              : '面子和对子是胡牌的基本积木。下面对比哪些算数，哪些不算。'
            : variant === 'sichuan'
              ? 'Sichuan removes chow as a claim action. Runs can still appear in many table rules; the extra test is whether your chosen missing suit is gone.'
              : "A set is the building block of a winning hand. Here's what counts — and what doesn't."}
        </p>
      </div>

      <ValidInvalidTabs variant={variant} lang={lang} />
    </section>
  );
}

function ValidInvalidTabs({ variant, lang }) {
  const examples = variant === 'sichuan' ? SET_EXAMPLES_SICHUAN : SET_EXAMPLES;
  const [idx, setIdx] = React.useState(0);
  React.useEffect(() => { setIdx(0); }, [variant]);
  const ex = examples[idx];
  const exText = setExampleText(ex, idx, variant, lang);
  return (
    <div className="mj-vi-block">
      <div className="mj-vi-tabs">
        {examples.map((e, i) => (
          <button
            key={i}
            className={`mj-vi-tab ${idx === i ? 'is-active' : ''}`}
            onClick={() => setIdx(i)}
          >{setExampleText(e, i, variant, lang).kind}</button>
        ))}
      </div>
      <div className="mj-vi-desc mj-vi-block-desc">{exText.desc}</div>
      <div className="mj-vi-cols">
        <div className="mj-vi-col mj-vi-valid">
          <div className="mj-vi-col-head">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M2 7l3.5 3.5L12 4"/></svg>
            {textByLang(lang, 'Valid', '有效')}
          </div>
          {ex.valid.map((v, vi) => (
            <div key={vi} className="mj-vi-example">
              <div className="mj-vi-tiles">
                {v.tiles.map((t, ti) => <Tile key={ti} id={t} size="sm" />)}
              </div>
              <div className="mj-vi-note">{lang === 'zh' ? exText.valid?.[vi] : v.note}</div>
            </div>
          ))}
        </div>
        <div className="mj-vi-col mj-vi-invalid">
          <div className="mj-vi-col-head">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M3 3l8 8M11 3l-8 8"/></svg>
            {textByLang(lang, 'Not valid', '无效')}
          </div>
          {ex.invalid.map((v, vi) => (
            <div key={vi} className="mj-vi-example">
              <div className="mj-vi-tiles">
                {v.tiles.map((t, ti) => <Tile key={ti} id={t} size="sm" />)}
              </div>
              <div className="mj-vi-note">{lang === 'zh' ? exText.invalid?.[vi] : v.note}</div>
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

const VariantContext = React.createContext('sichuan');
const LanguageContext = React.createContext('en');

const SECTIONS = [
  { id: 'section-tiles', num: '01', label: 'What are the tiles?', labelZh: '麻将有哪些牌？' },
  { id: 'section-win', num: '02', label: 'How do you win?', labelZh: '怎样算胡牌？' },
  { id: 'section-draw', num: '03', label: 'How do you draw tiles?', labelZh: '怎么摸牌？' },
  { id: 'section-actions', num: '04', label: 'Valid moves on a turn', labelZh: '每回合可做什么？' },
];

function sectionLabel(section, lang) {
  return lang === 'zh' ? section.labelZh : section.label;
}

function App() {
  const [theme, setTheme] = React.useState(TWEAK_DEFAULTS.theme);
  const [variant, setVariant] = React.useState('sichuan');
  const [lang, setLang] = React.useState('en');
  const [active, setActive] = React.useState('section-tiles');
  const [tweaksOn, setTweaksOn] = React.useState(false);

  // Apply theme
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  React.useEffect(() => {
    document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-CN' : 'en');
  }, [lang]);

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

  const setLang2 = (nextLang) => {
    setLang(nextLang);
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
      <LanguageContext.Provider value={lang}>
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
                <span className="mj-nav-label">{sectionLabel(s, lang)}</span>
              </a>
            ))}
          </nav>
          <div className="mj-theme-picker">
            <div className="mj-theme-label">{textByLang(lang, 'Theme', '主题')}</div>
            {THEMES.map((t) => (
              <button
                key={t.id}
                className={`mj-theme-btn ${theme === t.id ? 'is-active' : ''}`}
                onClick={() => setTheme2(t.id)}
              >{themeLabel(t, lang)}</button>
            ))}
          </div>
          <div className="mj-theme-picker">
            <div className="mj-theme-label">{textByLang(lang, 'Ruleset', '规则')}</div>
            {RULESETS.map((v) => (
              <button
                key={v.id}
                className={`mj-theme-btn ${variant === v.id ? 'is-active' : ''}`}
                onClick={() => setVariant(v.id)}
              >{rulesetLabel(v, lang, true)}</button>
            ))}
          </div>
          <div className="mj-theme-picker">
            <div className="mj-theme-label">{textByLang(lang, 'Language', '语言')}</div>
            {LANG_OPTIONS.map((option) => (
              <button
                key={option.id}
                className={`mj-theme-btn ${lang === option.id ? 'is-active' : ''}`}
                onClick={() => setLang2(option.id)}
              >{option.label}</button>
            ))}
          </div>
        </aside>

        {/* Mobile collapsible topbar */}
        <MobileTopbar active={active} go={go} />

        <div className="mj-main">
          <Hero theme={theme} setTheme2={setTheme2} setVariant={setVariant} lang={lang} setLang={setLang2} />
          <div className="mj-theme-bar">
            <span className="mj-theme-bar-label">{textByLang(lang, 'Ruleset', '规则')}</span>
            <div className="mj-theme-bar-btns">
              {RULESETS.map((v) => (
                <button
                  key={v.id}
                  className={`mj-theme-bar-btn ${variant === v.id ? 'is-active' : ''}`}
                  onClick={() => setVariant(v.id)}
                >{rulesetLabel(v, lang, true)}</button>
              ))}
            </div>
          </div>
          <div className="mj-theme-bar">
            <span className="mj-theme-bar-label">{textByLang(lang, 'Color theme', '颜色主题')}</span>
            <div className="mj-theme-bar-btns">
              {THEMES.map((t) => (
                <button
                  key={t.id}
                  className={`mj-theme-bar-btn ${theme === t.id ? 'is-active' : ''}`}
                  onClick={() => setTheme2(t.id)}
                >{themeLabel(t, lang)}</button>
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
            {textByLang(lang, 'A visual guide for total beginners.', '为零基础玩家准备的可视化麻将入门指南。')}
            <div className="mj-foot-credit">
              {lang === 'zh' ? <>麻将牌 SVG 改编自 <a href="https://commons.wikimedia.org/wiki/Category:SVG_Planar_illustrations_of_Mahjong_tiles" target="_blank" rel="noopener noreferrer">Shizhao</a>（Public domain，Wikimedia Commons），并做了少量视觉调整。</> : <>Mahjong tile SVGs adapted from <a href="https://commons.wikimedia.org/wiki/Category:SVG_Planar_illustrations_of_Mahjong_tiles" target="_blank" rel="noopener noreferrer">Shizhao</a> (derivative work by shizhao), Public domain, via Wikimedia Commons — with minor design edits.</>}
            </div>
          </div>
          <a className="mj-foot-cta" href={BLOG_URL} target="_blank" rel="noopener noreferrer">
            <span className="mj-foot-cta-tile">
              <img src="tiles/modal-tile.svg" alt="" />
            </span>
            <span className="mj-foot-cta-text">
              <span className="mj-foot-cta-kicker">{textByLang(lang, "You're invited", '欢迎访问')}</span>
              <span className="mj-foot-cta-title">{textByLang(lang, "Visit Haerin's Blog", '访问 Haerin 的博客')}</span>
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
            <div style={{ fontSize: 13, marginBottom: 8, color: 'var(--ink-soft)' }}>{textByLang(lang, 'Color theme', '颜色主题')}</div>
            <div style={{ display: 'flex', gap: 4 }}>
              {THEMES.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTheme2(t.id)}
                  style={{
                    flex: 1, padding: '8px 10px', fontSize: 12, cursor: 'pointer',
                    border: '1px solid ' + (theme === t.id ? 'var(--jade)' : 'var(--rule)'),
                    background: theme === t.id ? 'var(--jade-wash)' : 'var(--paper)',
                    color: 'var(--ink)', borderRadius: 5, fontFamily: 'inherit',
                  }}
                >{themeLabel(t, lang)}</button>
              ))}
            </div>
          </div>
        )}
      </LanguageContext.Provider>
    </VariantContext.Provider>
  );
}

function MobileTopbar({ active, go }) {
  const lang = React.useContext(LanguageContext);
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
          aria-label={textByLang(lang, 'Toggle menu', '打开菜单')}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="mj-menu-btn-label">
            <span className="mj-menu-btn-num">{activeSection.num}</span>
            {sectionLabel(activeSection, lang)}
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
              {sectionLabel(s, lang)}
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
  const lang = React.useContext(LanguageContext);
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
          <span className="mj-foot-cta-kicker">{textByLang(lang, "You're invited", '欢迎访问')}</span>
          <span className="mj-foot-cta-title">{textByLang(lang, "Visit Haerin's Blog", '访问 Haerin 的博客')}</span>
        </span>
        <span className="mj-foot-cta-arrow">→</span>
      </a>
      <button className="mj-toast-invite-close" onClick={dismiss} aria-label={textByLang(lang, 'Dismiss', '关闭')}>×</button>
    </div>
  );
}

function Hero({ theme, setTheme2, setVariant, lang, setLang }) {
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

  const currentRuleset = RULESETS.find(r => r.id === variant);

  return (
    <section className="mj-hero mj-hero-ascii">
      <div className="mj-hero-text">
        <div className="mj-hero-kicker">
          {/* Desktop: static label */}
          <span className="mj-kicker-static">
            {rulesetLabel(currentRuleset, lang)}
          </span>
          {/* Mobile: interactive row */}
          <div className="mj-kicker-interactive">
            <div className="mj-kicker-ruleset-wrap" ref={rulesetRef}>
              <button
                className="mj-kicker-ruleset-btn"
                onClick={() => { setRulesetOpen(!rulesetOpen); setThemeOpen(false); }}
              >
                {rulesetLabel(currentRuleset, lang)}
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
                    >{rulesetLabel(r, lang)}</button>
                  ))}
                </div>
              )}
            </div>
            <div className="mj-kicker-theme-wrap" ref={themeRef}>
              <button
                className="mj-kicker-theme-btn"
                onClick={() => { setThemeOpen(!themeOpen); setRulesetOpen(false); }}
                aria-label={textByLang(lang, 'Color theme', '颜色主题')}
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
                      {themeLabel(t, lang)}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="mj-kicker-lang-wrap">
              <button
                className="mj-kicker-lang-btn"
                onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
                aria-label={textByLang(lang, 'Switch language', '切换语言')}
              >
                {lang === 'zh' ? 'EN' : '中文'}
              </button>
            </div>
          </div>
        </div>
        {lang === 'zh' ? (
          <h1>
            学会 <em>麻将</em><br/>
            一份可视化<em>指南</em><br/>
            <span className="mj-zh">麻將</span>
          </h1>
        ) : (
          <h1>
            Learn <em>mahjong</em><br/>
            A visual <em>guide</em><br/>
            <span className="mj-zh">麻將</span>
          </h1>
        )}
        <div className="mj-hero-meta">
          {lang === 'zh' ? (
            variant === 'taiwan' ? (
              <>
                <div><strong>144</strong>张牌一副</div>
                <div><strong>16</strong>张起手，17 张胡</div>
                <div><strong>5</strong>组面子 + 1 对将</div>
              </>
            ) : variant === 'sichuan' ? (
              <>
                <div><strong>108</strong>只用三门花色</div>
                <div><strong>13</strong>张起手，14 张胡</div>
                <div><strong>缺</strong>一门才能胡</div>
              </>
            ) : (
              <>
                <div><strong>136</strong>张牌一副</div>
                <div><strong>13</strong>张起手，14 张胡</div>
                <div><strong>4</strong>组面子 + 1 对将</div>
              </>
            )
          ) : variant === 'taiwan' ? (
            <>
              <div><strong>144</strong>tiles in a set</div>
              <div><strong>16</strong>tiles dealt, 17 to win</div>
              <div><strong>5</strong>sets + 1 pair</div>
            </>
          ) : variant === 'sichuan' ? (
            <>
              <div><strong>108</strong>suited tiles only</div>
              <div><strong>13</strong>tiles dealt, 14 to win</div>
              <div><strong>缺</strong>one suit to win</div>
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
        {textByLang(lang, 'inspired by emily', '灵感来自 emily')} <span className="mj-hero-signature-heart">💚</span>
      </div>
    </section>
  );
}

export default App;
