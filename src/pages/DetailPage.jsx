import Header from "components/organisms/Header"
import HeaderDetails from "components/molecules/HeaderDetails"
import FeaturedImages from "components/molecules/FeaturedImages"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import Description from "components/molecules/Description"
import BookingForm from "components/molecules/BookingForm"
import Activities from "components/molecules/Activities"
import Testimonials from "components/organisms/Testimonials"
import Footer from "components/organisms/Footer"
import { Fade } from "react-reveal"
import { useEffect, useCallback } from "react"
import { fetchDetailPage } from "store/actions/detail"

export default function DetailPage() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const data = useSelector((state) => state.detail.detailPage)
  const breadcrumb = [
    {
      pageTitle: 'Home',
      pageHref: '/'
    },
    {
      pageTitle: 'House Details',
      pageHref: ''
    }
  ]

  const fetchAPI = useCallback(async (id) => {
     const response = await dispatch(fetchDetailPage(`/detail/${id}`, 'detailPage'))

     document.title = `Staycation | ${response.title}`
  }, [dispatch])

  useEffect(() => {
    window.scroll(0, 0)

    fetchAPI(id)    
  }, [fetchAPI, id])


  return (
    <>
      <Header />
      <HeaderDetails breadcrumb={breadcrumb} data={data} />
      <FeaturedImages data={data.images} />
      <section className="container">
          <div className="row">
            <div className="col-12 col-lg-7 pr-5">
              <Fade bottom>
                <Description data={data} />
              </Fade>
            </div>

            <div className="col-12 col-lg-5">
              <Fade bottom>
                <BookingForm/>
              </Fade>
            </div>
          </div>
        </section>
        <Activities data={data.activities} />
        <Testimonials data={data.testimonial}/>
        <Footer />
    </>
  )
}
