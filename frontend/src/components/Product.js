import React from 'react'
import Rating from './Rating'

const Product = ({item}) => {
    return (
        <div className="card">
                  <a href={`/product/${item._id}`}>
                    <img className="medium" src={item.image} alt="product" />
                  </a>
                  <div className="card-body">
                    <a href={`/product/${item._id}`}>
                      <h2>{item.name}</h2>
                    </a>
                    <Rating rating={item.rating} numReviews={item.numReviews} />
                    <div className="price">${item.price}</div>
                  </div>
                </div>
    )
}

export default Product
