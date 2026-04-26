export default function DrawSection() {
  return (
    <section id="section-draw" className="min-h-screen px-8 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-xs font-bold mb-4 opacity-50">SECTION 03 · OPENING THE GAME</div>
        <h2 className="text-5xl font-bold mb-8">How do you draw tiles?</h2>

        <p className="text-xl mb-12 max-w-3xl">
          Before the first turn, the 136 tiles become a <strong>square wall</strong> that shrinks as players draw from it. Here's the opening ritual — in four steps.
        </p>

        <div className="space-y-12">
          <div>
            <div className="text-xs font-bold mb-4 opacity-50">CHOOSING THE FIRST DEALER</div>
            <p className="text-lg">
              Each player rolls two dice. The highest total takes the <strong>East seat</strong> and becomes the first dealer. Ties re-roll between the tied players.
            </p>
          </div>

          <div>
            <div className="text-xs font-bold mb-4 opacity-50">DEALER ROTATION</div>
            <p className="text-lg">
              The dealer keeps the East seat for as long as they keep winning. The moment any <strong>other</strong> player wins, the deal passes <strong>counter-clockwise</strong> — South becomes East, West becomes South, and so on.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8">
              <div className="text-4xl font-bold mb-4">1</div>
              <h3 className="text-2xl font-bold mb-4">Build the wall</h3>
              <p className="text-lg">
                All 136 tiles are shuffled face-down and stacked two-high in a square. Each side is 17 stacks long — 17 × 2 × 4 = 136.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8">
              <div className="text-4xl font-bold mb-4">2</div>
              <h3 className="text-2xl font-bold mb-4">Break the wall</h3>
              <p className="text-lg">
                The dealer rolls two dice. The <strong>total</strong> picks whose wall to break, and how many stacks in from the right to break it.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8">
              <div className="text-4xl font-bold mb-4">3</div>
              <h3 className="text-2xl font-bold mb-4">Deal 13 to each player</h3>
              <p className="text-lg">
                Starting with the dealer, players take tiles in <strong>counter-clockwise</strong> order. Four tiles at a time until everyone has 12, then one more each.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8">
              <div className="text-4xl font-bold mb-4">4</div>
              <h3 className="text-2xl font-bold mb-4">Draw on your turn</h3>
              <p className="text-lg">
                Draw the next tile from the wall. You now have 14 — discard one to return to 13. Play continues <strong>counter-clockwise</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
