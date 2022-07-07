import React, { Component } from 'react'
import Header from 'components/organisms/Header'
import Hero from 'components/molecules/Hero'

import landingPage from 'json/landingPage.json'
import Rooms from 'components/molecules/Rooms'
import MostPicked from 'components/molecules/MostPicked'
import Categories from 'components/molecules/Categories'

export default class Home extends Component{
  constructor(props) {
    super(props)
    this.refMostPicked = React.createRef()
  }


  render() {
    console.log()
    return (
      <>
        <Header {...this.props}/>
        <Hero refMostPicked={this.refMostPicked} data={landingPage} />
        <Rooms />
        <MostPicked refMostPicked={this.refMostPicked} data={landingPage.mostPicked} />
        <Categories data={landingPage.categories}/>
      </>
    )
  }
}
