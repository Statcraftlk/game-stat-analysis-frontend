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

// eslint-disable-next-line react/prop-types
const Navbar = ({ setMode, mode }) => {
  return (
    <AppBar position="sticky" color="primary">
      <StyledToolbar>
        <Typography variant="h6">CR Deck Analysis</Typography>
        <Box position="relative" display={{ md: "block", lg: "none" }}>
          <SmallMenu position="absolute" setMode={setMode} mode={mode} />
        </Box>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
