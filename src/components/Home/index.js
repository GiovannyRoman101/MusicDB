import React, { Component} from 'react'
import axios from 'axios'
import Banner from '../Home/banner'
import ArtistList from './artistList'

const URL_ARTISTS = "http://localhost:3004/artists"
class Home extends Component{
    state = {
        artists:''
    }

    componentDidMount(){
        axios.get(URL_ARTISTS).then(response =>{
            this.setState({artists:response.data})
        })
    }

    render(){
        return (
        <>
        <Banner/>
        <ArtistList allArtists = {this.state.artists}/>
        
        </>
        )
    }
}
export default Home