// Write your code here

import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  change = () => {
    const value = Math.random() * 10
    const approx = Math.ceil(value)
    this.setState(prevState => ({count: prevState.count + approx}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          Count <span>{count}</span>
        </h1>
        <p className="para">Count is {count % 2 === 0 ? 'Even' : 'Odd'}</p>
        <button className="btn" type="button" onClick={this.change}>
          Increment
        </button>
        <p>Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
