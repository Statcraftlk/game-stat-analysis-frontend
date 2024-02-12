import { Box } from "@mui/material";
import CreateDeck from "./content/CreateDeck";
import EvolutionCards from "./content/Evolution";

import AllCards from "./content/AllCards";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";

const ContentArea = () => {
  return (
    <Box flex={5} p={2}>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/all-cards" element={<AllCards />} />
        <Route path="/evolution-cards" element={<EvolutionCards />} />
        <Route path="/create-deck" element={<CreateDeck />} />
      </Routes>
    </Box>
  );
};

export default ContentArea;
