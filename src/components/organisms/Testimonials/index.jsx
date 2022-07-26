import React from 'react'
import Star from 'components/atom/Star'
import frameTestimonial from 'assets/images/frame.jpg'
import Button from 'components/atom/Button'
import { Fade } from 'react-reveal'

export default function Testimonials(props) {
  const { data } = props

  return (
    <Fade bottom>
      <section className="testimonial container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-auto" style={{ marginRight: 60 }}>
            <div className="testimonial-hero mt-lg-5 ml-lg-5">
              <img src={`${process.env.REACT_APP_HOST_ASSETS}/testimonials/${data.imageUrl}`} alt="testimonials" className="position-absolute" style={{ borderRadius: `20px 20px 100px 20px`, zIndex: 2 }}/>
              <img src={frameTestimonial} alt="testimonials" className="position-absolute" style={{ margin: `-40px 0 0 -40px`, zIndex: 1 }}/>
            </div>
          </div>

          <div className="col">
            <h4 style={{ marginBottom: 40 }}>{data.name}</h4>
            <Star value={data.rate} width={35} height={35} spacing={7} />
            <h5 className="h2 fw-light line-height-2 my-3">
              {data.content}
            </h5>
            <span className="fw-medium text-muted">
              {data.familyName}, {data.familyOccupation}
            </span>

            <div className="">
              <Button className='btn px-5 py-3 mt-5' hasShadow isPrimary type='link' href={`/testimonial/${data._id}`}>
                Read Their Story
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  )
}
