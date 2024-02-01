import { Link } from "react-router-dom";
import "../styles/Menu.css";

export const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <LinkWrapper to="/">Home</LinkWrapper>
        </li>
        <li>
          <LinkWrapper to="/tasks">Tasks</LinkWrapper>
        </li>
        <li>
          <LinkWrapper to="/about-us">About Us</LinkWrapper>
        </li>
      </ul>
    </nav>
  );
};

const LinkWrapper = ({ to, children }) => (
  <Link to={to} className="link-wrapper">
    {children}
  </Link>
);
