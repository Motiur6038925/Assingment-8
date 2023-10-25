import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <div className=" flex justify-center items-center">
        <ul className=" flex justify-between text-5xl font-semibold">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/IncomePage">IncomePage</NavLink>
          </li>

          <li>
            <NavLink to="/ExpensePage">ExpensePage</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
