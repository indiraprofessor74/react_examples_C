import React, { Component } from 'react'
import Propcomponent from './components/Propcomponent'
export default class App extends Component {
    state = 
    {
    tName: "Sudha",
    subject:"AIML",
    section: "Section C"
    }
  render() {
    return (
      <div>
        Hi I am {this.state.tName} I am teaching {this.state.subject}
      <Propcomponent section = {this.state.section} />
      </div>
    )
  }
}
