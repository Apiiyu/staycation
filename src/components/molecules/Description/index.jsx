import React from 'react'
import ReactHtmlParser from 'react-html-parser'

export default function Description(props) {
  const { data } = props

  return (
    <main>
      <h2 className='mb-4'>About the place</h2>
      {ReactHtmlParser(data.description)}

      <div className="row mt-5">
        {data.features.map((feature, index) => {
          return (
            <div key={`feature-${index}`} className="col-3 mt-5">
              <img src={`${process.env.REACT_APP_HOST_ASSETS}/features/${feature.imageUrl}`} alt={feature.name} className="d-block mb-2" width={38} />
              <span>{feature.qty}</span>
              <span className="text-muted fw-light ms-1 capitalize text-capitalize">{feature.name}</span>
            </div>
          )
        })}
      </div>
    </main>
  )
}
