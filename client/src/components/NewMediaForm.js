import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import Navbar from "./Navbar";

class NewMediaForm extends Component {
  state = {
    title: "",
    description: "",
    url: ""
  };

  handleNew = event => {
    event.preventDefault();
    axios
      .post(`/api/media`, this.state)
      .then(res => {
        this.props.history.push(`/media/${res.data._id}`);
      });
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <Navbar />
        <h1>Post a new video clip</h1>
        <h4>Please fill out all input areas:</h4>
        <form onSubmit={this.handleNew}>
          <div>
            <label htmlFor="title">Title: </label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="description">Description: </label>
            <input
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="url">URL: </label>
            <input
              type="text"
              name="url"
              value={this.state.url}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Add Video</button>
        </form>
      </div>
    );
  }
}

export default NewMediaForm;
