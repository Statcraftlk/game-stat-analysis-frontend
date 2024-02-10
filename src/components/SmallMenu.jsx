/* eslint-disable react/prop-types */
import { ModeNight } from "@mui/icons-material";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  Stack,
  Switch,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";

const SmallMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button color="inherit" onClick={() => setOpen(true)}>
        <Stack spacing={"5px"}>
          <Box
            sx={{
              width: "30px",
              height: "3px",
              backgroundColor: "white",
            }}
          />
          <Box
            sx={{
              width: "30px",
              height: "3px",
              backgroundColor: "white",
            }}
          />
          <Box
            sx={{
              width: "30px",
              height: "3px",
              backgroundColor: "white",
            }}
          />
        </Stack>
      </Button>
      <Menu
        id="account-menu"
        open={open}
        onClose={() => setOpen(false)}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
        sx={{
          position: "absolute",
          top: "50px",
          right: "50px",
        }}
      >
        <List sx={{ width: { xs: "300px", md: "600px" } }}>
          <ListItem>
            <ListItemButton
              component={Link}
              to="/cards"
              onClick={() => setOpen(false)}
            >
              <ListItemText primary="View all cards" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton
              component={Link}
              to="/evo-cards"
              onClick={() => setOpen(false)}
            >
              <ListItemText primary="View evolution cards" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton
              component={Link}
              to="/create-deck"
              onClick={() => setOpen(false)}
            >
              <ListItemText primary="Create new deck" />
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch />
            </ListItemButton>
          </ListItem>
        </List>
      </Menu>
    </>
  );
};

export default SmallMenu;
