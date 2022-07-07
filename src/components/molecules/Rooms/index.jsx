import React from 'react'

import LivingRoom from 'assets/images/living-room.jpg'
import FamilyRoom from 'assets/images/family-room.jpg'
import BedRoom from 'assets/images/bedroom.jpg'
import Decoration from 'assets/images/decoration.jpg'
import { Fade } from 'react-reveal'

export default function Rooms() {
  return (
    <Fade bottom>
      <section id='rooms' className='mt-5'>
        <div className='container'>
          <h3 className='title text-gray-900 font-weight-bold lh-base'>
            Browse The Room <br/>
            That We Designed For You
          </h3>
          <div className='row mt-4'>
            <div className='col-5'>
              <Fade bottom delay={300}>
                <div className='row'>
                  <div className='col-12'>
                    <div className='img-living-room position-relative top-0 left-0'>
                      <img src={LivingRoom} alt="livingroom" className='position-absolute top-0 left-0 w-100 h-100' />
                      
                      <div className='box-information text-center position-absolute'>
                        <h6 className='text-gray-900 font-weight-bold'>
                          Living Room
                        </h6>

                        <p className='fw-light text-gray-900'>648 Items</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>

              <Fade bottom delay={600}>
                <div className='row mt-3'>
                  <div className='col-12'>
                    <div className='img-family-room position-relative top-0 left-0'>
                      <img src={FamilyRoom} alt="familyroom" className='position-absolute top-0 left-0 w-100 h-100' />
                    
                      <div className='box-information text-center position-absolute'>
                        <h6 className='text-gray-900 font-weight-bold'>
                          Family Room
                        </h6>

                        <p className='fw-light text-gray-900'>342 Items</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>

            <Fade bottom delay={800}>
              <div className='col-3'>
                <div className='box-img position-relative top-0 left-0 h-100'>
                  <img src={Decoration} alt="familyroom" className='position-absolute top-0 left-0 w-100 h-100' />
                
                  <div className='box-second-information text-center position-absolute'>
                    <h6 className='text-gray-900 font-weight-bold'>
                      Decoration
                    </h6>

                    <p className='fw-light text-gray-900'>152 Items</p>
                  </div>
                </div>
              </div>
            </Fade>

            <Fade bottom delay={1000}>
              <div className='col-4'>
                <div className='box-img position-relative top-0 left-0 h-100'>
                  <img src={BedRoom} alt="familyroom" className='position-absolute top-0 left-0 w-100 h-100' />
                
                  <div className='box-third-information text-center position-absolute'>
                    <h6 className='text-gray-900 font-weight-bold'>
                      Bedrooms
                    </h6>

                    <p className='fw-light text-gray-900'>729 Items</p>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </Fade>
  )
}
