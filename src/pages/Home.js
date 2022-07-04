import React, { Component } from 'react'
import Header from 'components/organisms/Header/Header'

export default class Home extends Component{
  render() {
    console.log()
    return (
      <>
        <Header {...this.props}/>
      </>
    )
  }
}
