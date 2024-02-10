import { Dashboard, ModeNight, Pix, TrackChanges } from "@mui/icons-material";
import { Link } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";

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

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch
                // eslint-disable-next-line no-unused-vars
                onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
