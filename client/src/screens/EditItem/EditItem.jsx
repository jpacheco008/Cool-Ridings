import { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import "./EditItem.css";
import Layout from "../../components/shared/Layout/Layout";
import { getProducts, updateProduct } from "../../services/products";

const EditItem = (props) => {
  const [item, setItem] = useState({
    name: "",
    imgURL: "",
    price: "",
    description: "",
  });

  let { id } = useParams();

  useEffect(() => {
    const fetchItem = async () => {
      const item = await getProducts(id);
      setItem(item);
    };
    fetchItem();
  }, [id]);

  return (
    <Layout user={props.user}>
      <div className="edit-box">
        <div className="image-box">
          <img src={item.imgURL} alt={item.name} />
          <form onSubmit={}>
            <input
              className="edit-input-image"
              placeholder="Image Link"
              value={item.imgURL}
              name="imgURL"
              required
              onChange={}
            />
          </form>
        </div>
        <form className="edit-form" onSubmit={}>
          <input
            className="edit-name"
            placeholder="Name"
            value={item.name}
            name="name"
            required
            autoFocus
            onChange={}
          />
          <input className="edit-price" placeholder="Price" />
          <textarea />
        </form>
      </div>
    </Layout>
  );
};
