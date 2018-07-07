import React, {Component} from 'react';
import Nav from "../../components/Nav";
import Jumbotron from "../../components/Jumbotron";
// import logo from "openchannel/src/logo.svg"

export default class Users extends Component {


    render() {
        return (
            <div>
                <Nav/>

                <br/>
                <button color={"danger"} className={"float-center"} onClick={this.handleClick}>
                    Administrator Login
                </button>

                <button color={"primary"} className={"float-right"} onClick={this.handleClick}>
                    Employee Login
                </button>
                <br/>

               <Jumbotron></Jumbotron>

            </div>


        )


    }
}
