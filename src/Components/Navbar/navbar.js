import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';
import $ from "jquery";


export class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {links: ["home", "featured", "gallery"]}
        this.changeClass = this.changeClass.bind(this)
        this.handleOnClick = this.handleOnClick.bind(this)
    }

    componentDidMount() {
       let links = this.state.links
       for(let link of links) {
           if(window.location.href.split("/").includes(link)){
            $(`#${link}L`).addClass("active")
            $(`#homeL`).removeClass("active")
           }else if(link === "home"){
            $(`#${link}L`).addClass("active")
           }
       }
    }

    changeClass(id) {
        let links = this.state.links
        for(let link of links) {
            if(id === `${link}L` && !$(`#${link}L`).hasClass("active")){
                $(`#${link}L`).addClass("active")
            }else if($(`#${link}L`).hasClass("active") && id !== `${link}L`) {
                $(`#${link}L`).removeClass("active")
            }
        }
        if(!id) {
            console.log('lol')
            $('#homeL').addClass("active")
        }
    }

    handleOnClick(e) {
        this.changeClass(e.target.id)
    }

    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
                <button className="navbar-toggler" data-toggle="collapse" data-target="#nav-collapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link onClick={this.handleOnClick} className="navbar-brand" to="/"><img className="logo-pic" src={require("./urg_logo.png")}/></Link>
                <div id="nav-collapse" className="collapse navbar-collapse">
                    <ul className="navbar-nav nav-pills">
                        <li className="nav-item">
                            <Link id="homeL" onClick={this.handleOnClick} className="nav-link white" to="/"> Home </Link>
                        </li>
                        <li className="nav-item">
                            <Link id="featuredL" onClick={this.handleOnClick} className="nav-link white" to="/featured"> Featured </Link>
                        </li>
                        <li className="nav-item">
                            <Link id="galleryL" onClick={this.handleOnClick} className="nav-link white" to="/gallery"> Gallery </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}