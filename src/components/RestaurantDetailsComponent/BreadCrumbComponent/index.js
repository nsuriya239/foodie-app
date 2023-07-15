import "./index.css";
import { Link } from "react-router-dom";

const BreadCrumbComponent = (props) => {
  const { city, Name } = props;
  return (
    <div className="breadcrumb">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">{city}</Link>
        </li>
        <li>
          <Link to="/">{Name}</Link>
        </li>
      </ul>
    </div>
  );
};

export default BreadCrumbComponent;
