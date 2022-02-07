import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">NewsHunt</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
                            {/* <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Countries
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="#">India</Link></li>
                                    <li><Link className="dropdown-item" to="#">Brazil</Link></li>
                                    <li><Link className="dropdown-item" to="#">Switzerland</Link></li>
                                    <li><Link className="dropdown-item" to="#">Egypt</Link></li>
                                    <li><Link className="dropdown-item" to="#">Japan</Link></li>
                                    <li><Link className="dropdown-item" to="#">NetherLands</Link></li>
                                    <li><Link className="dropdown-item" to="#">Norway</Link></li>
                                    <li><Link className="dropdown-item" to="#">Philippines</Link></li>
                                    <li><Link className="dropdown-item" to="#">Romania</Link></li>
                                    <li><Link className="dropdown-item" to="#">Singapore</Link></li>
                                    <li><Link className="dropdown-item" to="#">Thailand</Link></li>
                                    <li><Link className="dropdown-item" to="#">Turkey</Link></li>
                                    <li><Link className="dropdown-item" to="#">United States</Link></li>
                                </ul>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default NavBar