import React from 'react'
import propTypes from 'prop-types'
import './index.scss'

export default function InputNumber(props) {
  const { value, placeholder, name, min, max, prefix, suffix, isSuffixPlural} = props

  const onChange = (event) => {
    let value = String(event.target.value)

    if (+value <= max && +value >= min) {
      props.onChange({
        target: {
          name,
          value: +value
        }
      })
    } 
  }

  const minus = () => {
    value > min && onChange({
      target: {
        name,
        value: +value - 1
      }
    })
  }

  const plus = () => {
    value < max && onChange({
      target: {
        name,
        value: +value + 1
      }
    })
  }
  return (
    <div className={['input-number mb-3', props.className].join(' ')}>
      <div className="input-group white">
        <div className="input-group-prepend">
          <span className="input-group-text d-flex justify-content-center border-0 text-white p-0 minus" onClick={minus}>
            -
          </span>
        </div>
        <input 
          min={min} 
          max={max} 
          name={name}
          readOnly 
          placeholder={placeholder ? placeholder : '0'} 
          value={`${prefix}${value}${suffix}${isSuffixPlural && value > 1 ?'s' : ''}`} 
          onChange={onChange} 
          className="form-control border-0 rounder-0 text-center" 
        />

        <div className="input-group-append">
          <span className="input-group-text plus d-flex justify-content-center border-0 text-white p-0" onClick={plus}>
            +
          </span>
        </div>
      </div>

    </div>
  )
}

InputNumber.defaultProps = {
  min: 1,
  max: 1,
  prefix: '',
  suffix: ''
}

InputNumber.propTypes = {
  value: propTypes.oneOfType([propTypes.string, propTypes.number]),
  onChange: propTypes.func,
  isSuffixPlural: propTypes.bool,
  placeholder: propTypes.string,
  className: propTypes.string
}
