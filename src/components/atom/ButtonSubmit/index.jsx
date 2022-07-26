import React from 'react'
import Button from '../Button'
import { useDispatch } from 'react-redux'
import { checkoutBooking } from 'store/actions/checkout'
import { useNavigate } from 'react-router-dom'

function ButtonSubmit(props) {
  const { data, itemDetails } = props
  const dispatch = useDispatch()
  const navigate = useNavigate()

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
    <Button type='button' className='btn btn-cta justify-content-center py-3' hasShadow isPrimary isBlock onClick={onBooking}>
        Continue to Book
    </Button>
  )
}

export default ButtonSubmit