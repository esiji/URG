import React from 'react';
import './pc.css';

export class PictureContainer extends React.Component {


    render() {
        return (
            <article className="d-md-flex justify-content-center">
                <div className="col art-container">
                    <img className="featured-pics" src={this.props.images[0].url} alt={this.props.images[0].description ? this.props.images[0].description: " "} />
                    <div className="overlay">
                        <h2>
                        <span className="left">Likes: {this.props.images[0].likes}</span>
                        Author <a href={this.props.images[0].profile} target="_blank">{this.props.images[0].author}</a>
                        </h2>
                    </div>
                </div>
                <div className="col art-container">
                    <img className="featured-pics" src={this.props.images[1].url} alt={this.props.images[1].description ? this.props.images[1].description: " "} />
                    <div className="overlay">
                        <h2>
                        <span className="left">Likes: {this.props.images[1].likes}</span>
                        Author <a href={this.props.images[1].profile} target="_blank">{this.props.images[1].author}</a>
                        </h2>
                    </div>
                </div>
                <div className="col art-container">
                    <img className="featured-pics" src={this.props.images[2].url} alt={this.props.images[2].description ? this.props.images[2].description: " "} />
                    <div className="overlay">
                        <h2>
                        <span className="left">Likes: {this.props.images[2].likes}</span>
                        Author <a href={this.props.images[2].profile} target="_blank">{this.props.images[2].author}</a>
                        </h2>
                    </div>
                </div>
            </article>
        )
    }
}