import SearchBar from "../SearchBar/SearchBar";
import style from "./NavBar.module.css";
import { Link, NavLink } from "react-router-dom";

const NavBar = ({ onSearch }) => {
  return (
    <div className={style.nav}>
      <SearchBar onSearch={onSearch} />

      <Link to="/home">
        <button>Home</button>
      </Link>

      <Link to="/about">
        <button>About</button>
      </Link>

      <Link to='/favorites'>
          <button>Favorites</button>
      </Link>

    </div>
  );
};

export default NavBar;
