import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {AuthContext} from "../../../context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const logout = event => {
        event.preventDefault()
        setIsAuth(false)
    }

    return (
        <div className={'navbar'}>
            <div className="navbar__links">
                <Link to="/">Home</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/about">About</Link>
                {isAuth
                    ?
                    <a href='#' onClick={logout}>Logout</a>
                    :
                    <Link to="/login">Login</Link>
                }

            </div>
        </div>
    );
};

export default Navbar;