import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="nav-cont">
      <NavLink to="personal">Personal Info</NavLink>
      <NavLink to="experience">Experience</NavLink>
      <NavLink to="education">Education</NavLink>
      <NavLink to="skills">Skills</NavLink>
    </nav>
  );
}

export default Header;
