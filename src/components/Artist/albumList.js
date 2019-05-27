import React from 'react'

function AlbumList({albums}){
    console.log(albums)
    function showList(albums) {
        return albums ? albums.map((item,index) =>(
            <img key = {index} alt = "" src = {`/images/albums/${item.cover}.jpg`}/>
        ))
        :null
    }
    return (
        <div className = "albums_list">
            {showList(albums)}
        </div>
    )
}

export default AlbumList