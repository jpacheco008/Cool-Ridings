import "./Bike.css";
import { Link } from "react-router-dom";

const Bike = (props) => {
  return (
    <>
      <Link className="product" to={`/products/${props._id}`}>
        <img className="product-image" src={props.imgURL} alt={props.name} />
        <div className='details-container'>
        <div className="product-name">{props.name}</div>
        <div className="price">{props.price}</div>
        </div>
      </Link>
    </>
  );
};

export default Bike;
