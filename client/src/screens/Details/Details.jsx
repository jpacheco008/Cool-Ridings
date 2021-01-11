import { useState, useEffect } from "react";
import "./Details.css";
import Layout from "../../components/shared/Layout/Layout";
import { getProduct, deleteProduct } from "../../services/products";
import { useParams, Link } from "react-router-dom";
import ReadMoreText from 'read-more-less-react'
import 'read-more-less-react/dist/index.css';

const ProductDetail = (props) => {
  const [product, setProduct] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fecthProduct = async () => {
      const product = await getProduct(id);
      setProduct(product);
      setLoaded(true);
    };
    fecthProduct();
  }, [id]);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }
  
  return (
    <Layout user={props.user}>
      <div className="product-detail">
        <div className="top-container">
          <div className="name">{product.name}</div>
          <img
            className="product-detail-image"
            src={product.imgURL}
            alt={product.name}
          />
          <div className="detail-price">${product.price}</div>
        </div>
        <div className="details">
          <ReadMoreText lines={3} text={product.description}/>
          <div className="buttons">
              <Link className="edit-link" to={`/products/${product._id}/edit`}>
                Edit        
              </Link>
              <div className="delete" onClick={() => deleteProduct(product._id)}>
              Delete
              </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
