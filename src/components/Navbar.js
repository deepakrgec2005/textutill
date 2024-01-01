import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutText}</Link>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <button type="button" className="btn btn-primary" onClick={props.colorP}>Primary</button>
<button type="button" className="btn btn-secondary" onClick={props.colorP}>Secondary</button>
<button type="button" className="btn btn-success"onClick={props.colorP} >Success</button>
<button type="button" className="btn btn-danger" onClick={props.colorP}>Danger</button>
<button type="button" className="btn btn-warning" onClick={props.colorP}>Warning</button>
<button type="button" className="btn btn-info" onClick={props.colorP}>Info</button>
<button type="button" className="btn btn-light" onClick={props.colorP}>Light</button>
<button type="button" className="btn btn-dark" onClick={props.colorP}>Dark</button>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" onClick={props.tgMode} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode-{props.sts}</label>
</div>
    </div>
  </div>
</nav>
  );
}
 Navbar.propTypes ={title: PropTypes.string.isRequired, aboutText: PropTypes.string}
 Navbar.defaultProps ={title: 'Set Title Here', aboutText: 'About Title'};