import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import ReactPlayer from "react-player";
import Navbar from "./Navbar";
import {Link} from 'react-router-dom'

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
    this.getInfo();
  }

  async getInfo() {
    const mediaId = this.props.match.params.mediaId;

    let {data: media} = await axios.get(`/api/media/${mediaId}`)
    
    const userId = media.creator[0]

    axios.get(`/api/users/${userId}`).then(res => {
      this.setState({ 
        media,
        creator: res.data
      })
    })
  }

  delete = () => {
    console.log("deleted");
    axios.delete(`/api/media/${this.props.match.params.mediaId}`).then(() => {
      this.props.history.push("/media");
    });
  };

  render() {
    let { media, creator } = this.state;

    return (
      <div>
        <Navbar />
        <div className="mediaShow-container">
          <h1>{media.title}</h1>

          <ReactPlayer url={media.url} />

          <h3>Description</h3>
          <p>{media.description}</p>
          <p>{!creator ? 'Cannot find user.' : creator.gamertag}</p>
            {/* <Link to={`/users/${creator._id}`}>Back to {creator.gamertag}'s Page</Link> */}
          <button onClick={this.delete}>Delete video</button>
        </div>
      </div>
    );
  }
}

export default MediaShow;
