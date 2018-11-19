import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

class NewMediaForm extends Component {
  state = {
      user: {
        media: [{}],
        newMedia: {}
      }
  };

  handleNew = event => {
    event.preventDefault();
    axios.post(`/api/users/${this.props.match.params.userId}`, this.state.user.newMedia).then(res => {
      this.props.history.push(`/users/${this.props.match.params.userId}/${res.data._id}`);
    });
  };

  render() {
    return (
      <div>
        <h1>Post a new video clip</h1>
        <h4>Please fill out all input areas:</h4>
        <form onSubmit={this.handleNew}>
          <div>
            <label htmlFor="title">Title: </label>
            <input type="text" name="title" />
          </div>
          <div>
            <label htmlFor="description">Description: </label>
            <input type="text" name="description" />
          </div>
          <div>
            <label htmlFor="url">URL: </label>
            <input type="text" name="url" />
          </div>
          <button type="submit">Add Video</button>
        </form>
      </div>
    );
  }
}

export default NewMediaForm;
