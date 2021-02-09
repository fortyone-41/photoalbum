import React from 'react';
import Photo from './Photo/Photo';
import {Route} from 'react-router-dom'

const Gallery = ({ photos, albums, userId}) => {
    return (
        <>
        <h3>Gallery:</h3>
            {albums.map((album) => <Route path={"/" + userId + "/" + album.id} render={(props) => <Photo photos={photos} albumId={album.id} /> } key={album.id} />)}
        </>
    );
}

export default Gallery;
