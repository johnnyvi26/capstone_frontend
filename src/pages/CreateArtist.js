import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function CreateArtists(props) {
    let navigate = useNavigate()

    // state to hold formData
    const [newForm, setNewForm] = useState({
        name: "",
        photo_url: "",
        nationality: "",
    });

    // handleChange Function for form
    const handleChange = (event) => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value });
    };

    // handle submit function for form
    const handleSubmit = (event) => {
        event.preventDefault();
        props.createArtist(newForm);
        setNewForm({
            name: "",
            photo_url: "",
            nationality: "",
        });
        console.log(newForm)
        navigate('/')
    };

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newForm.name}
                    name="name"
                    placeholder="name"
                    onChange={handleChange}
                /><br />
                <input
                    type="text"
                    value={newForm.photo_url}
                    name="photo_url"
                    placeholder="photo_url"
                    onChange={handleChange}
                /><br />
                <input
                    type="text"
                    value={newForm.nationality}
                    name="nationality"
                    placeholder="nationality"
                    onChange={handleChange}
                /><br />
                <input type="submit" value="Create Artists" />
            </form>
        </section>
    );
}

export default CreateArtists;