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

const Sidebar = () => {
  return (
    <Box flex={1} pt={2} sx={{ display: { xs: "none", sm: "block" } }}>
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
              <Switch />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
