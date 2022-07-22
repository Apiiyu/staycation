import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from 'components/organisms/Header'
import Hero from 'components/molecules/Hero'

import landingPage from 'json/landingPage.json'
import Rooms from 'components/molecules/Rooms'
import MostPicked from 'components/molecules/MostPicked'
import Categories from 'components/molecules/Categories'
import Testimonials from 'components/organisms/Testimonials';
import Footer from 'components/organisms/Footer'

import { fetchHomePage } from 'store/actions/home'
class Home extends Component {
  constructor(props) {
    super(props)
    this.refMostPicked = React.createRef()
  }

  componentDidMount() {
    document.title = 'Staycation | Home'
    window.scrollTo(0, 0)

    this.props.fetchHomePage("https://staycation-id.herokuapp.com/api/v1/landing-page", 'landingPage')
  }


  render() {
    const data = this.props.home?.landingPage
    console.log(this.props, 'props')

    // if (!data.hasOwnProperty('landingPage')) return null

    return (
      <>
        <Header {...this.props}/>
        <Hero refMostPicked={this.refMostPicked} data={data} />
        <Rooms />
        <MostPicked refMostPicked={this.refMostPicked} data={data.mostPicked} />
        <Categories data={data.categories}/>
        <Testimonials data={data.testimonial}/>
        <Footer />
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  home: state.home
})

export default connect(mapStateToProps, {fetchHomePage})(Home)