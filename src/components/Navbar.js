import React from 'react';
import PropTypes from 'prop-types';

function Navbar(props) {
    return (
        <div className="container">
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <img src="./images/todo.png" width="30" height="30" class="d-inline-block align-top" alt="" />
                    {props.title}
                </a>
            </nav>
        </div>
    );
}

export default Navbar;

Navbar.propTypes = {
    title: PropTypes.string
}

Navbar.defaultProps = {
    title: "Page Title"
}