import React from "react"
import { Link } from "react-router-dom"

function ArtistsList(props) {
    function List({ allArtists }) {
        return allArtists ?
            allArtists.map(item => (
                <Link to = {`/artist/${item.id}`} key = {item.id} className = "artist_item" 
                    style = {{background:`url('/images/covers/${item.cover}.jpg') no-repeat`}}>
                    <div>{item.name}</div>
                </Link>
            ))
        :null
    }

    return (
        <div className="artists_list">
            <h4>Browse the Artists</h4>
            <div className="artist_container">{List(props)}</div>
        </div>
    )
}

export default ArtistsList
