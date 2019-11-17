import './footer.css';
import React from 'react';


export class Footer extends React.Component {

    render() {
        return (
            <section id="foot" className="d-flex flex-row flex-wrap justify-content-around bg-dark fixed-bottom">
                <div className="about-container">
                    <p> <i className="fab fa-facebook"></i> Facebook: <a href="https://www.facebook.com/unsplash/" target="_blank">Facebook Page</a></p>
                </div>
                <div className="about-container">
                    <p><i className="fab fa-twitter-square"></i> Twitter: <a href="https://twitter.com/unsplash" target="_blank">Twitter Page</a></p>
                </div>
                <div className="about-container">
                    <p><i className="fab fa-github"></i> Github: <a href="https://github.com/esiji/URG" target="_blank">Github Page</a></p>
                </div>
            </section>
        )
    }
}