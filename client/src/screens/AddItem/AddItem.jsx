import { useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import { createProduct } from "../../services/products";
import "./AddItem.css";
import { Redirect } from "react-router-dom";

const AddItem = (props) => {
  const [product, setProduct] = useState({
    name: "",
    imgURL: "",
    description: "",
    price: "",
  });

  //add redirect state
  const [isCreated, setCreated] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const created = await createProduct(product);
    setCreated({ created });
  };

  // redirect
  if (isCreated) {
    return <Redirect to={`/products`} />;
  }
  return (
    <Layout user={props.user}>
      <div className="add-item-container">
        <h3 className="add-item-title">Add a Product</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            placeholder="Name"
            autoFocus
          />

          <input
            type="text"
            name="imgURL"
            value={product.imgURL}
            onChange={handleChange}
            placeholder="Image URL"
          />

          <input
            type="text"
            name="price"
            value={product.price}
            onChange={handleChange}
            placeholder="Price"
          />

          <textarea
            type="text"
            name="description"
            value={product.description}
            onChange={handleChange}
            placeholder="Product Description"
            rows={6}
            cols={40}
          />

          <button className="add-item-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default AddItem;
