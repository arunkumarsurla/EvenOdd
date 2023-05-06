import React from 'react'
import './index.css'

class EvenOdd extends React.Component{
    state = {count: 0}

  

    getRandomNumber() {
        return Math.ceil(Math.random() * 1000)
      }



    onIncrement = () => {
        const {count} = this.state
        const randomNumber = this.getRandomNumber()
        this.setState({count: count + randomNumber})
      }

      render() {
        const {count} = this.state
        const displayText = count % 2 === 0 ? 'Even' : 'Odd'
    
        return (
          <div className="app-container">
            <div className="count-container">
              <h1 className="count">Count <span>{count}</span></h1>
              <p className="number-category">Count is <span>{displayText}</span></p>
              <button
                type="button"
                className="increment-button"
                onClick={this.onIncrement}
              >
                Increment
              </button>
              <p className="note">*Increase By Random Number Between 0 to 100</p>
            </div>
          </div>
        )
      }
    }
export default EvenOdd