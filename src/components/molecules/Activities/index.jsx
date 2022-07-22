import React from 'react'
import Button from 'components/atom/Button'
import { Fade } from 'react-reveal'

export default function Activities(props) {
  const { data } = props

  return (
    <section id="activities"> 
        <Fade bottom delay={100}>
          <div className="container">
            <h4 className="mb-3 fw-medium">
              Activities
            </h4>

            <div className="container-grid">
              {data.map((activities, index) => {
                return ( 
                  <div className="item column-3 row-1">
                    <Fade bottom delay={300 * index}>
                      <div className="card border-0" >
                        {
                          index === 2 ? 
                            <div className="tag position-absolute top-0 end-0 text-white">
                              Popular <span className="fw-light">Choice</span>
                            </div>
                          : ''
                        }

                        <figure className="img-wrapper" style={{ height: 180 }}>
                          <img src={activities.imageUrl ? `${process.env.REACT_APP_HOST_ASSETS}/activities/${activities.imageUrl}` : ''} alt={activities.name} className="img-cover" />
                        </figure>

                        <div className="meta-wrapper">
                          <Button type='link' href={`/details/${activities._id}`} className="stretched-link d-block text-gray-900">
                            <h5 className="h4 text-gray-900">{activities.name}</h5>
                          </Button>

                          <span className="text-muted fw-light">
                            {activities.type}
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
}
