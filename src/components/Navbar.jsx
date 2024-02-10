/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Menu } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import SmallMenu from "./SmallMenu";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <AppBar position="sticky" color="error">
      <StyledToolbar>
        <Typography variant="h6">CR Deck Analysis</Typography>
        <Box position="relative" display={{ md: "block", lg: "none" }}>
          <SmallMenu position="absolute" />
        </Box>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
