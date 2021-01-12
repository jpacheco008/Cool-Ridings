import "./List.css";
import { useState, useEffect } from "react";
import Bike from "../../components/Bike/Bike";
import { getProducts } from "../../services/products";
import Search from "../../components/Search/Search";
import Layout from "../../components/shared/Layout/Layout";
import Sort from "../../components/Sort/Sort";
import { AZ, ZA, lowestFirst, highestFirst } from "../../utils/Sort";
import carouselPicTwo from "../../images/carousel-pic-two.png";

const List = (props) => {
  const [allProducts, setAllProducts] = useState([]);
  const [quieredProducts, setQuieredProducts] = useState([]);
  const [sortType, setSortType] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setAllProducts(products);
      setQuieredProducts(products);
    };
    fetchProducts();
  }, []);

  const handleSort = (type) => {
    setSortType(type);
    switch (type) {
      case "name-ascending":
        setQuieredProducts(AZ(quieredProducts));
        break;
      case "name-descending":
        setQuieredProducts(ZA(quieredProducts));
        break;
      case "price-ascending":
        setQuieredProducts(lowestFirst(quieredProducts));
        break;
      case "price-decending":
        setQuieredProducts(highestFirst(quieredProducts));
        break;
      default:
        break;
    }
  };

  const handleSearch = (event) => {
    const newquieredProducts = allProducts.filter((product) =>
      product.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setQuieredProducts(newquieredProducts, () => handleSort(sortType));
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
      <div className="search-features">
        <h3 className="list-title">All Bikes</h3>
        <Search onSubmit={handleSubmit} onChange={handleSearch} />
        <Sort onSubmit={handleSubmit} onChange={handleSort} />
      </div>

      <div className="listProducts">
        <div className="promo-ad-div">
          <img src={carouselPicTwo} alt="" />
        </div>
        {mappedProducts}
      </div>
    </Layout>
  );
};

export default List;
