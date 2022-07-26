import React from 'react'
import { useSelector } from 'react-redux'
import { Fade } from 'react-reveal'

export default function FeaturedImages() {
  const data = useSelector((state) => state.detail.detailPage)
  const images = data?.images || []

  return (
    <section className="container">
      <div className="container-grid sm">
        {images.map((item, index) => {
          return (
            <div 
              key={`featured-images-${index}`} 
              className={`item ${index > 0 ? 'column-5' : 'column-7'} ${index > 0 ? 'row-1' : 'row-2'}`}>
              <Fade bottom delay={100 * index}>
                <div className="card h-100">
                  <figure className="img-wrapper">
                    <img src={`${process.env.REACT_APP_HOST_ASSETS}/items/${item.imageUrl}`} alt={item._id} className="img-cover" />
                  </figure>
                </div>
              </Fade>
            </div>
          )
        })}
      </div>
    </section>
  )
}
