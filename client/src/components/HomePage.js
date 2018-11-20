import React, { Component } from "react"
import styled from "styled-components"
import {Link} from 'react-router-dom'

class HomePage extends Component {
    state = {
        background: [
            "https://imgur.com/M9OBlKQ",
            "https://imgur.com/JmbAjYg",
            "https://imgur.com/xLMO8al",
            "https://imgur.com/9kDgt2J",
            "https://imgur.com/0BHCK8b"
        ]
    }

    componentDidMount(){
        // have a function set up to set the home page background to a random img from the state.background array
    }

  render() {
    return (
      <div>
        <h1>Welcome to Gamer-Gram!</h1>
        <div>
            <Link to='/login'>Sign-in/Sign-up</Link>
        </div>
        <div>
            <Link to='/media'>Browse All Media</Link>
        </div>
      </div>
    );
  }
}

export default HomePage;
