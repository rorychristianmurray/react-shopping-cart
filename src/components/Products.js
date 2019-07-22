import React, { useContext } from "react";

// Context
import { ProductContext } from "../contexts/ProductContext";

// Components
import Product from "./Product";

const Products = props => {
  const productContext = useContext(ProductContext);
  return (
    <div className="products-container">
      {props.products.map(product => (
        <Product key={product.key} product={product} addItem={props.addItem} />
      ))}
    </div>
  );
};

export default Products;
