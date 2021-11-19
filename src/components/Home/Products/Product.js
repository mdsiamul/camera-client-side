import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { id, name, img, details, fee } = product
    return (
        <div className="bg-secondary text-white col-lg-4 col-sm-6 col-12 p-3 border">
            <h2 className="">{name}</h2>
            <img className="img-fluid" src={img} alt="" />
            <h3>Price: {fee}$</h3>
            <p>{details}</p>
            <Link to={`/anrolled/${id}`}>
                <button className="btn btn-warning">Buy {name}</button>
            </Link>
        </div>
    );
};

export default Product;