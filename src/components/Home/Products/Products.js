import React, { useEffect, useState } from 'react';
import Product from './Product';
import "./Products.css"

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://frozen-plateau-35169.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div className="container">
            <h1>Our Products</h1>
            <div className="row">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}></Product>)
                }


            </div>
        </div>
    );
};

export default Products;