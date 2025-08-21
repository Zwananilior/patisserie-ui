import "./HolidaySection.css";
import { useNavigate } from "react-router-dom";


const images = [
  "/holidays.png",
  "/pexels-ron-lach-10033198.jpg",
  "/pexels-cedric-fauntleroy-7220587.jpg",
];

export default function HolidaySection() {
  const navigate = useNavigate();
  return (
    <div className="customer-collection">
      <h2 className="collection-heading">Customer Collection</h2>

      <div className="image-grid">
        {images.map((img, index) => (
          <div key={index} className="image-card">
            <img src={img} alt={`collection-${index}`} />
            <button className="collection-button" onClick={() => navigate("/menu")}>
      Order Now
    </button>
          </div>
        ))}
      </div>
    </div>
  );
}
