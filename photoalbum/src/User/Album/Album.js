import React from 'react';
import { NavLink } from 'react-router-dom'
import Gallery from './Gallery/Gallery';

const Album = ({ albums, userId, photos }) => {
    let countInAlbum
    return (
        <>
            <div className="album">
                <h3>Albums:</h3>
                {albums.map(album => {
                    countInAlbum = 0;
                    let albumCover = '';
                    if (album.userId === userId) {
                        photos.map((photo) => {
                            if (album.id === photo.albumId) {
                                countInAlbum++;
                                albumCover=photo.thumbnailUrl;
                            }
                        })
                        return <p><NavLink style={{display:"flex",alignItems:"center"}} to={"/" + userId + "/" + album.id} key={album.id}>
                            <img src={albumCover} />{album.title}
                        </NavLink> Количество фото: {countInAlbum}</p>
                    }
                }
                )}
            </div>
            <div className="gallery">
                <Gallery photos={photos} albums={albums} userId={userId} count={countInAlbum} />
            </div>
        </>
    );
}

export default Album;
