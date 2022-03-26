import React from 'react';

export default function NavBar() {
    return(
        <>
        <nav className="nav">
            <a className="nav-link active" aria-current="page" href="#">PokeTypeRacer</a>
            <a className="nav-link" href="#">Link</a>
            <a className="nav-link" href="#">Link</a>
        </nav>
        </>
    );
}