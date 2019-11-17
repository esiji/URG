import React from 'react';
import './fa.css';
import {PictureContainer} from '../PictureContainer/pc';

export class FeaturedArts extends React.Component {

    render() {
        return (
            <section id="featured" className="d-flex flex-column justify-content-center">
                <div className="featured d-flex justify-content-center white">Featured Arts</div>
                <PictureContainer images={this.props.images.slice(0, 3)} />
                <PictureContainer images={this.props.images.slice(3, 6)} />
                <PictureContainer images={this.props.images.slice(6, 9)} />
            </section>
        )
    }
}