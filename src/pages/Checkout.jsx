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
import ItemDetails from 'json/itemDetails.json'
import Button from 'components/atom/Button'
import { Fade } from 'react-reveal'

export default class Checkout extends Component {
  state = {
    data: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      proofPayment: '',
      bankName: '',
      bankHolder: ''
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

  render() {
    const { data } = this.state
    const checkout = {
      duration: 3
    }
    const steps = {
      bookingInformation: {
        title: 'Booking Information',
        description: 'Please fill up the blank fields below',
        content: (
          <BookingInformation data={data} checkout={checkout} ItemDetails={ItemDetails} onChange={this.onChange} />
        )
      },

      payment: {
        title: 'Payment',
        description: 'Kindly follow the instruction below',
        content: (
          <Payment data={data} ItemDetails={ItemDetails} checkout={checkout} onChange={this.onChange} />
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

                    <Button className='btn justify-content-center w-100 py-3' type='link' isBlock isLight href={`/details/${ItemDetails._id}`}>
                      Cancel
                    </Button>
                  </Controller>
                )}

                {currentStep === 'payment' && (
                  <Controller>
                    {
                      data.proofPayment !== '' && data.bankName !== '' && data.bankHolder !== '' && (
                        <Fade>
                          <Button className='btn mb-3 justify-content-center w-100 py-3' type='button' isBlock isPrimary hasShadow onClick={nextStep}>
                              Continue to Book
                          </Button>
                        </Fade>
                      )
                    }

                    <Button className='btn justify-content-center w-100 py-3' type='link' isBlock isLight href={`/details/${ItemDetails._id}`}>
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
