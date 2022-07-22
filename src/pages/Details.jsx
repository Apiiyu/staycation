import React, { Component } from 'react';
import Header from 'components/organisms/Header';
import HeaderDetails from 'components/molecules/HeaderDetails';
import ItemDetails from 'json/itemDetails'
import FeaturedImages from 'components/molecules/FeaturedImages';
import Description from 'components/molecules/Description';
import BookingForm from 'components/molecules/BookingForm';
import Activities from 'components/molecules/Activities';
import Testimonials from 'components/organisms/Testimonials';
import Footer from 'components/organisms/Footer';
import { connect } from 'react-redux'
import { checkoutBooking } from 'store/actions/checkout';
import { fetchDetailPage } from 'store/actions/detail';
class Details extends Component {
  componentDidMount() {
    document.title = 'Staycation | Details'
    window.scrollTo(0, 0)

    let id = this.props.match.params.id
    this.props.fetchDetailPage(`${process.env.REACT_APP_HOST}/api/v1/detail/${id}`, 'detailPage')
  }
  
  constructor(props) {
    super(props)
    this.refMostPicked = React.createRef()
  }

  render () {
    console.log(this.props, 'props detail')
    const data = this.props.detail?.detailPage

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
        <HeaderDetails breadcrumb={breadcrumb} data={data} />
        <FeaturedImages data={data.images} />
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <Description data={data} />
            </div>

            <div className="col-5">
              <BookingForm itemDetails={data} startBooking = {this.props.checkoutBooking} />
            </div>
          </div>
        </section>
        <Activities data={data.activities} />
        <Testimonials data={data.testimonial}/>
        <Footer />
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  detail: state.detail
})

export default connect(mapStateToProps, { fetchDetailPage, checkoutBooking })(Details)