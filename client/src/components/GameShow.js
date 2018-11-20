import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import ReactPlayer from 'react-player'
import Navbar from "./Navbar";

class GameShow extends Component {
  state = {
    game: {
      title: '',
      description: '',
      typeOfGame: '',
      media: []
    }
  }

  async componentDidMount() {
    const gameId = this.props.match.params.gameId;
    let {data: game} = await axios.get(`/api/games/${gameId}`)
    const mediaId = game.media[0]
    axios.get(`/api/media/${mediaId}`).then(res => {
        this.setState({
            game,
            media: res.data
        })
    })
  }

  deleteGame(){
    console.log("deleted");
    let gameId = this.props.match.params.gameId
    axios.delete(`/api/games/${gameId}`).then(() => {
      this.props.history.push("/games")
    })
  }

  render() {
    let { game, media } = this.state;

    return (
      <div>
        <Navbar />
        <div>
          <h1>{game.title}</h1>
          <h3>Description: </h3>
          <p>{game.description}</p>
          <h4>Genre: </h4>
          <p>{game.typeOfGame}</p>
        </div>
        <div>
          {/* {media.map(media => (
            <div>
              <Link to={`/media/${media._id}`}>
                <h2>{media.title}</h2>
              </Link>
              <ReactPlayer url={media.url} />
            </div>
          ))} */}
        </div>
        <div>
          <button onClick={this.deleteGame}>Delete This Game</button>
        </div>
      </div>
    );
  }
}

export default GameShow;
