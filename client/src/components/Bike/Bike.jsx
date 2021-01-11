import "./Bike.css";
import { Link } from "react-router-dom";

const Bike = (props) => {
  return (
    <>
      <Link className="product" to={`/products/${props._id}`}>
        <img className="product-image" src={props.imgURL} alt={props.name} />
        <div className="details-container">
          <h2 className="product-name">{props.name}</h2>
          <h2 className="product-price">{props.price}</h2>
        </div>
      </Link>
    </>
  );
};

export default Bike;
