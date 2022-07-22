import React from 'react';
import propTypes from 'prop-types';
import './index.scss'

export default function Star (props) {
  const { className, value, height, width, spacing} = props
  const decimals = Number(value) % 1
  const stars = []
  let leftPos = 0

  for (let index = 0; index < 5 && index < value - decimals; index++) {
    leftPos += width
    
    stars.push(
      <div className="star" key={`star-${index}`} style={{ left: index * width, height: height, width: width, marginRight: spacing }}></div>
    )
  }

  if (decimals > 0 && value <= 5) {
    stars.push(
      <div className="star" style={{ left: leftPos, height: height, width: decimals * width - spacing }}></div>
    )
  }

  const starPlaceholder = []
  for (let index = 0; index < 5; index++) {
    
    stars.push(
      <div className="star placeholder" key={index} style={{ left: index * width, width: width, marginRight: spacing }}></div>
    )
  }

  return (
    <>
      <div className={['stars', className].join('')} style={{ height: height }}>
        {starPlaceholder}
        {stars}
      </div>
    </>
  )
}

Star.propTypes = {
  className: propTypes.string,
  value: propTypes.number,
  width: propTypes.number,
  height: propTypes.number,
  spacing: propTypes.number
}
