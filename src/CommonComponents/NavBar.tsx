import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: 30,
        backgroundColor: "grey",
      }}
    >
      <NavLink to={"/"} title="Home">
        Home
      </NavLink>
      <NavLink to={"/users"} title="Users">
        Users
      </NavLink>
      <NavLink to={"/contact"} title="Contact">
        Contact
      </NavLink>
    </div>
  );
}

export default NavBar;
