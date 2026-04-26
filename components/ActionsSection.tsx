import Image from 'next/image'

export default function ActionsSection() {
  return (
    <section id="section-actions" className="min-h-screen px-8 py-20 bg-black/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-xs font-bold mb-4 opacity-50">SECTION 04 · YOUR TURN</div>
        <h2 className="text-5xl font-bold mb-8">What can you do each turn?</h2>

        <p className="text-xl mb-12 max-w-3xl">
          Your basic move is to draw one tile then discard one — you always keep exactly <strong>13 tiles</strong> in hand. Between turns you can <strong>interrupt</strong> to claim a discard from any player (pung) or just from the player before you (chow).
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg p-6">
            <div className="text-2xl font-bold mb-2">摸牌</div>
            <div className="text-sm opacity-50 mb-4">mō pái · "feel for a tile"</div>
            <h3 className="text-xl font-bold mb-4">Draw</h3>
            <p className="text-lg mb-4">
              Take one tile from the wall — now 14. You must then discard one to return to 13.
            </p>
            <div className="flex justify-center">
              <Image src="/tiles/bing-5.svg" alt="Draw" width={60} height={77} />
            </div>
          </div>

          <div className="bg-white rounded-lg p-6">
            <div className="text-2xl font-bold mb-2">打牌</div>
            <div className="text-sm opacity-50 mb-4">dǎ pái · "strike the tile"</div>
            <h3 className="text-xl font-bold mb-4">Discard</h3>
            <p className="text-lg mb-4">
              Throw away one tile face-up. Your hand returns to 13.
            </p>
            <div className="flex justify-center">
              <Image src="/tiles/wan-1.svg" alt="Discard" width={60} height={77} />
            </div>
          </div>

          <div className="bg-white rounded-lg p-6">
            <div className="text-2xl font-bold mb-2">碰</div>
            <div className="text-sm opacity-50 mb-4">pèng · "bump"</div>
            <h3 className="text-xl font-bold mb-4">Pung</h3>
            <p className="text-lg mb-4">
              Claim any player's discard to complete a triplet. Interrupt their discard — beats chow.
            </p>
            <div className="flex justify-center gap-1">
              <Image src="/tiles/bing-7.svg" alt="Pung" width={50} height={64} />
              <Image src="/tiles/bing-7.svg" alt="Pung" width={50} height={64} />
              <Image src="/tiles/bing-7.svg" alt="Pung" width={50} height={64} />
            </div>
          </div>

          <div className="bg-white rounded-lg p-6">
            <div className="text-2xl font-bold mb-2">吃</div>
            <div className="text-sm opacity-50 mb-4">chī · "eat"</div>
            <h3 className="text-xl font-bold mb-4">Chow</h3>
            <p className="text-lg mb-4">
              Claim the just-discarded tile to complete a run of three — but only from the player directly before you.
            </p>
            <div className="flex justify-center gap-1">
              <Image src="/tiles/tiao-3.svg" alt="Chow" width={50} height={64} />
              <Image src="/tiles/tiao-4.svg" alt="Chow" width={50} height={64} />
              <Image src="/tiles/tiao-5.svg" alt="Chow" width={50} height={64} />
            </div>
          </div>

          <div className="bg-white rounded-lg p-6">
            <div className="text-2xl font-bold mb-2">杠</div>
            <div className="text-sm opacity-50 mb-4">gàng · "bar"</div>
            <h3 className="text-xl font-bold mb-4">Kong</h3>
            <p className="text-lg mb-4">
              Four of a kind. Draw a replacement tile from the dead wall.
            </p>
            <div className="flex justify-center gap-1">
              <Image src="/tiles/east.svg" alt="Kong" width={45} height={58} />
              <Image src="/tiles/east.svg" alt="Kong" width={45} height={58} />
              <Image src="/tiles/east.svg" alt="Kong" width={45} height={58} />
              <Image src="/tiles/east.svg" alt="Kong" width={45} height={58} />
            </div>
          </div>

          <div className="bg-white rounded-lg p-6">
            <div className="text-2xl font-bold mb-2">胡</div>
            <div className="text-sm opacity-50 mb-4">hú · "complete"</div>
            <h3 className="text-xl font-bold mb-4">Hu · Mahjong!</h3>
            <p className="text-lg mb-4">
              Declare win. Ends the hand. Highest priority — beats everyone.
            </p>
            <div className="flex justify-center gap-1">
              <Image src="/tiles/red.svg" alt="Win" width={60} height={77} />
              <Image src="/tiles/red.svg" alt="Win" width={60} height={77} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6">WHAT IF TWO PLAYERS WANT THE SAME DISCARD?</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="text-3xl font-bold">1</div>
              <div>
                <div className="text-xl font-bold mb-2">Hu (win)</div>
                <p className="text-lg">Always wins — if the discarded tile completes your hand, you win immediately.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-3xl font-bold">2</div>
              <div>
                <div className="text-xl font-bold mb-2">Pung / Kong</div>
                <p className="text-lg">Anyone, any seat — beats chow.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-3xl font-bold">3</div>
              <div>
                <div className="text-xl font-bold mb-2">Chow</div>
                <p className="text-lg">Only the next player (to the discarder's right).</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
