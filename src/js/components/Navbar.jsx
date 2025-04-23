import React from "react";

const Navbar = () => {

    return (
        <nav className="navbar fixed-top navbar-expand-md bg-secondary px-5">
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fworldofeletale.fandom.com%2Fwiki%2FTitania&psig=AOvVaw1dFdTamGZnmrwzVqErICz9&ust=1745175753405000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJCy0rjk5IwDFQAAAAAdAAAAABAE#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse position-relative" id="navbarNavDropdown">
                    <div className="position-absolute end-0 ">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light-subtle text-light" href="https://www.opensourceshakespeare.org/views/plays/characters/charlines.php?CharID=Titania&WorkID=midsummer&cues=1">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">Y otro</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </nav >
    );
};
export default Navbar;