import React, { Component } from 'react'
import Header from 'components/organisms/Header'
import Hero from 'components/molecules/Hero'

import landingPage from 'json/landingPage.json'
import Rooms from 'components/molecules/Rooms'
import MostPicked from 'components/molecules/MostPicked'
import Categories from 'components/molecules/Categories'
import Testimonials from 'components/organisms/Testimonials';
import Footer from 'components/organisms/Footer'
export default class Home extends Component{
  componentDidMount() {
    window.title = 'Staycation | Home'
    window.scrollTo(0, 0)
  }
  constructor(props) {
    super(props)
    this.refMostPicked = React.createRef()
  }


  render() {
    return (
      <>
        <Header {...this.props}/>
        <Hero refMostPicked={this.refMostPicked} data={landingPage} />
        <Rooms />
        <MostPicked refMostPicked={this.refMostPicked} data={landingPage.mostPicked} />
        <Categories data={landingPage.categories}/>
        <Testimonials data={landingPage.testimonial}/>
        <Footer />
      </>
    )
  }
}
