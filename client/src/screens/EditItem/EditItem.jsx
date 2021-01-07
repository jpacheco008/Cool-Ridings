import { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import "./EditItem.css";
import Layout from "../../components/shared/Layout/Layout";
import { getProduct, updateProduct } from "../../services/products";

const EditItem = (props) => {
  const [item, setItem] = useState({
    name: "",
    imgURL: "",
    price: "",
    description: "",
  });
  const [isUpdated, setIsUpdated] = useState(false);

  let { id } = useParams();

  useEffect(() => {
    const fetchItem = async () => {
      const item = await getProduct(id);
      setItem(item);
    };
    fetchItem();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem({
      ...item,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const submitUpdate = await updateProduct(id, item);
    setIsUpdated(submitUpdate);
  };

  if (isUpdated) {
    return <Redirect to={`/products/${id}`} />;
  }

  return (
    <Layout user={props.user}>
      <div className="edit-box">
        <div className="image-box">
          <img className="edit-img" src={item.imgURL} alt={item.name} />
          <form onSubmit={handleSubmit}>
            <input
              className="edit-input-image"
              placeholder="Image Link"
              value={item.imgURL}
              name="imgURL"
              required
              onChange={handleChange}
            />
          </form>
        </div>
        <form className="edit-form" onSubmit={handleSubmit}>
          <input
            className="edit-name"
            placeholder="Name"
            value={item.name}
            name="name"
            required
            autoFocus
            onChange={handleChange}
          />
          <input
            className="edit-price"
            placeholder="Price"
            placeholder="Price"
            value={item.price}
            name="price"
            required
            onChange={handleChange}
          />
          <textarea
            className="edit-description"
            placeholder="Description"
            value={item.description}
            name="description"
            required
            onChange={handleChange}
          />
          <button type="submit" className="submit-button">
            Save Changes
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default EditItem;
