import "./List.css";
import { useState, useEffect } from "react";
import Bike from "../../components/Bike/Bike";
import { getProducts } from "../../services/products";

const List = (props) => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setAllProducts(products);
    };
    fetchProducts();
  }, []);

  const mappedProducts = allProducts.map((product, index) => (
    <Bike
      _id={product._id}
      name={product.name}
      imgURL={product.imgURL}
      price={product.price}
      key={index}
    />
  ));

  return (
    <div className="listProducts" user={props.user}>
      {mappedProducts}
    </div>
  );
};

export default List;
