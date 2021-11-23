import { useState } from "react";
import { Link, useParams } from 'react-router-dom';

function Artist(props){
    const params = useParams();
    const id = params.id;

    const artists = props.artists;
    const artist = artists.find(p => p.id == id)

    return(
        <div className="artist">
            <h1>{artist.name}</h1>
            <Link to={`/edit-artist/${id}`}>edit</Link>
            <img src={artist.image} alt={artist.name} />
            <h2>{artist.nationality}</h2>
            {artist.sounds.map(sound=>(
                <ul>
                    <li>{sound}</li>
                </ul>
            ))}

        </div>
    )
}

export default Artist;