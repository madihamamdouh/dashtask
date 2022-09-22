import * as React from "react";

import "./home.scss";
import Sidebar from "../../component/Sidbar/Sidbar";
import Navbar from "../../component/Navbar/Navbar";
import Center from "../../component/Center/Center";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useStateContext } from "../../context/ToggleContext";
import FormDialog from "../Poper/Poper";
const Home = () => {
  const { activeMenu } = useStateContext();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="home">
      {activeMenu && <Sidebar />}

      <div className="container">
        <Navbar />
        <div className="charts">
          <div className="topHome">
            <div className="userTitle">user managment</div>
            <FormDialog open={open} handleClose={handleClose} />

            <Button
              variant="contained"
              startIcon={<AddIcon />}
              className="addBtn"
              onClick={handleClickOpen}
            >
              Add New
            </Button>
          </div>
          <Center />
        </div>
      </div>
    </div>
  );
};

export default Home;
