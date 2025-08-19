import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const Header: React.FC = () =>{
  
  const navigate = useNavigate();
  return(<header className="header">
    <div className="logo">Patisserie</div>
    <nav>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
          <li><Link to="/parties">Parties</Link></li>
          <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/menu">Contact</Link></li>
      </ul>
    </nav>
    <button className="order-button" onClick={() => navigate("/menu")}>ORDER NOW</button>
  </header>
);
}

export default Header;
