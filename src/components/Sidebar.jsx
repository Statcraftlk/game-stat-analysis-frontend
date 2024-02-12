import {
  Dashboard,
  Home,
  LightMode,
  ModeNight,
  Pix,
  TrackChanges,
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import {
  Autocomplete,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
  TextField,
} from "@mui/material";
import cards from "../games/clash-royale/data.json";
import { SearchContext } from "../App";
import { useContext } from "react";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ setMode, mode }) => {
  const { search, updateSearchInputs } = useContext(SearchContext); // Access the search state and update function from the context
  const location = useLocation(); // Get the current location or route

  const handleSearchInputChange = (event, newValue) => {
    if (newValue !== null) {
      // Check if the input value is not null
      updateSearchInputs("search", newValue); // Update the search input value
    } else {
      updateSearchInputs("search", ""); // If the input value is null, set the search input value to an empty string
    }
  };

  const isAllCardsRoute = location.pathname === "/all-cards"; // Check if the current route is "/all-cards"

  return (
    <Box
      flex={1}
      pt={2}
      sx={{ display: { xs: "none", sm: "none", lg: "block" } }}
    >
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/all-cards">
              <ListItemIcon>
                <Dashboard />
              </ListItemIcon>
              <ListItemText primary="View all cards" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/evolution-cards">
              <ListItemIcon>
                <TrackChanges />
              </ListItemIcon>
              <ListItemText primary="View evolution cards" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/create-deck">
              <ListItemIcon>
                <Pix />
              </ListItemIcon>
              <ListItemText primary="Create new deck" />
            </ListItemButton>
          </ListItem>
          {isAllCardsRoute && ( // Render the Autocomplete component only if the current route is "/all-cards"
            <ListItem>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                getOptionLabel={(option) => option.name || ""}
                options={cards.items}
                sx={{ width: 200 }}
                value={search.search}
                onChange={handleSearchInputChange}
                renderInput={(params) => (
                  <TextField {...params} label="Player cards" />
                )}
              />
            </ListItem>
          )}

          <ListItem disablePadding>
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
      </Box>
    </Box>
  );
};

export default Sidebar;
