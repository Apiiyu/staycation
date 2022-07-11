import React from 'react'
import Button from 'components/atom/Button'
import { Fade } from 'react-reveal'

export default function Categories(props) {
  const { data } = props
  
  return data.map((categories, firstIndex) => {
    return (
      <section id="categories" key={firstIndex}> 
        <Fade bottom delay={100 * firstIndex}>
          <div className="container">
            <h4 className="mb-3 fw-medium">
              {categories.name}
            </h4>

            <div className="container-grid">
              { 
                categories.items.length === 0 ? 
                  <div className="row">
                    <div className="col-auto align-items-center">
                      There is no property at this category
                    </div>
                  </div>
                : 
                categories.items.map((item, secondIndex) => {
                  return (
                    <div className="item column-3 row-1" key={secondIndex}>
                      <Fade bottom delay={300 * secondIndex}>
                        <div className="card border-0" >
                          {
                            item.isPopular ? 
                              <div className="tag position-absolute top-0 end-0 text-white">
                                Popular <span className="fw-light">Choice</span>
                              </div>
                            : ''
                          }

                          <figure className="img-wrapper" style={{ height: 180 }}>
                            <img src={item.imageUrl} alt={item.name} className="img-cover" />
                          </figure>

                          <div className="meta-wrapper">
                            <Button type='link' href={`/details/${item._id}`} className="stretched-link d-block text-gray-900">
                              <h5 className="h4 text-gray-900">{item.name}</h5>
                            </Button>

                            <span className="text-muted fw-light">
                              {item.city}, {item.country}
                            </span>
                          </div>
                        </div>

                      </Fade>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </Fade>
      </section>
    )
  })
}
