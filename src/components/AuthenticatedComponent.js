import React, { Component } from 'react'

export default class AuthenticatedComponent extends Component {
  constructor(props){
    super(props);

    this.state = {
      user: undefined
    }
  }

  

  render() {
    return (
      <div>
        hello
      </div>
    )
  }
}
