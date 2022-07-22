import React from 'react'
import Button from 'components/atom/Button'
import { Fade } from 'react-reveal'

export default function MostPicked(props) {
  return (
    <section id='most-picked' className='mt-5' ref={props.refMostPicked}>
      <Fade bottom>
        <div className="container">
          <h3 className='title text-gray-900 font-weight-bold lh-base'>
            Most Picked
          </h3>

          <div className='container-grid mt-4'>
            {props.data.map( (item, index) => {
              return (
                <div key={`grid-${index}`} className={`item column-4 ${index === 0 ? 'row-2' : 'row-1'}`}>
                  <Fade bottom delay={100 * index}>
                    <div className="card card-featured">
                      <div className="tag position-absolute top-0 end-0 text-white">
                        ${item.price}
                        <span className="fw-light">per ${item.unit}</span>
                      </div>

                      <figure className="img-wrapper">
                        <img src={item.images[0] ? `${process.env.REACT_APP_HOST_ASSETS}/categories/${item.images[0].imageUrl}` : ''} alt={item.title} className="img-cover" />
                      </figure>

                      <div className="meta-wrapper">
                        <Button type='link' href={`/details/${item._id}`} className='stretched-link d-block text-white'>
                          <h5>{item.title}</h5>
                        </Button>

                        <span>
                          {item.city}, {item.country}
                        </span>
                      </div>
                    </div>
                  </Fade>
                </div>
              )
            })}
          </div>
        </div>
      </Fade>
    </section>
  )
}
