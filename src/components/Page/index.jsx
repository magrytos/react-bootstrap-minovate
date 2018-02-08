import React from 'react'
import { Route } from 'react-router-dom'

import AboutUs from 'pages/about-us'
import BalanceHistory from 'pages/balance-history'
import Contact from 'pages/contact'
import Deposit from 'pages/deposit'
import Market from 'pages/market'
import MyOffers from 'pages/my-offers'
import Withdrawals from 'pages/withdrawals'

const Layout = () => (
  <section id="content">
    <div className="page ">
      <Route />
      <Route exact path="/" component={Market} />
      <Route path="/my-offers" component={MyOffers} />
      <Route path="/deposit" component={Deposit} />
      <Route path="/withdrawals" component={Withdrawals} />
      <Route path="/balance-history" component={BalanceHistory} />
      <Route path="/about-us" component={AboutUs} />
      <Route path="/contact" component={Contact} />
    </div>
  </section>
)

export default Layout
