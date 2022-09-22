import * as React from "react";
import "./navbar.scss";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import { useStateContext } from "../../context/ToggleContext";

const Navebar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();
  const [ndate, setDate] = React.useState(new Date());
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const timeOption = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  React.useEffect(() => {
    setInterval(() => setDate(new Date()), 30000);
  }, []);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item" onClick={() => setActiveMenu(!activeMenu)}>
            <KeyboardArrowLeftIcon className="menuArrow" />
            <MenuIcon className="icon" />
          </div>
          <div className="item">Good Morning!</div>
          <div className="item">
            {ndate.toLocaleDateString("en-GB", options)}
          </div>
          <div className="item">
            {ndate.toLocaleTimeString("en-GB", timeOption)}
          </div>
        </div>
        <div className="right">
          <div className="item">
            <HelpOutlineOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <Badge badgeContent={10} max={9} color="error">
              <NotificationsIcon className="icon" />
            </Badge>
          </div>
          <div className=" line"></div>
          <div className="item">
            <Link to="/" className="userLink">
              Nader Amer
            </Link>
            <div className="circle">NA</div>
            <KeyboardArrowDownIcon className="userArrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navebar;
