import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import ReactPlayer from 'react-player'

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
    })
  }

  handleUpdate = (event) => {
    event.preventDefault()
    axios.patch(`/api/users/${this.props.match.params.userId}`, this.state.user).then(res => {
        this.props.history.push(`/users/${res.data._id}`) 
        console.log('user updated')   
    })
  }

  handleChange = (event) => {
    var updatedUser = {...this.state.user}
    updatedUser[event.target.name] = event.target.value
    this.setState({user: updatedUser})
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
            <Link to={`/users/${this.state.user._id}/newMedia`}>Add New Media</Link>
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
        <div className='user-media-containers'>
                {this.state.user.media.map(media => (
                    <div key={media._id}>
                        <Link to={`/media/${media._id}`} >{media.title}</Link>
                        <ReactPlayer url={media.url} />
                    </div>
                ))}
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
