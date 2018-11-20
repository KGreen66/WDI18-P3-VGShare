import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import Navbar from './Navbar';

class GamePage extends Component{
    state = {
        games: []
    }

    componentDidMount(){
        axios.get('/api/games').then((res) => {
            this.setState({games: res.data})
        })
    }

    render(){
        return(
            <div>
                <Navbar />
            <div className='game-container'>
                {this.state.games.map(game => (
                    <div key={game._id}>
                        <Link to={`/games/${game._id}`}> {game.title} </Link>
                    </div>
                ))}
            </div>
            </div>
        )
    }
}

export default GamePage