import React, { useRef } from 'react'
import propTypes from 'prop-types'
import './index.scss'

export default function InputFile(props) {
  const { value, placeholder, name, prepend, append, outerClassName, inputClassName } = props
  const refInputFile = useRef(null)  

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
          type='file'
          ref={refInputFile}
          className='d-none'
          value={value}
          onChange={props.onChange}
        />

        <input
          onClick={() => refInputFile.current.click()}
          defaultValue={value}
          placeholder={placeholder}
          className={['form-control border-0 shadow-none', inputClassName].join(' ')}
        />

        {append && (
          <div className="input-group-append bg-gray-900">
            <span className="input-group-text d-flex justify-content-center position-absolute border-0 text-white p-0">{append}</span>
          </div>
        )}
      </div>
    </div>
  )
}

InputFile.defaultProps = {
  placeholder: 'Browse a file...',
}

InputFile.propTypes = {
  name: propTypes.string.isRequired,
  accept: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  prepend: propTypes.oneOfType([propTypes.number, propTypes.string]),
  append: propTypes.oneOfType([propTypes.number, propTypes.string]),
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
  inputClassName: propTypes.string
}