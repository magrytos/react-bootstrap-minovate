import React from 'react'

import Tile from 'components/Tile'
import Chat from 'components/Chat'
import TransactionTable from 'components/TransactionTable'

const data = [
  { price: '31 199,00', quantity: '0,00496', sum: '154,74 ~' },
  { price: '31 200,00', quantity: '0,00366', sum: '114,19 ~' },
  { price: '31 213,00', quantity: '0,10000', sum: '3 121,30' },
  { price: '31 250,00', quantity: '0,01835 ~', sum: '573,71 ~' },
  { price: '31 255,00', quantity: '0,18408 ~', sum: '5 753,64 ~' },
  { price: '31 311,65', quantity: '0,01004', sum: '314,36 ~' },
  { price: '31 317,26', quantity: '0,52179', sum: '16 341,03 ~' },
  { price: '31 399,00', quantity: '0,00501 ~', sum: '157,56 ~' },
  { price: '31 407,39', quantity: '0,00146 ~', sum: '45,96 ~' },
  { price: '31 500,00', quantity: '0,02228 ~', sum: '702,08 ~' },
]

const Market = () => (
  <div className="bm-page">
    <div className="bm-main-section">
      <div className="bm-chart-container">
        <Tile title="Market" subtitle="BTC / PLN">
          some text
        </Tile>
      </div>
      <div className="bm-paired-tiles">
        <Tile title="Kup" subtitle="BTC" noPadding>
          <TransactionTable data={data} />
        </Tile>
        <Tile title="Sprzedaj" subtitle="BTC" noPadding>
          <TransactionTable data={data} />
        </Tile>
      </div>
    </div>
    <div className="bm-right-section">
      <Tile subtitle="Czat">
        <Chat />
      </Tile>
    </div>
  </div>
)

export default Market
