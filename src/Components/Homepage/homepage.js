import React from 'react';
import './homepage.css';
import {Link} from 'react-router-dom';


export class HomeMain extends React.Component {

    render() {
        return (
            <div id="home" className="d-flex justify-content-center border rounded">
                <main className="home-page">
                    <section className="main-page d-flex flex-column align-items-center">
                        <header className="d-flex flex-column align-items-center">
                            <h1 className="white">URG</h1>
                            <p className="white name">Unsplash Random Gallery</p>
                        </header>
                        <article className="d-flex flex-column align-items-center">
                            <p className="white">Gallery that uses <a href="https://unsplash.com/developers" target="_blank">Unslpash API</a> to get random pictures from <a href="https://unsplash.com/" target="_blank">Unsplash</a>.</p>
                            <p className="white"><Link className="bold" to="/featured">Featured arts</Link> displays 9 most liked pictures.</p>
                            <p className="white"><Link className="bold" to="/gallery">Gallery</Link> shows all random pictures.</p> 
                        </article>
                        <footer className="d-flex flex-column align-items-center">
                            <p className="white">Created using <a className="bold" href="https://reactjs.org/" target="_blank"><i className="fab fa-react"></i>React</a> and <a className="bold" href="https://getbootstrap.com/" target="_blank"><i className="fab fa-bootstrap"></i>ootstrap</a>.</p>
                        </footer>
                    </section>
                </main>
            </div>
        )
    }
}