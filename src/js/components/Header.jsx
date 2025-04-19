import React from 'react';
import "../css/Header.css";
const Header = () => {
    return (
        <div className="card mx-5 p-3 bg-dark-subtle" id="Header-position">
            <div className="card-body">
                <h1 className="card-title fw-normal">Welcome to the Fairy Court</h1>
                <p className="card-text">Step into Titania’s enchanted realm, where Oberon reigns, fairies dance, and the forest breathes magic. Here, the night is alive with mischief and moonlight, and every breeze carries a whispered spell. Let the dream begin.</p>
                <a href="https://www.sparknotes.com/shakespeare/msnd/character/titania/" className="btn btn-primary">Who?</a>
            </div>
        </div>
    );
};

export default Header;