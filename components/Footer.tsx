export default function Footer() {
  return (
    <footer className="px-8 py-20 bg-black/10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">MAHJONG 麻將</h2>
          <p className="text-lg opacity-70">A visual guide for total beginners.</p>
        </div>

        <p className="text-sm opacity-70 mb-8">
          Mahjong tile SVGs adapted from{' '}
          <a
            href="https://commons.wikimedia.org/wiki/Category:SVG_Planar_illustrations_of_Mahjong_tiles"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-100"
          >
            Shizhao
          </a>
          {' '}(derivative work by shizhao), Public domain, via Wikimedia Commons — with minor design edits.
        </p>

        <a
          href="https://partiful.com/e/MyzrBC93CaF2iXIY0oE0"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-green-800 text-white rounded-lg hover:bg-green-900 transition-colors"
        >
          YOU'RE INVITED
          <div className="text-sm">RSVP for Modal Mahjong Night →</div>
        </a>
      </div>
    </footer>
  )
}
