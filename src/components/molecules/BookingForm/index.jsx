import Button from 'components/atom/Button'
import { InputDate, InputNumber } from 'components/atom/Form'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { checkoutBooking } from 'store/actions/checkout'

export default function BookingForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const itemDetails = useSelector((state) => state.detail.detailPage)
  const [data, setData] = useState({
    duration: 1,
    date: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  })

  const updateData = (event) => {
    let startDate, endDate, duration

    if (event.target.name === 'duration') {
      startDate = new Date(data.date.startDate);
      endDate = new Date(data.date.startDate)
      endDate.setDate(startDate.getDate() + +event.target.value)
      endDate = new Date(endDate)

      duration = endDate.getDate() - startDate.getDate()
      setData((prevData) => ({
        ...prevData,
        date: {
          ...prevData.date,
          startDate,
          endDate
        },
        duration
      }))
    } else if (event.target.name === 'date') {
      startDate = new Date(event.target.value.startDate);
      endDate = new Date(event.target.value.endDate);
      duration = new Date(endDate - startDate).getDate()
    }
    
    setData((prevData) => ({
      ...prevData,
      date: {
        ...prevData.date,
        startDate,
        endDate
      },
      duration
    }))
  }

  const onBooking = () => {
    dispatch(checkoutBooking({
      _id: itemDetails._id,
      duration: data.duration,
      date: {
        startDate: data.date.startDate,
        endDate: data.date.endDate
      }
    }))

    navigate('/checkout')
  }

    return (
      <div className='card bordered card-booking'>
        <h4 className="mb-3">Start Booking</h4>
        <h5 className="h2 text-teal mb-4">
          ${itemDetails.price}{' '}

          <span className="text-muted fw-light">
            per {itemDetails.unit}
          </span>
        </h5>

        <label htmlFor="duration" className='mb-2'>How long you will stay?</label>
        <InputNumber 
          max={30} 
          suffix={' Night'} 
          isSuffixPlural={true} 
          onChange={updateData} 
          name="duration" 
          value={data.duration} 
        />

        <label htmlFor="date" className='mb-2'>Pick a Date</label>
        <InputDate  
          onChange={updateData}
          name="date"
          value={data.date}
        />

        <h6 className="text-muted fw-light mb-5">
          You will pay {' '}
          <span className="text-primary fw-normal">
            ${itemDetails.price * data.duration} USD
          </span>{' '}
          per{' '}

          <span className="text-primary fw-normal">
            {data.duration} {itemDetails.unit}
          </span>
        </h6>


        <Button
         type='button' className='btn btn-cta justify-content-center py-3' hasShadow isPrimary isBlock onClick={onBooking}>
          Continue to Book
        </Button>
      </div>
    )
}
