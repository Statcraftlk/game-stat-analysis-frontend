/* eslint-disable no-unused-vars */
import { AppBar, Toolbar, Typography, styled } from "@mui/material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Navbar = () => {
  return (
    <AppBar position="sticky" color="error">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          CR Deck Analysis
        </Typography>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
