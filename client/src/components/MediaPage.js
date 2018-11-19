import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

class MediaPage extends Component {
  state = {
    media: [{
      title: '',
      description: '',
      url: '',
      creator: {},
      game: {}
    }]
  };
  componentDidMount() {
    axios.get("/api/media").then(res => {
      this.setState({ media: res.data });
      console.log(this.state.media.data);
    });
  }

  render() {
    return (
      <div>
        <h1>Media Home Page</h1>
        <div className="media-main-container">
          {this.state.media.map(media => (
            <div key={media._id} className="media-page-containers">
              <div className='media-main'>
                <h2>{media.title}</h2>
                <ReactPlayer url={media.url} />
              </div>
              <div className='media-details'>
                <h3>{media.creator.gamertag}</h3>
                <h3>{media.game.title}</h3>
                <h4>{media.description}</h4>               
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default MediaPage;
