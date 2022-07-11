import React from 'react'
import { Fade } from 'react-reveal'

export default function Meta(props) {
  const { data, current } = props

  return (
    <Fade delay={300}>
      <div className="text-center mb-5">
        <h1 className="h2">{data[current] && data[current].title}</h1>
          <p className="lead text-muted">
            {data[current] && data[current].description}
          </p>
      </div>
    </Fade>
  )
}
