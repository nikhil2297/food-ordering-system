import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import React from "react";
import MainLogo from "../../assets/images/cravings-logo-3.png";

const SideDrawer = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      variant={props?.variant ? props?.variant : "permanent"}
      open={open}
      className={props?.className}
      onMouseOver={handleDrawerOpen}
      onMouseLeave={handleDrawerClose}
    >
      <div className="drawer-header">
      <img className={open ? "main-logo-image" : "main-mini-logo-image"} src={MainLogo} alt="Cravings Logo" />
      </div>

      <List>
        {props?.listData.map((item, index) => (
          <ListItem key={item.name}>
            <ListItemButton>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  justifyContent: "center",
                }}
              >
                {item.children ? item.children : <div></div>}
              </ListItemIcon>
              {open && (
                <ListItemText
                className="drawer-item-text"
                  primary={item.name}
                  sx={{
                    margin: "0px 8px",
                  }}
                ></ListItemText>
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideDrawer;
