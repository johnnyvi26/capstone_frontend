import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <Link to="/">
                <div className='home'>Home</div>
            </Link>
            <Link to="/create-artists">
                <div className='create-artists'> Create a New Artist</div>
            </Link>
            <Link to="/login">
                <div className='login'>login</div>
            </Link>
        </div>
    )
}

export default Navbar;