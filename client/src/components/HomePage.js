import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HomeStyle = styled.div`
  background-image: url("https://i.imgur.com/M9OBlKQ.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 10vh;
    color: whitesmoke;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px;
    border-radius: 20px;
  }

  a {
    color: white;
    text-decoration: none;
    font-size: 25px;
    font-weight: bold;
    letter-spacing: 2px;
    padding: 10px;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.7);
  }

  .welcome-links {
    display: flex;
    width: 60vw;
    flex-direction: row;
    justify-content: space-around;
  }
`;

class HomePage extends Component {
  state = {
    background: [
      "https://imgur.com/M9OBlKQ",
      "https://imgur.com/JmbAjYg",
      "https://imgur.com/xLMO8al",
      "https://imgur.com/9kDgt2J",
      "https://imgur.com/0BHCK8b"
    ]
  };

  componentDidMount() {
    // have a function set up to set the home page background to a random img from the state.background array
  }

  render() {
    return (
      <HomeStyle>
        <div className="welcome-title">
          <h1>Welcome to Gamer-Gram!</h1>
        </div>
        <div className="welcome-links">
          <Link to="/login" className='login'>Sign-in/Sign-up</Link>

          <Link to="/media" className='browse'>Browse All Media</Link>
        </div>
      </HomeStyle>
    );
  }
}

export default HomePage;
