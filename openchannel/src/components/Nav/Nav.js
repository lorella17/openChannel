import React, {Component} from "react";
import {Link, withRouter} from 'react-router-dom';

class Nav extends Component {


    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="/">
                    Welcome to OpenChannel
                </a>

                <Link to='/todo'>
                    Todo
                </Link>
                <Link to='/'>
                    Users
                </Link>

            </nav>
        )
    }

};

export default withRouter(Nav);
