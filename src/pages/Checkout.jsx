import React, { Component } from 'react'
import Header from 'components/organisms/Header'
import BookingInformation from 'components/molecules/BookingInformation'
import Stepper, {
  Numbering,
  Meta,
  Content,
  Controller,
} from "components/molecules/Stepper";
import Payment from 'components/molecules/Payment';
import Completed from 'components/molecules/Completed';
import Button from 'components/atom/Button'
import { Fade } from 'react-reveal'
import { connect } from 'react-redux';
import { submitBooking } from 'store/actions/checkout';

class Checkout extends Component {
  state = {
    data: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      proofPayment: '',
      bankName: '',
      bankHolder: '',
    }
  }

  onChange = (event) => {
    this.setState( {
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value
      }
    })
  }

  componentDidMount() {
    window.scroll(0, 0)
  }

  onSubmit = (nextStep) => {
    const { data } = this.state
    const { item, checkout } = this.props

    const payload = new FormData()
    payload.append('firstName', data.firstName)
    payload.append('lastName', data.lastName)
    payload.append('email', data.email)
    payload.append('phoneNumber', data.phone)
    payload.append('itemsId', item._id)
    payload.append('startDate', checkout.date.startDate)
    payload.append('endDate', checkout.date.endDate)
    payload.append('duration', checkout.duration)
    payload.append('bankHolder', data.bankHolder)
    payload.append('bankFrom', data.bankName)
    payload.append('proofPayment', data.proofPayment[0])

    this.props.submitBooking(payload)
      .then(() => {
        nextStep()
      })
  }

  render() {
    const { data } = this.state
    const { checkout, item } = this.props

    if (!checkout) {
      return (
        <div className="container">
          <div className="row align-items-center justify-content-center text-center" style={{ height: '100vh' }}>
            <div className="col-12 col-lg-3">
              Pilih Kamar Dulu!

              <div className="">
                <Button className='btn mt-4 px-5 py-2 justify-content-center' type='link' href='/' isPrimary>
                  Back
                </Button>
              </div>
            </div>
          </div>
        </div>
      )
    } 

    const steps = {
      bookingInformation: {
        title: 'Booking Information',
        description: 'Please fill up the blank fields below',
        content: (
          <BookingInformation data={data} checkout={checkout} ItemDetails={item} onChange={this.onChange} />
        )
      },

      payment: {
        title: 'Payment',
        description: 'Kindly follow the instruction below',
        content: (
          <Payment data={data} ItemDetails={item} checkout={checkout} onChange={this.onChange} />
        )
      },

      completed: {
        title: 'Yay! Completed',
        description: null,
        content: (
          <Completed />
        )
      }
    }

    return (
      <>
        <Header isCentered />
        <Stepper steps={steps} data={steps}>
          {
            (prevStep, nextStep, currentStep, steps) => (
              <>
                <Numbering 
                  data={steps}
                  current={currentStep}
                  style={{ marginBottom: 50 }}
                />

                <Meta data={steps} current={currentStep} />
                <Content data={steps} current={currentStep} />

                {currentStep === 'bookingInformation' && (
                  <Controller>
                    {
                      data.firstName !== '' && data.lastName !== '' && data.email !== '' && data.phone !== '' && (
                        <Fade>
                          <Button className='btn mb-3 justify-content-center w-100 py-3' type='button' isBlock isPrimary hasShadow onClick={nextStep}>
                            Continue to Book
                          </Button>
                        </Fade>
                      )
                    }

                    <Button className='btn justify-content-center w-100 py-3' type='link' isBlock isLight href={`/details/${item._id}`}>
                      Cancel
                    </Button>
                  </Controller>
                )}

                {currentStep === 'payment' && (
                  <Controller>
                    {
                      data.proofPayment !== '' && data.bankName !== '' && data.bankHolder !== '' && (
                        <Fade>
                          <Button className='btn mb-3 justify-content-center w-100 py-3' type='button' isBlock isPrimary hasShadow onClick={() => this.onSubmit(nextStep)}>
                              Continue to Book
                          </Button>
                        </Fade>
                      )
                    }

                    <Button className='btn justify-content-center w-100 py-3' type='link' isBlock isLight href={`/details/${item._id}`}>
                      Cancel
                    </Button>
                  </Controller>
                )}

                {currentStep === 'completed' && (
                  <Controller>
                    <Button className='btn justify-content-center w-100 py-3' type='link' isBlock isPrimary hasShadow href='/'>
                      Back to Home
                    </Button>
                  </Controller>
                )}
              </>
            )
          }
        </Stepper>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  checkout: state.checkout,
  item: state.detail.detailPage
})

export default connect(mapStateToProps, { submitBooking })(Checkout)