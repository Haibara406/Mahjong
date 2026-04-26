interface SidebarProps {
  theme: 'jade' | 'lacquer' | 'study'
  setTheme: (theme: 'jade' | 'lacquer' | 'study') => void
  ruleset: 'hongkong' | 'taiwan'
  setRuleset: (ruleset: 'hongkong' | 'taiwan') => void
}

export default function Sidebar({ theme, setTheme, ruleset, setRuleset }: SidebarProps) {
  const handleThemeChange = (newTheme: 'jade' | 'lacquer' | 'study') => {
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  return (
    <aside 
      className="fixed left-0 top-0 h-screen overflow-y-auto"
      style={{
        width: 'var(--sidenav-w)',
        backgroundColor: 'var(--bg)',
        borderRight: '1px solid var(--rule-soft)',
        padding: '28px',
        fontFamily: 'var(--sans)'
      }}
    >
      <div className="mb-8">
        <h1 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '4px', color: 'var(--ink)' }}>Mahjong</h1>
        <p style={{ fontSize: '20px', color: 'var(--ink-muted)', fontFamily: 'var(--serif)' }}>麻將</p>
      </div>

      <nav className="mb-12" style={{ fontSize: '15px' }}>
        <a 
          href="#section-tiles" 
          className="block py-2 transition-opacity hover:opacity-70"
          style={{ color: 'var(--ink)' }}
        >
          <span style={{ fontSize: '12px', color: 'var(--ink-faint)', marginRight: '8px' }}>01</span>
          <span>What are the tiles?</span>
        </a>
        <a 
          href="#section-win" 
          className="block py-2 transition-opacity hover:opacity-70"
          style={{ color: 'var(--ink)' }}
        >
          <span style={{ fontSize: '12px', color: 'var(--ink-faint)', marginRight: '8px' }}>02</span>
          <span>How do you win?</span>
        </a>
        <a 
          href="#section-draw" 
          className="block py-2 transition-opacity hover:opacity-70"
          style={{ color: 'var(--ink)' }}
        >
          <span style={{ fontSize: '12px', color: 'var(--ink-faint)', marginRight: '8px' }}>03</span>
          <span>How do you draw tiles?</span>
        </a>
        <a 
          href="#section-actions" 
          className="block py-2 transition-opacity hover:opacity-70"
          style={{ color: 'var(--ink)' }}
        >
          <span style={{ fontSize: '12px', color: 'var(--ink-faint)', marginRight: '8px' }}>04</span>
          <span>Valid moves on a turn</span>
        </a>
      </nav>

      <div className="mb-8">
        <div style={{ fontSize: '11px', fontWeight: 700, marginBottom: '12px', color: 'var(--ink-faint)', letterSpacing: '0.05em' }}>THEME</div>
        <div className="flex gap-2">
          <button
            onClick={() => handleThemeChange('jade')}
            style={{
              padding: '8px 16px',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: 500,
              backgroundColor: theme === 'jade' ? 'var(--jade)' : 'var(--bg-alt)',
              color: theme === 'jade' ? 'white' : 'var(--ink-soft)',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Jade
          </button>
          <button
            onClick={() => handleThemeChange('lacquer')}
            style={{
              padding: '8px 16px',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: 500,
              backgroundColor: theme === 'lacquer' ? 'var(--ink)' : 'var(--bg-alt)',
              color: theme === 'lacquer' ? 'white' : 'var(--ink-soft)',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Lacquer
          </button>
          <button
            onClick={() => handleThemeChange('study')}
            style={{
              padding: '8px 16px',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: 500,
              backgroundColor: theme === 'study' ? 'var(--gold)' : 'var(--bg-alt)',
              color: theme === 'study' ? 'white' : 'var(--ink-soft)',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Study
          </button>
        </div>
      </div>

      <div>
        <div style={{ fontSize: '11px', fontWeight: 700, marginBottom: '12px', color: 'var(--ink-faint)', letterSpacing: '0.05em' }}>RULESET</div>
        <div className="flex gap-2">
          <button
            onClick={() => setRuleset('hongkong')}
            style={{
              padding: '8px 16px',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: 500,
              backgroundColor: ruleset === 'hongkong' ? 'var(--jade)' : 'var(--bg-alt)',
              color: ruleset === 'hongkong' ? 'white' : 'var(--ink-soft)',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Hong Kong
          </button>
          <button
            onClick={() => setRuleset('taiwan')}
            style={{
              padding: '8px 16px',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: 500,
              backgroundColor: ruleset === 'taiwan' ? 'var(--jade)' : 'var(--bg-alt)',
              color: ruleset === 'taiwan' ? 'white' : 'var(--ink-soft)',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Taiwan
          </button>
        </div>
      </div>
    </aside>
  )
}
