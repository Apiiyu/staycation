import React from 'react'
import { Fade } from 'react-reveal'
import { InputText, InputFile } from 'components/atom/Form'
import logoBca from 'assets/icons/logo-bca.svg'
import logoMandiri from 'assets/icons/logo-mandiri.svg'


export default function Payment(props) {
  const { data, ItemDetails, checkout } = props
  const tax = 10
  const subTotal = ItemDetails.price * checkout.duration
  const total = (subTotal * tax) / 100 + subTotal

  return (
    <Fade>
      <div className="container mb-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-5 border-2 border-end border-light py-5" style={{ paddingRight: 80 }}>
            <Fade delay={300}>
              <p className="mb-4">Payment Information</p>
              <p>Tax: {tax}</p>
              <p>Sub total: ${subTotal} USD</p>
              <p>Total: ${total} USD</p>

              <div className="row mt-4">
                <div className="col-3 text-right">
                  <img src={logoBca} alt="bca" width={60} />
                </div>

                <div className="col">
                  <dl>
                    <dd>Bank Central Asia</dd>
                    <dd>2208 1996</dd>
                    <dd>Staycation.Inc</dd>
                  </dl>
                </div>
              </div>

              <div className="row">
                <div className="col-3 text-right">
                  <img src={logoMandiri} alt="mandiri" />
                </div>

                <div className="col">
                  <dl>
                    <dd>Bank Mandiri</dd>
                    <dd>2208 1996</dd>
                    <dd>Staycation.Inc</dd>
                  </dl>
                </div>
              </div>
            </Fade>
          </div>

          <div className="col-5" style={{ paddingLeft: 80 }}>
            <Fade delay={600}>
              <label htmlFor="proofPayment">Upload Proof of Payment</label>
              <InputFile accept='image/*' id="proofPayment" name='proofPayment' value={data.proofPayment} onChange={props.onChange} />

              <label htmlFor="bankName">Bank Name</label>
              <InputText id='bankName' name='bankName' type='text' value={data.bankName} onChange={props.onChange} />

              <label htmlFor="bankHolder">Bank Holder</label>
              <InputText id='bankHolder' name='bankHolder' type='text' value={data.bankHolder} onChange={props.onChange} />
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  )
}
