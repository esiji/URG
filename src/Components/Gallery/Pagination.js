import React from 'react';
import './pagination.css';


export class Pagination extends React.Component {

    render() {
        const pageNumbers = [];

        for (let i = 1; i <= Math.ceil(this.props.totalImages / this.props.imagesPerPage); i++) {
          pageNumbers.push(i);
        }

        return (
            <nav>
                <ul className='d-flex justify-content-center pagination-lg'>
                  {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                      <a onClick={() => this.props.paginate(number)} className='page-link'>
                        {number}
                      </a>
                    </li>
                  ))}
                </ul>
             </nav>
        )
    }
}