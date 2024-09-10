import React, { Component } from 'react'
import { useState } from 'react'

export default class App extends Component 
{
  state = 
  {
    subject: "Full Stact Development",
    section: "Section C"
  }
  render() {
    return (
      <div>{this.state.subject} class in {this.state.section} </div>
    )
  }
}

