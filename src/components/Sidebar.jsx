import {
  Dashboard,
  LightMode,
  ModeNight,
  Pix,
  TrackChanges,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
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

// eslint-disable-next-line react/prop-types
const Sidebar = ({ setMode, mode }) => {
  return (
    <Box
      flex={1}
      pt={2}
      sx={{ display: { xs: "none", sm: "none", lg: "block" } }}
    >
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/cards">
              <ListItemIcon>
                <Dashboard />
              </ListItemIcon>
              <ListItemText primary="View all cards" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/evo-cards">
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
          <ListItem>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              getOptionLabel={(option) => option.name}
              options={cards.items}
              sx={{ width: 200 }}
              renderInput={(params) => (
                <TextField {...params} label="Player cards" />
              )}
            />
          </ListItem>

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
