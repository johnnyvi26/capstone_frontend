import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Artist from '../pages/Artist';
import CreateArtists from '../pages/CreateArtist';
import CreateArtist from '../pages/CreateArtist';
import EditArtist from '../pages/EditArtist';
import Home from '../pages/Home';

const Main = () => {
    const [artists, setArtists] = useState(null);

    const [sounds, setSounds] = useState(null);

    // useEffect(() =>{
    //     async function getData(){
    //         try{
    //             const artists = await fetch('http://localhost:8000/artists/')
    //             .then(Response => Response.json())
    //             setArtists(artists);
    //         } catch(error){
        //             console.log(error)
        //         }
        //     }
        //     getData();
        // }, []);
        
    const URL = 'http://127.0.0.1:8000/';
        
    const getArtists = async () => {
        const response = await fetch(`${URL}artists/`);
        const data = await response.json();
        setArtists(data);
    };

    console.log(artists)
        
    const getSounds = async () => {
        const response = await fetch(`${URL}sounds/`);
        const data = await response.json();
        setSounds(data);
    };

    const createArtist = async (artist) => {
        // make post request to create game
        await fetch(`${URL}artists/`, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(artist),
        });
        // update list of game
        getArtists();
    };
    

    const updateArtist = async (artist, id) => {
        // make a PUT request to create artist
        await fetch(URL + id, {
            method: "PUT",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(artist),
        });
        // update list of artists
        getArtists();
    };

    const deleteArtist = async id => {
        // make a delete request to create Artist
        await fetch(`${URL}artists/` + id, {
            method: "DELETE",
        });
        // update list of As
        getArtists();
    };


    
    useEffect(() => getArtists(), []);
    useEffect(() => getSounds(), []);
    

    return (
        <div className='Main'>
            <Routes>
                <Route path='/' element={<Home artists={artists} />} />
                <Route path='/artists/:id' element={ <Artist artists={artists} /> } />
                <Route path='/edit-artist/:id' element={<EditArtist artists={artists} updateArtist={updateArtist} deleteArtist={deleteArtist} />} />
                <Route path='/create-artists' element={<CreateArtists artists={artists} createArtist={createArtist} />} />
            </Routes>
        </div>
    )
}

export default Main;