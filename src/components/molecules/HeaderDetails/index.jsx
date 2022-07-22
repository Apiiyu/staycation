import React from 'react'
import { Fade } from 'react-reveal'
import Breadcrumb from 'components/atom/Breadcrumb'

export default function HeaderDetails(props) {
  const { data, breadcrumb } = props

  return (
    <section className="container spacing-sm mt-5">
      <Fade bottom>
        <div className="row align-items-center">
          <div className="col">
            <Breadcrumb data={breadcrumb} />
          </div>

          <div className="col-auto text-center">
            <h1 className="h2">{data.title}</h1>
            <span className="text-muted">
              {data.city}, {data.country}
            </span>
          </div>

          <div className="col"></div>
        </div>
      </Fade>
    </section>
  )
}
