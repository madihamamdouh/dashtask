import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import items from "../../Data/Items.json";

export default function Sidbaritem({ open, OpenHandler }) {
  return (
    <List
      sx={{ width: "100%", maxWidth: 360 }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          component="div"
          id="nested-list-subheader"
          className="dashlist"
        >
          Settings
        </ListSubheader>
      }
    >
      {items.map((item, index) => (
        <>
          <ListItemButton
            onClick={OpenHandler}
            key={index}
            className={open ? "dashitem active" : "dashitem"}
          >
            <ListItemText primary={item.link} className="dashcomponent" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" children={item.link}>
            <List component={item.name} disablePadding>
              {item.content.map((text, index) => (
                <ListItemButton sx={{ pl: 3 }} className="listItem" key={index}>
                  <ListItemText primary={text} />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </>
      ))}

      <ListItemButton className="dashitem">
        <ListItemText primary="Business setup" />
      </ListItemButton>
      <ListItemButton className="dashitem">
        <ListItemText primary="user managment" />
      </ListItemButton>
      <ListItemButton className="dashitem">
        <ListItemText primary="License Managnent" />
      </ListItemButton>
    </List>
  );
}
