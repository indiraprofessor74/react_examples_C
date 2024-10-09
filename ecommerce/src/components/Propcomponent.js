import React, { Component } from 'react'

export default class Propcomponent extends Component {
  render() {
    return (
      <div>
        <h3>And now I am teaching in {this.props.section}</h3>
      </div>
    )
  }
}
