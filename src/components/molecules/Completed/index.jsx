import React from 'react'
import { Fade } from 'react-reveal'
import CompletedIllustration from 'assets/icons/completed-illustration.svg'

export default function Completed() {
  return (
    <Fade>
      <div className="container mb-5">
        <div className="row justify-content-center text-center">
          <div className="col-12 col-lg-4">
            <img src={CompletedIllustration} alt="illustration" className="img-fluid" />

            <p className="text-muted">
              We will inform you via email later once the transaction has been accepted
            </p>
          </div>
        </div>
      </div>
    </Fade>
  )
}
