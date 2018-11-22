import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import Navbar from "./Navbar";

const UserStyles = styled.div`
  h1 {
    text-align: center;
    font-size: 35px;
    text-decoration: underline;
  }
  em {
    font-weight: bolder;
    padding-right: 10px;
  }
  .user-detail-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 3px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 25px;
  }
  .user-details {
    width: 60vw;
  }
  button {
    font-size: 17px;
    padding: 5px 10px;
    color: white;
    background: navy;
    margin: 15px;
  }
  .delete-button {
    background: red;
  }
  .save-button {
    background: green;
  }
  a {
    text-decoration: none;
    color: white;
    background: navy;
    font-size: 15px;
    padding: 10px 15px;
    margin: 10px;
  }
  .media-player {
    margin: 15px 20px 15px 30px;
  }
  .user-media-containers {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .user-media-single {
    text-align: center;
    padding: 20px 5px;
    margin-bottom: 5px;
    border: 3px solid lightgray;
  }
`;

class UserShow extends Component {
  state = {
    user: {
      media: []
    },
    toggleNew: false
  };

  componentDidMount() {
    // Make an api call to get one single user
    const userId = this.props.match.params.userId;
    axios.get(`/api/users/${userId}`).then(res => {
      this.setState({ user: res.data });
    });
  }

  // Function for toggle on the input field
  toggleNewForm = () => {
    this.setState({
      toggleNew: !this.state.toggleNew
    });
  };

  handleUpdate = event => {
    event.preventDefault();
    axios
      .patch(`/api/users/${this.props.match.params.userId}`, this.state.user)
      .then(res => {
        this.props.history.push(`/users/${res.data._id}`);
        console.log("user updated");
      });
  };

  handleChange = event => {
    var updatedUser = { ...this.state.user };
    updatedUser[event.target.name] = event.target.value;
    this.setState({ user: updatedUser });
  };

  deleteUser = () => {
    console.log("deleted");
    axios.delete(`/api/users/${this.state.user._id}`).then(() => {
      this.props.history.push("/login");
    });
  };

  render() {
    return (
      <div>
        <Navbar />
        <UserStyles>
          <div>
            <h1>{this.state.user.gamertag}</h1>
          </div>
          <div className="user-detail-container">
            <img
              src="https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjn07_d_uPeAhXP3VMKHTmgAlAQjRx6BAgBEAU&url=https%3A%2F%2Fwww.kisspng.com%2Ffree%2Frocket-league.html&psig=AOvVaw1Tdb02D-jymwDIIlWLfT9m&ust=1542838166639727"
              alt="rl-icon"
              width="10vw"
            />
            <div className="user-details">
              <h3>
                <em>Name: </em>
                {this.state.user.name}
              </h3>
              <p>
                <em>Info: </em>
                {this.state.user.info}
              </p>
            </div>
          </div>
          <div className="add-new-media">
            <Link to={`/users/${this.state.user._id}/newMedia`}>
              Add New Media
            </Link>
          </div>
          <div>
            <h3>Media: </h3>
            <div className="user-media-containers">
              {this.state.user.media.map(media => (
                <div key={media._id} className='user-media-single'>
                  <Link to={`/media/${media._id}`}>{media.title}</Link>
                  <div className="media-player">
                    <ReactPlayer url={media.url} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="edit-functions">
            <span>
              <button className="hide-button" onClick={this.toggleNewForm}>
                {/* ternary for the button to display either Hide or Create New Creature */}
                {this.state.toggleNew ? "Hide" : "Edit Profile"}
              </button>
            </span>

            {/* ternary operator for the form to be shown or not */}
            {this.state.toggleNew ? (
              <form onSubmit={this.handleUpdate}>
                <div>
                  <label htmlFor="gamertag">Gamertag: </label>
                  <input
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.user.gamertag}
                    name="gamertag"
                  />
                </div>
                <div>
                  <label htmlFor="name">Name: </label>
                  <input
                    onChange={this.handleChange}
                    value={this.state.user.name}
                    type="text"
                    name="name"
                  />
                </div>
                <div>
                  <label htmlFor="email">Email: </label>
                  <input
                    type="text"
                    name="email"
                    value={this.state.user.email}
                    onChange={this.handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="info">Info: </label>
                  <input
                    onChange={this.handleChange}
                    value={this.state.user.info}
                    type="text"
                    name="info"
                  />
                </div>
                <button type="submit" className="save-button">
                  Save Profile
                </button>
              </form>
            ) : null}
          </div>
          <button onClick={this.deleteUser} className="delete-button">
            Delete This User
          </button>
        </UserStyles>
      </div>
    );
  }
}

export default UserShow;
