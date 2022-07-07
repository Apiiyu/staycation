import React from 'react'
import Button from 'components/atom/Button'
import BrandIcon from 'components/atom/BrandIcon'


export default function Header(props) {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? 'active' : ''
  }

  return (
    <header className='spacing-sm' data-aos="fade-up" data-aos-duration="1000">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <BrandIcon />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav m-auto">
              <li className={`nav-item ${getNavLinkClass('/')}`}>
                <Button className='nav-link' type='link' href=''>
                  Home
                </Button>
              </li>

              <li className={`nav-item ${getNavLinkClass('/browse-by')}`}>
                <Button className='nav-link' type='link' href='/browse-by'>
                  Browse By
                </Button>
              </li>
              
              <li className={`nav-item ${getNavLinkClass('/stories')} position-relative top-0 left-0 z-3`}>
                <Button className='nav-link' type='link' href='/stories'>
                  Stories
                </Button>
              </li>

              <li className={`nav-item ${getNavLinkClass('/agents')} position-relative top-0 left-0 z-3`}>
                <Button className='nav-link' type='link' href='/agents'>
                  Agents
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
