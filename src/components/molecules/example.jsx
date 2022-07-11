import React, { Component } from 'react'
import Breadcrumb from 'components/atom/Breadcrumb'

export default class Example extends Component {
  state = {
    value: [
      {
        pageTitle: 'Home',
        pageHref: '/',
      },
      {
        pageTitle: 'House Details',
        pageHref: '/details'
      }
    ]
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <div className="container">
        <div className="row-align-items-center justify-content-center" style={{ height: `100vh` }}>
          <div className="col-auto">
            <Breadcrumb data={this.state.value} />
          </div>
        </div>
      </div>
    )
  }
}

