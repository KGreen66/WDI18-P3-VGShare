import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

class UserShow extends Component {
  state = {
    user: {},
    newUser: {
        gamertag: '',
        name: '',
        info: ''
    },
    toggleNew: true
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
    })
  }

  handleUpdate = (event) => {
    event.preventDefault()
    //Make post to our api to create new user
    axios.patch(`/api/users/${this.state.user._id}`, this.state.newUser).then(res => {
        this.props.history.push(`/users/${res.data._id}`)    
    })
    //When we get that data back, we need to navigate to the new users page
  }

  handleChange = (event) => {
    var updatedNewUser = {...this.state.newUser}
    updatedNewUser[event.target.name] = event.target.value
    this.setState({newUser: updatedNewUser})
    }

    deleteUser = () => {
        console.log('deleted')
        axios.delete(`/api/users/${this.state.user._id}`).then(() => {
            this.props.history.push('/login')
        })
    }

  render() {
    return (
      <div>
        <div>
          <h1>{this.state.user.gamertag}</h1>
        </div>
        <div>
          <h3>
            <em>Name: </em>
            {this.state.user.name}
          </h3>
          <p>
            <em>Info: </em>
            {this.state.user.info}
          </p>
        </div>
        {/* <div>
                {this.state.media.map(media => (
                    <div key={media._id}>
                        <Link to={`/media/${media._id}`} >{media.title}</Link>
                    </div>
                ))}
                </div> */}
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
                <label htmlFor="info">Info: </label>
                <input
                  onChange={this.handleChange}
                  value={this.state.user.info}
                  type="text"
                  name="info"
                />
              </div>
              <button type="submit">Save Profile</button>
            </form>
          ) : null}
        </div>
        <button onClick={this.deleteUser}>Delete This User</button>
      </div>
    );
  }
}

export default UserShow;
