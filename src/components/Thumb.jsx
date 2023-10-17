import { Link } from "react-router-dom";
function Thumb({ thumb }) {
    return (
      <Link to={`/housing/${thumb.id}`}>
        <div className="thumbWrapper">
          <img className="thumbCover" src={thumb.cover} alt={thumb.title} />
          <p className="thumbTitle" >{thumb.title}</p>
        </div>
      </Link>
    );
  }

export default Thumb