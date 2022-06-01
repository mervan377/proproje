import { NavLink } from "react-router-dom";

const Deneme = () => {
  const NavLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };
  return (
    <nav>
      <NavLink style={NavLinkStyles} to="/Denemee">
        Home
      </NavLink>
      <NavLink style={NavLinkStyles} to="/Denemeee">
        About
      </NavLink>
    </nav>
  );
};

export default Deneme;
