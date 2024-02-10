import { Dashboard, ModeNight, Pix, TrackChanges } from "@mui/icons-material";
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
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/cards">
              <ListItemIcon>
                <Dashboard />
              </ListItemIcon>
              <ListItemText primary="View all cards" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/evo-cards">
              <ListItemIcon>
                <TrackChanges />
              </ListItemIcon>
              <ListItemText primary="View evolution cards" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/create-deck">
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
