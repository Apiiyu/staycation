import React, { Component } from 'react';
import Header from 'components/organisms/Header';
import HeaderDetails from 'components/molecules/HeaderDetails';
import ItemDetails from 'json/itemDetails'
import FeaturedImages from 'components/molecules/FeaturedImages';
import Description from 'components/molecules/Description';
import BookingForm from 'components/molecules/BookingForm';
import Categories from 'components/molecules/Categories';
import Testimonials from 'components/organisms/Testimonials';
import Footer from 'components/organisms/Footer';

export default class Details extends Component {
  componentDidMount() {
    window.title = 'Staycation | Details'
    window.scrollTo(0, 0)
  }

  constructor(props) {
    super(props)
    this.refMostPicked = React.createRef()
  }

  render () {
    const breadcrumb = [
      {
        pageTitle: 'Home',
        pageHref: ''
      },
      {
        pageTitle: 'House Details',
        pageHref: ''
      }
    ]

    return (
      <>
        <Header {...this.props} />
        <HeaderDetails breadcrumb={breadcrumb} data={ItemDetails} />
        <FeaturedImages data={ItemDetails.imageUrls} />
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <Description data={ItemDetails} />
            </div>

            <div className="col-5">
              <BookingForm itemDetails={ItemDetails} />
            </div>
          </div>
        </section>

        <Categories data={ItemDetails.categories}></Categories>
        <Testimonials data={ItemDetails.testimonial}></Testimonials>
        <Footer />
      </>
    )
  }
}