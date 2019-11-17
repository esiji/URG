import React from 'react';
import './gallery.css';
import {PictureContainer} from '../PictureContainer/pc';
import {Pagination} from "./Pagination";

export class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentPage: 1, imagesPerPage: 9}
        this.paginate = this.paginate.bind(this)
    }

    paginate(number) {
        this.setState({currentPage: number})
    }

    render() {
        console.log(this.state.currentPage)
        const indexOfLastImage = this.state.currentPage * this.state.imagesPerPage
        const indexOfFirstImage = indexOfLastImage - this.state.imagesPerPage
        const currentImages = this.props.images.slice(indexOfFirstImage, indexOfLastImage)

        return (
            <section id="gallery" className="d-flex align-items-center flex-column">
                <div className="gallery d-flex justify-content-center white">Gallery</div>
                <PictureContainer images={currentImages.slice(0, 3)} />
                <PictureContainer images={currentImages.slice(3, 6)} />
                <PictureContainer images={currentImages.slice(6, 9)} />
                <Pagination totalImages={this.props.images.length} imagesPerPage={this.state.imagesPerPage} paginate={this.paginate} />
            </section>
        )
    }
}