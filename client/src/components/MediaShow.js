import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import ReactPlayer from "react-player";
import Navbar from "./Navbar";

class MediaShow extends Component {
  state = {
    media: {
      title: "",
      url: "",
      description: "",
      creator: {
        gamertag: "",
        name: "",
        info: ""
      },
      game: {}
    }
  };
  componentDidMount() {
    const mediaId = this.props.match.params.mediaId;
    axios.get(`/api/media/${mediaId}`).then(res => {
      this.setState({ media: res.data });
    });
    const userId = this.state.media.creator._id;
    axios.get(`/api/users/${userId}`).then(res => {
      this.setState({ creator: res.data });
    });
  }

  delete = () => {
    console.log("deleted");
    axios.delete(`/api/media/${this.state.media._id}`).then(() => {
      this.props.history.push("/media");
    });
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="mediaShow-container">
          <h1>{this.state.media.title}</h1>

          <ReactPlayer url={this.state.media.url} />

          <h3>Description</h3>
          <p>{this.state.media.description}</p>
          {/* <p>{this.state.media.creator.gamertag}</p> */}
          <button onClick={this.delete}>Delete video</button>
        </div>
      </div>
    );
  }
}

export default MediaShow;
