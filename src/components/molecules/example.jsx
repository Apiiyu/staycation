import React, { Component } from 'react'
import InputNumber from 'components/atom/Form/InputNumber'

export default class Example extends Component {
  state = {
    value: '1'
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <div className="container">
        <div className="row-align-items-center justify-content-center" style={{ height: `100vh` }}>
          <div className="col-auto">
            <InputNumber max={30} suffix=" Night" isSuffixPlural={true} onChange={this.handleChange} name="value" value={this.state.value} />
          </div>
        </div>
      </div>
    )
  }
}

