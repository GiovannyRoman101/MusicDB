import React, { Component} from 'react'
import axios from 'axios'
import AlbumList from './albumList'

const ARTIST_URL = 'http://localhost:3004/artists'

class Artist extends Component{

    state = {
        artist:''
    }

    componentDidMount(){
        axios.get(`${ARTIST_URL}/${this.props.match.params.id}`).then(response =>{
            this.setState({artist: response.data})
        })
    }

    render(){
        const artist = this.state.artist
        return (
            <>
            <div className = "artist_bio">
                <div className = "avatar">
                    <span style = {{background:`url('/images/covers/${artist.cover}.jpg') no-repeat`}}></span>
                </div>
                <div className = "bios">
                    <h3>{artist.name}</h3>
                    <div className = "bios_text">{artist.bio}</div>
                </div>
                <AlbumList albums = {artist.albums}/>
            </div>
            </>
        )
    }
}

export default Artist