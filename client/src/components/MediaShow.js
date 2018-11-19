import React, {Component} from 'react'
import styled from 'styled-components'
import axios from 'axios'

class MediaShow extends Component{
    state = {
        media: {
            title: '',
            url: '',
            description: '',
            creator: {},
            game: {},
        }
    }
    componentDidMount(){
        const mediaId = this.props.match.params.mediaId
        axios.get(`/api/media/${mediaId}`).then((res) => {
            this.setState({media: res.data})
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.media.title}</h1>

                {/* embed video here */}

                <h3>Description</h3>
                <p>{this.state.media.description}</p>
            </div>
        )
    }
}

export default MediaShow