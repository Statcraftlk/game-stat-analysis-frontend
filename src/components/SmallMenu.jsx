/* eslint-disable react/prop-types */
import { LightMode, ModeNight } from "@mui/icons-material";
import cards from "../games/clash-royale/data.json";
import {
  Autocomplete,
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
  TextField,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useState, useContext } from "react";
import { SearchContext } from "../App";

const SmallMenu = ({ setMode, mode }) => {
  const location = useLocation(); // Get the current location
  const isAllCardsRoute = location.pathname === "/all-cards"; // Check if the current route is "/all-cards"
  const { search, updateSearchInputs } = useContext(SearchContext); // Access the search state and update function from the context
  const handleSearchInputChange = (event, newValue) => {
    if (newValue !== null) {
      // Check if the input value is not null
      updateSearchInputs("search", newValue); // Update the search input value
    } else {
      updateSearchInputs("search", ""); // If the input value is null, set the search input value to an empty string
    }
  };
  const [open, setOpen] = useState(false); // Create a state to store the open/close state of the menu
  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        sx={{
          width: "35px",
          height: "40px",
        }}
      >
        {/* code for the menu button start */}
        <Stack position="relative" paddingRight={4}>
          <Box
            sx={{
              position: "absolute",
              width: open ? "35px" : "30px",
              height: "3px",
              backgroundColor: "white",
              top: "0px",
              transform: open ? "rotate(45deg)" : "rotate(0deg)",
              transition: " 0.2s ease",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              width: "30px",
              top: "10px",
              height: "3px",
              backgroundColor: "white",
              display: open ? "none" : "block",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              width: open ? "35px" : "30px",
              height: "3px",
              top: open ? "0" : "-10px",
              transform: open ? "rotate(-45deg)" : "rotate(0deg)",
              backgroundColor: "white",
              transition: " 0.2s ease",
            }}
          />
        </Stack>
        {/* code for the menu button end */}
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
        <List sx={{ width: { xs: "300px", md: "600px" }, height: "100vh" }}>
          <ListItem>
            <ListItemButton
              component={Link}
              to="/"
              onClick={() => setOpen(false)}
            >
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton
              component={Link}
              to="/all-cards"
              onClick={() => setOpen(false)}
            >
              <ListItemText primary="View all cards" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton
              component={Link}
              to="/evolution-cards"
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
            {isAllCardsRoute && (
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                getOptionLabel={(option) => option.name || ""}
                options={cards.items}
                sx={{ width: { xs: 200, md: 400 } }}
                value={search.search}
                onChange={handleSearchInputChange}
                renderInput={(params) => (
                  <TextField {...params} label="Player cards" />
                )}
              />
            )}
          </ListItem>

          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                {mode === "dark" ? <LightMode /> : <ModeNight />}
              </ListItemIcon>
              <Switch
                // eslint-disable-next-line no-unused-vars
                onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
                defaultChecked={mode === "dark"}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Menu>
    </>
  );
};

export default SmallMenu;
