import * as React from "react";

import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useState } from "react";
import Sidbaritem from "../sidbarItem/Sidbaritem";
import "./sidbar.scss";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const OpenHandler = () => {
    setOpen(!open);
  };
  return (
    <div className="sidebar">
      <div className="top">
        <div className="mainlogo">
          <Link to="/" className="logo">
            <img src="/images/logo2.png" alt="" />
          </Link>
        </div>
        <div className="search">
          <input type="text" placeholder="Quick access" />
          <SearchOutlinedIcon className="searchIcon icon" />
        </div>
        <div className="dash">
          <Link to="/" className="dashlink">
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </Link>
        </div>
      </div>
      <div className="bottom">
        <Sidbaritem OpenHandler={OpenHandler} open={open} />
      </div>
    </div>
  );
};

export default Sidebar;
