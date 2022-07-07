import React from 'react'
import Button from 'components/atom/Button'

export default function MostPicked(props) {
  return (
    <section id='most-picked' className='mt-5' ref={props.refMostPicked}>
      <div className="container">
        <h3 className='title text-gray-900 font-weight-bold lh-base'>
          Most Picked
        </h3>

        <div className='container-grid mt-4'>
          {props.data.map( (item, index) => {
            return (
              <div key={index} className={`item column-4 ${index === 0 ? 'row-2' : 'row-1'}`}>
                <div className="card card-featured">
                  <div className="tag position-absolute top-0 end-0 text-white">
                    ${item.price}
                    <span className="fw-light">per ${item.unit}</span>
                  </div>

                  <figure className="img-wrapper">
                    <img src={item.imageUrl} alt={item.name} className="img-cover" />
                  </figure>

                  <div className="meta-wrapper">
                    <Button type='link' href={`/properties/${item._id}`} className='streched-link d-block text-white'>
                      <h5>{item.name}</h5>
                    </Button>

                    <span>
                      {item.city}, {item.country}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
