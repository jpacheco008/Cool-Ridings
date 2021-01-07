import "./List.css";
import { useState, useEffect } from "react";
import Bike from "../../components/Bike/Bike";
import { getProducts } from "../../services/products";
import Search from "../../components/Search/Search";
import Layout from "../../components/shared/Layout/Layout";

const List = (props) => {
  const [allProducts, setAllProducts] = useState([]);
  const [quieredProducts, setQuieredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setAllProducts(products);
      setQuieredProducts(products);
    };
    fetchProducts();
  }, []);

  const handleSearch = (event) => {
    const newQueriedProducts = allProducts.filter((product) =>
      product.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setQuieredProducts(newQueriedProducts);
  };
  const handleSubmit = (event) => event.preventDefault();

  const mappedProducts = quieredProducts.map((product, index) => (
    <Bike
      _id={product._id}
      name={product.name}
      imgURL={product.imgURL}
      price={product.price}
      key={index}
    />
  ));

  return (
    <Layout user={props.user}>
      <Search onSubmit={handleSubmit} onChange={handleSearch} />
      <div className="listProducts">{mappedProducts}</div>
    </Layout>
  );
};

export default List;
