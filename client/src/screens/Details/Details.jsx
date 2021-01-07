import { useState, useEffect } from "react";
import "./Details.css";
import Layout from "../../components/shared/Layout/Layout";
import { getProduct, deleteProduct } from "../../services/products";
import { useParams, Link } from "react-router-dom";

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
        <div className="name">{product.name}</div>
        <img
          className="product-detail-image"
          src={product.imgURL}
          alt={product.name}
        />
        <div className="price">{product.price}</div>
        <div className="details">
          <div>{product.description}</div>
          <div className="buttons">
            <button className="edit-button">
              <Link className="edit-link" to={`/products/${product._id}/edit`}>
                Edit
              </Link>
            </button>
            <button
              className="delete-button"
              onClick={() => deleteProduct(product.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
