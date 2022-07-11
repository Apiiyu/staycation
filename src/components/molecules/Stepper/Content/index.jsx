import React from 'react'
import { Fade } from 'react-reveal'

export default function Content(props) {
  const { data, current } = props

  return (
    <Fade>
      {data[current] && data[current].content}
    </Fade>
  )
}
