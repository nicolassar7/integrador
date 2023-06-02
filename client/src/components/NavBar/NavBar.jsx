import SearchBar from "../SearchBar/SearchBar";
import style from "./NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = ({ onSearch }) => {
  return (
    <div className={style.nav}>
      <SearchBar onSearch={onSearch} />
      <div className={style.link}>
        <Link to="/home">
          <button>Home</button>
        </Link>

        <Link to="/about">
          <button>About</button>
        </Link>

        <Link to='/favorites'>
          <button>Favorite</button>
        </Link>
        <Link to='/'>
          <button>Logout</button>
        </Link>

      </div>

    </div>
  );
};

export default NavBar;
