import React from 'react'
import { Fade } from 'react-reveal'
import Breadcrumb from 'components/atom/Breadcrumb'
import { useSelector } from 'react-redux'

export default function HeaderDetails(props) {
  const { breadcrumb } = props
  const data = useSelector((state) => state.detail.detailPage)

  return (
    <section className="container spacing-sm mt-5">
      <Fade bottom>
        <div className="row align-items-center">
          <div className="col-12 col-lg">
            <Breadcrumb data={breadcrumb} />
          </div>

          <div className="col-12 col-lg text-center">
            <h1 className="h2">{data.title}</h1>
            <span className="text-muted">
              {data.city}, {data.country}
            </span>
          </div>

          <div className="col-12 col-lg"></div>
        </div>
      </Fade>
    </section>
  )
}
