
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHouse,
  faUsers,
  faMoneyCheckDollar,
  faFilePen,
  faTrash,
  faRightFromBracket,
  faClipboardUser,
  faUserPlus
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./navBar.css";



const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  const clickHandle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <nav className={toggle ? "nav" : "SNav"}>
        <div className="toggleButton">
        <button  onClick={clickHandle} className="btn">
          <FontAwesomeIcon icon={faBars} />
        </button>
        </div>

        <ul>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faHouse} />
              {toggle && "Home"}
            </Link>
          </li>
          <li>
            <Link to="/Employees">
              <FontAwesomeIcon icon={faUsers} />
              {toggle && "Employees"}
            </Link>
          </li>
          <li>
            <Link to="/Employee">
            <FontAwesomeIcon icon={faUserPlus} />
              {toggle && "Employee"}
            </Link>
          </li>
          <li>
            <Link to="/Attendance">
            <FontAwesomeIcon icon={faClipboardUser} />
              {toggle && "Attendance"}
            </Link>
          </li>
          <li>
            <Link to="/Salary">
              <FontAwesomeIcon icon={faMoneyCheckDollar} />
              {toggle && "Salary"}
            </Link>
          </li>
          <li>
            <Link to="/Update">
              <FontAwesomeIcon icon={faFilePen} />
              {toggle && " Update"}
            </Link>
          </li>
          <li>
            <Link to="/Delete">
              <FontAwesomeIcon icon={faTrash} />
              {toggle && " Delete"}
            </Link>
          </li>
          <li>
            <Link to="/Logout">
            <FontAwesomeIcon icon={faRightFromBracket} />
              {toggle && "Logout"}
            </Link>
          </li>
          <li></li>
        </ul>
      </nav>
    </div>
  );
};
export default NavBar;
