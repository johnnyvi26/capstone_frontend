import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';

function Home(props) {
    // state to hold data
    // const params = useParams();
    // const id = params.id

    // const artists = 
    // console.log(props.artists)


    function loaded() {
        return (
            <div className='artistsss'>

            {props.artists.map(artist =>(
                <div key={artist.id} className="artists-home">
                    <Link to={`/artists/${artist.id}`}><h1>{artist.name}</h1></Link>
                    <h3>{artist.nationality}</h3>
                    <img src={artist.photo_url} />
                </div>
        ))}
            </div>
        )
    }

    function loading() {
        return <h1>Loading...</h1>
    }
    return props.artists ? loaded() : loading();
}

export default Home;