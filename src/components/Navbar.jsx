import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">EDMITRA</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Categories</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Courses
                            </a>
                            <ul className="dropdown-menu">
                                <li className="dropdown-header">Category 1</li>
                                <li><a className="dropdown-item" href="#">Course 1</a></li>
                                <li><a className="dropdown-item" href="#">Course 2</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li className="dropdown-header">Category 2</li>
                                <li><a className="dropdown-item" href="#">Course 1</a></li>
                                <li><a className="dropdown-item" href="#">Course 2</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Pages
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">About Us</a></li>
                                <li><a className="dropdown-item" href="#">Contact Us</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Other Pages</a></li>
                            </ul>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                        </li> */}
                    </ul>
                    <form className="d-flex" role="search">
                        <div className="dropdown">
                            <button
                                className="btn btn-outline-dark dropdown-toggle"
                                type="button"
                                id="categoryDropdown"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                <i className="bi bi-ui-checks-grid"></i> Select Category
                            </button>
                            <div className="dropdown-menu" aria-labelledby="categoryDropdown">
                                <a className="dropdown-item" href="#">
                                    Category 1
                                </a>
                                <a className="dropdown-item" href="#">
                                    Category 2
                                </a>
                                {/* Add more categories as needed */}
                            </div>
                        </div>

                        <input
                            className="form-control"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-dark" type="submit">
                            <i className="bi bi-search"></i>
                        </button>
                    </form>
                    <Link to="/Login" className="text-decoration-none">
                        <button className="btn btn-outline-dark mx-1">
                            Log In
                        </button>
                    </Link>

                    <Link to="/Signup" className="text-decoration-none">
                        <button className="btn btn-dark">
                            Sign up
                        </button>
                    </Link>

                </div>
            </div>
        </nav>
    )
}

export default Navbar;