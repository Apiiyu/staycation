import React from 'react'
import { Fade } from 'react-reveal'
import { InputText } from 'components/atom/Form'

export default function BookingInformation(props) {
  const { data, ItemDetails, checkout} = props

  return (
    <Fade>
      <div className="container mb-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-lg-5 border-2 border-end border-light py-5 card-booking-information">
            <Fade delay={300}>
              <div className="card border-0">
                <figure className="img-wrapper" style={{ height: 270 }}>
                  <img src={`${process.env.REACT_APP_HOST_ASSETS}/items/${ItemDetails.images[0].imageUrl}`} alt={ItemDetails._id} className="img-cover" />
                </figure>

                <div className="row align-items-center">
                  <div className="col-12 col-lg">
                    <div className="meta-wrapper">
                      <h5>{ItemDetails.title}</h5>
                      <span className="text-muted">
                        {ItemDetails.city}, {ItemDetails.country}
                      </span>
                    </div>
                  </div>

                  <div className="col-12 col-lg-auto">
                    <span className='text-primary'>
                      ${checkout.duration * ItemDetails.price} USD
                      <span className="text-muted"> per </span>
                      ${checkout.duration} {ItemDetails.unit}
                      {+checkout.duration > 1 ? 's' : ''}
                    </span>
                  </div>
                </div>
              </div>
            </Fade>
          </div>

          <div className="col-12 col-lg-5 py-lg-5 card-form">
            <Fade delay={600}>
              <label htmlFor="firstName">First Name</label>
              <InputText id="firstName" name='firstName' value={data.firstName} onChange={props.onChange} />

              <label htmlFor="lastName">Last Name</label>
              <InputText id="lastName" name='lastName' value={data.lastName} onChange={props.onChange} />

              <label htmlFor="email">Email Address</label>
              <InputText id="email" name='email' type='email' value={data.email} onChange={props.onChange} />
            
              <label htmlFor="phone">Phone Number</label>
              <InputText id="phone" name='phone' type='tel' value={data.phone} onChange={props.onChange} />
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  )
}
