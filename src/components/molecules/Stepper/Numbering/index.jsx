import React from 'react'
import { Fade } from 'react-reveal'
import propTypes from 'prop-types'
import './index.scss'

export default function Numbering(props) {
  const { style, classNames, data, current } = props 
  const keysOfData = Object.keys(data)
  
  return (
    <Fade>
      <ol className={['stepper d-flex justify-content-center align-items-center m-0 p-0 mt-5 mb-4', classNames].join(' ')} style={style}>
        {keysOfData.map((list, index) => {
          let isActive = list === current ? 'active' : ''

          if (index + 1 === keysOfData.length) {
            isActive = ''
            return null
          }

          return (
            <li key={`list-${index}`} className={['d-flex justify-content-center align-items-center position-relative text-white' ,isActive].join(' ')}>
              {index + 1}
            </li>
          )
        })}
      </ol>
    </Fade>
  )
}

Numbering.propTypes = {
  classNames: propTypes.string,
  data: propTypes.object,
  current: propTypes.string
}
