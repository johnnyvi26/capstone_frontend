import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function EditArtist(props) {
    //for redirecting
    let navigate = useNavigate()

    const params = useParams();
    const id = params.id;

    const artists = props.artists;
    const artist = artists.find(p => p.id == id)

    // state form
    const [editForm, setEditForm] = useState(artist);

    // handleChange function for form
    const handleChange = event => {
        setEditForm({ ...editForm, [event.target.name]: event.target.value });
    }

    // handlesubmit for form
    const handleSubmit = event => {
        event.preventDefault();
        props.updateArtist(editForm, artist.id);
        // redirect back to artist
        navigate(`/`);
    }

    // handle deleteArtist
    const removeArtist = () => {
        props.deleteArtist(artist.id);
        navigate('/');
    }

    return (
        <div className="Artist">
            <button id="delete" onClick={removeArtist}>
                DELETE
            </button>
            <h1>{artist.name}</h1>
            <img src={artist.photo_url} alt={artist.name} />
            <h2>{artist.nationality}</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={editForm.name}
                    name="name"
                    placeholder="name"
                    onChange={handleChange}
                /><br />
                <input
                    type="text"
                    value={editForm.photo_url}
                    name="photo_url"
                    placeholder="photo_url"
                    onChange={handleChange}
                /><br />
                <input
                    type="text"
                    value={editForm.nationality}
                    name="Nationalitly"
                    placeholder="Nationalitly"
                    onChange={handleChange}
                /><br />
                <input type="submit" value="Update Artist" />
            </form>
        </div>
    )
}

export default EditArtist;