import { Link } from "react-router-dom";

export const TopNavbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Menu</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}
