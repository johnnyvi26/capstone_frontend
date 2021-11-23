import { useState } from "react";
import { Link, useParams } from 'react-router-dom';

function Artist(props){
    const params = useParams();
    const id = parseInt(params.id);

    const artists = props.artists;
    const artist = artists.find(p => p.id === id)

    const sounds = props.sounds.filter(sound=> sound.artist_id == id);

    return(
        <div className="artist-show">

            <h1>Artist</h1>
            <h2>{artist.name}</h2>
            <Link to={`/edit-artist/${id}`}>EDIT</Link><br/>
            <img src={artist.photo_url} alt={artist.name} />
            <h3>{artist.nationality}</h3>
            <h1>All Sounds by This Artist</h1>
            {sounds.map(sound =>(
                <ul>
                    <li>{sound.title} -- {sound.album}</li>
                </ul>
            ))}

        </div>
    )
}

export default Artist;