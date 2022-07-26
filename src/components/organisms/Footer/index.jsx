import React from 'react'
import Button from 'components/atom/Button'
import BrandIcon from 'components/atom/BrandIcon'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col">
            <BrandIcon />
            <p className="brand-tagline text-muted">
              We kaboom your beauty holiday instantly and memorable.
            </p>
          </div>

          <div className="col-12 col-lg-2 mt-3 mt-md-0 me-lg-5">
            <h6 className="mt-2 fw-medium text-primary">For Beginners</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item mt-lg-3">
                <Button type='link' href='/register' className='text-muted'>New Account</Button>
              </li>

              <li className="list-group-item">
                <Button type='link' href='/details' className='text-muted'>Start Booking a Room</Button>
              </li>

              <li className="list-group-item">
                <Button type='link' href='/payments' className='text-muted'>Use payments</Button>
              </li>
            </ul>
          </div>

          <div className="col-12 col-lg-2 mt-4 mt-md-0 me-lg-5">
            <h6 className="mt-2 fw-medium text-primary">Explore Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item mt-lg-3">
                <Button type='link' href='/register' className='text-muted'>Our Careers</Button>
              </li>

              <li className="list-group-item">
                <Button type='link' href='/details' className='text-muted'>Privacy</Button>
              </li>

              <li className="list-group-item">
                <Button type='link' href='/payments' className='text-muted'>Terms & Condition</Button>
              </li>
            </ul>
          </div>

          <div className="col-12 col-lg-4 mt-4 mt-md-0 me-lg-5">
            <h6 className="mt-2 fw-medium text-primary">Connect Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item mt-lg-3">
                <Button isExternal type='link' href='mailto:khoirulloh.rafi2@gmail.com' className='text-muted'>khoirulloh.rafi2@gmail.com</Button>
              </li>

              <li className="list-group-item">
                <Button isExternal type='link' href='tel:+6282120806320' className='text-muted'>0821 - 2080 - 6320</Button>
              </li>

              <li className="list-group-item">
                <span className="fw-light text-muted">
                  Staycation, Jl. Babakan Jati, Bandung.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col text-center copyright text-muted">
            Copyright 2022 • All rights reserved • Staycation
          </div>
        </div>
      </div>
    </footer>
  )
}
