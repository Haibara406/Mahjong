interface HeroProps {
  ruleset: 'hongkong' | 'taiwan'
}

export default function Hero({ ruleset }: HeroProps) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-8 py-20" style={{ fontFamily: 'var(--serif)' }}>
      <button
        className="mb-12 px-6 py-2 rounded-full text-xs font-semibold tracking-wider uppercase"
        style={{
          fontFamily: 'var(--sans)',
          backgroundColor: 'var(--bg-alt)',
          color: 'var(--ink-soft)',
          border: '1px solid var(--rule)'
        }}
      >
        {ruleset === 'hongkong' ? 'HONG KONG RULES · 香港麻將' : 'TAIWAN RULES · 台灣麻將'}
      </button>

      <h1 className="text-center mb-20" style={{ fontSize: '80px', lineHeight: '0.95', letterSpacing: '-0.025em', fontWeight: 500 }}>
        <span className="block">Learn mahjong</span>
        <span className="block mt-4" style={{ fontSize: '56px', color: 'var(--ink-muted)' }}>A visual guide</span>
        <span className="block" style={{ fontSize: '56px', color: 'var(--ink-muted)' }}>麻將</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-5xl mb-20">
        <div className="text-center">
          <div style={{ fontSize: '72px', fontWeight: 500, lineHeight: 1, marginBottom: '12px', color: 'var(--ink)' }}>136</div>
          <div style={{ fontSize: '18px', color: 'var(--ink-muted)' }}>tiles in a set</div>
        </div>
        <div className="text-center">
          <div style={{ fontSize: '72px', fontWeight: 500, lineHeight: 1, marginBottom: '12px', color: 'var(--ink)' }}>13</div>
          <div style={{ fontSize: '18px', color: 'var(--ink-muted)' }}>tiles dealt, 14 to win</div>
        </div>
        <div className="text-center">
          <div style={{ fontSize: '72px', fontWeight: 500, lineHeight: 1, marginBottom: '12px', color: 'var(--ink)' }}>4</div>
          <div style={{ fontSize: '18px', color: 'var(--ink-muted)' }}>sets + 1 pair</div>
        </div>
      </div>

      <a
        href="https://x.com/emilyhanyf"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontSize: '14px',
          color: 'var(--ink-faint)',
          fontFamily: 'var(--sans)'
        }}
        className="hover:opacity-70 transition-opacity"
      >
        made by emily 💚
      </a>
    </section>
  )
}
