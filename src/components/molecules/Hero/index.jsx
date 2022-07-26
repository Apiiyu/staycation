import React from 'react'

import imgHero from 'assets/images/banner.png'
import iconTraveler from 'assets/icons/icon-traveler.svg'
import iconCamera from 'assets/icons/icon-camera.svg'
import iconCity from 'assets/icons/icon-city.svg'
import Button from 'components/atom/Button'
import NumberFormat from 'react-number-format'
import { Fade } from 'react-reveal'

export default function Hero(props) {
  const showMostPicked = () => {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth"
    })
  }

  return (
    <Fade bottom>
      <section id='hero'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-6'>
              <div className="trigger-text">
                <h1 className='heading text-gray-900 font-weight-bold'>
                  Forget Busy Work,
                  Start Next Vacation
                </h1>
                <p className='description text-gray-600 fw-light mt-3'>
                  We provide what you need to enjoy 
                  your holiday with family. Time to make another 
                  memorable moments
                </p>
              </div>

              <Button isPrimary type='button' className='btn btn-cta px-5 py-3 mt-4' hasShadow onClick={showMostPicked}>Show Me Now</Button>

              <div className='d-flex mt-5'>
                <div className='box-data'>
                  <div className='text-left'>
                    <img src={iconTraveler} alt="icon" />
                    <p className='text-primary mt-2'> 
                      <NumberFormat value={props.data.hero.travelers} displayType="text" thousandSeparator="," decimalSeparator="."/>
                      <span className='ms-2 text-muted fw-light'>Traveler</span>
                    </p>
                  </div>
                </div>

                <div className='box-data mx-5'>
                  <div className='text-left'>
                    <img src={iconCamera} alt="icon" />
                    <p className='text-primary mt-2'>
                      <NumberFormat value={props.data.hero.treasures} displayType="text" thousandSeparator="," decimalSeparator="."/>
                      <span className='ms-2 text-muted fw-light'>Treasure</span>
                    </p>
                  </div>
                </div>

                <div className='box-data'>
                  <div className='text-left'>
                    <img src={iconCity} alt="icon" />
                    <p className='text-primary mt-2'>
                      <NumberFormat value={props.data.hero.cities} displayType="text" thousandSeparator="," decimalSeparator="."/> 
                      <span className='ms-2 text-muted fw-light'>Cities</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
      
            <div className='d-none d-sm-block col-md-6'>
              <div className='box-img position-relative left-0'>
                <img src={imgHero} className="w-100" alt="banner" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  )
}
