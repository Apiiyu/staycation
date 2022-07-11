import React from 'react'
import propTypes from 'prop-types'
import './index.scss'
import { useState } from 'react'


export default function InputText(props) {
  const { value, type, placeholder, name, prepend, append, outerClassName, inputClassName, errorResponse } = props
  const [hasError, setHasError] = useState(null)
  let pattern = ''

  if (type === "email") pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (type === "tel") pattern = "[0-9]*";

  const onChange = (event) => {
    const target = {
      target: {
        name,
        value: event.target.value
      }
    }

    if (type === 'email') {
      if (!pattern.test(event.target.value)) setHasError(errorResponse);
      else setHasError(null);
    }

    if (type === 'tel') {
      if (event.target.validity.valid) props.onChange(target)
    } else {
      props.onChange(target)
    }
  }

  return (
    <div className={['input-text position-relative mb-3', outerClassName].join(' ')}>
      <div className="input-group bg-white">
        {prepend && (
          <div className="input-group-prepend bg-gray-900">
            <span className="input-group-text d-flex justify-content-center position-absolute border-0 text-white p-0">{prepend}</span>
          </div>
        )}

        <input 
          name={name}
          type={type}
          pattern={pattern}
          className={['form-control border-0 shadow-none  ', inputClassName].join(' ')}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />

        {append && (
          <div className="input-group-append bg-gray-900">
            <span className="input-group-text d-flex justify-content-center position-absolute border-0 text-white p-0">{append}</span>
          </div>
        )}
      </div>

      {hasError && <span className='error-helper position-absolute bg-danger text-white'>{hasError}</span>}
    </div>
  )
}

InputText.defaultProps = {
  type: 'text',
  pattern: '',
  placeholder: 'Please type here...',
  errorResponse: 'Please match the requested format.',
}

InputText.propTypes = {
  name: propTypes.string.isRequired,
  value: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
  onChange: propTypes.func.isRequired,
  prepend: propTypes.oneOfType([propTypes.number, propTypes.string]),
  append: propTypes.oneOfType([propTypes.number, propTypes.string]),
  type: propTypes.string,
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
  inputClassName: propTypes.string
}