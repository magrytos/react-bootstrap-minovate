import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

import Login from 'pages/login'

import DashboardPageWrapper from 'components/DashboardPageLayout'
import AboutUs from 'pages/about-us'
import BalanceHistory from 'pages/balance-history'
import Contact from 'pages/contact'
import Deposit from 'pages/deposit'
import Market from 'pages/market'
import MyOffers from 'pages/my-offers'
import Withdrawals from 'pages/withdrawals'

import './styles.scss'

const Layout = () => (
  <Fragment>
    <Route path="/login" component={Login} />
    <Route exact path="/" component={DashboardPageWrapper(Market)} />
    <Route path="/my-offers" component={DashboardPageWrapper(MyOffers)} />
    <Route path="/deposit" component={DashboardPageWrapper(Deposit)} />
    <Route path="/withdrawals" component={DashboardPageWrapper(Withdrawals)} />
    <Route path="/balance-history" component={DashboardPageWrapper(BalanceHistory)} />
    <Route path="/about-us" component={DashboardPageWrapper(AboutUs)} />
    <Route path="/contact" component={DashboardPageWrapper(Contact)} />
  </Fragment>
)

export default Layout
