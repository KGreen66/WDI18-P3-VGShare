import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import {Link} from 'react-router-dom'

class MediaPage extends Component {
    state = {
        media: [],
    }
  componentDidMount() {
    axios.get("/api/media").then(res => {
      this.setState({ media: res.data });
      console.log(this.state.media.data)
    });
  }

  render() {
    return (
      <div>
        <h1>Media Home Page</h1>

        {this.state.media.map((media) => (
          <div key={media._id}>
            <Link to={`/media/${media._id}`}>{media.title}</Link>
          </div>
        ))}
      </div>
    );
  }
}

export default MediaPage;
