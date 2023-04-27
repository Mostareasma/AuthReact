import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logout from "./auth/Logout";
import {Button, Dropdown, Form, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <>
        <nav className="navbar  bg-light">
            <Container fluid>
                <button className="navbar-toggler " type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="#">Navbar</a>

                <div className="text-dark btn-group dropstart">
                    <div type="button" className="dropdown-toggle" data-bs-toggle="dropdown"
                            aria-expanded="false">

                    </div>
                    <ul className="dropdown-menu">
v
                        <li className="dropdown-item"></li>
                        <li>
                            <hr className="dropdown-divider"/>
                        </li>
                        <li  className="dropdown-item" ><Logout/></li>
                    </ul>
                </div>
            </Container>
        </nav>
        <Container fluid >
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link"  to="/addProduct">Add product</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled">Disabled</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled">Disabled</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled">Disabled</a>
                    </li>
                </ul>
            </div>
        </Container>

    </>
    );
}

