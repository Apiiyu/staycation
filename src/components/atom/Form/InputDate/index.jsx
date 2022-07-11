import React, { useEffect, useRef, useState } from 'react'
import propTypes from 'prop-types'
import { DateRange } from 'react-date-range'
import './index.scss'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import formatDate from 'utils/formatDate'
import iconCalendar from 'assets/icons/icon-calendar.svg'

export default function InputDate(props) {
  const { value, placeholder, name } = props
  const [isShowed, setIsShowed] = useState(false)

  const datePickerChange = (value) => {
    const target = {
      target: {
        value: value.selection,
        name
      }
    }

    props.onChange(target)
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside) // --> if DOM is rendered like livecycle mounted vuejs

    return () => { // --> Cycle unmounted
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  const refDate = useRef(null)
  const handleClickOutside = (event) => {
    if (refDate && !refDate.current.contains(event.target)) {
      setIsShowed(false)
    }
  }

  const check = (focus) => {
    focus.indexOf(1) < 0 && setIsShowed(false)
  }

  const displayDate = `${value.startDate ? formatDate(value.startDate) : ''} ${value.endDate ? ' - ' + formatDate(value.endDate) : ''}`

  return (
    <div ref={refDate} className={['input-date mb-3', props.classNames].join(' ')}>
      <div className="input-group">
        <div className="input-group-prepend bg-gray-900">
          <span className="input-group-text border-0 p-0 d-flex justify-content-center position-absolute">
            <img src={iconCalendar} alt="icon-calendar" />
          </span>
        </div>

        <input 
          type="text" 
          className="form-control border-0 rounded-0 shadow-none bg-gray-100 text-center justify-content-center" 
          readOnly
          value={displayDate}
          placeholder={placeholder}
          onClick={() => setIsShowed(!isShowed)}
        />

          {isShowed && (
            <div className="date-range-wrapper">
              <DateRange 
                editableDateInputs={true}
                onChange={datePickerChange}
                moveRangeOnFirstSelection={false}
                onRangeFocusChange={check}
                ranges={[value]}
              />
            </div>
          )}
      </div>
    </div>
  )
}

InputDate.propTypes = {
  value: propTypes.object,
  onChange: propTypes.func,
  placeholder: propTypes.string,
  classNames: propTypes.string
}
