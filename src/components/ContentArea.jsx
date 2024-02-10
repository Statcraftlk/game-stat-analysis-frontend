import { Box } from "@mui/material";
import CreateDeck from "./content/CreateDeck";
import EvolutionCards from "./content/Evolution";

import AllCards from "./content/AllCards";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const ContentArea = () => {
  return (
    <Box flex={4} p={2}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreateDeck />} />
          <Route path="/cards" element={<AllCards />} />
          <Route path="/evo-cards" element={<EvolutionCards />} />
          <Route path="/create-deck" element={<CreateDeck />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
};

export default ContentArea;
