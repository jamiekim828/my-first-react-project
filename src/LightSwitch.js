import React, { Component } from 'react'

export default class LightSwitch extends Component {
    state = { active: true }
  
    toggle = () => {
        this.setState({
          active: !this.state.active
        })
    }

    render() {
      return (
      <div>
        <p>
            {this.props.user} is  
            <b>{ this.state.active ? ' ' : ' not' }
            </b> present
        </p>
        <button onClick={this.toggle}>Toggle</button>
      </div>
      )
    }
  }