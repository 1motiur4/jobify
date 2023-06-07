import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import Logo from "./Logo";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../features/user/userSlice";

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user, isSidebarOpen } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <div className="nav-center">
        <button
          type="button"
          className="toggle-btn"
          onClick={() => {
            dispatch(toggleSidebar());
          }}
        >
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-text">dashboard</h3>
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="btn"
            onClick={() => {
              setShowLogout(!showLogout);
            }}
          >
            <FaUserCircle />
            john
            <FaCaretDown />
          </button>
          <div className={`dropdown ${showLogout ? "show-dropdown" : null}`}>
            <button
              type="button"
              className="dropdown-btn"
              onClick={() => console.log("logout")}
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
