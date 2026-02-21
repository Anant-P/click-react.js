// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  increaseClick = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg">
        <h1 className="main-heading">
          The Button has been clicked <span>{count}</span> times
        </h1>
        <p className="para">Click the button to increase the count!</p>
        <button className="button" type="button" onClick={this.increaseClick}>
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
