import React from 'react'
import propTypes from 'prop-types'
import Button from '../Button'

export default function Breadcrumb(props) {
  const { data } = props
  const classNames = ["breadcrumb", props.classNames];


  return (
    <nav aria-label='breacrumb'>
      <ol className={classNames.join(" ")}>
        {data.map((item, index) => {
          return (
            <li key={index} className={`breadcrumb-item ${index === data.length - 1 ? 'active' : ''}`}>
              { index === data.length - 1 ? (
                item.pageTitle
              ) : (
                <Button type='link' href={item.pageHref}>{item.pageTitle}</Button>
              )
            }
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

Breadcrumb.propTypes = {
  data: propTypes.array,
  classNames: propTypes.string
}
