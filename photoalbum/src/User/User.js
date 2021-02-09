import React from 'react';
import { Route } from 'react-router-dom'
import Album from './Album/Album';

const User = ({users}) => {
    const [albums, setAlbums] = React.useState([])
    const [photos, setPhotos] = React.useState([])
    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums').then(res => res.json()).then(data => setAlbums(data))
        fetch('https://jsonplaceholder.typicode.com/photos').then(res => res.json()).then(data => setPhotos(data))
    },[])
    return (
            <div className="albums">       
                {users.map((user) => <Route path={"/"+user.id} render={(props) => <Album  userId={user.id} albums={albums} photos={photos} />} key={user.id}  />)}
            </div>
    );
}

export default User;
