import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ContentArea from "./components/ContentArea";
import { Box, Stack } from "@mui/material";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Box>
          <Navbar />
          <Stack
            direction="row"
            justifyContent="space-between"
            spacing={{ xs: 0, md: 2 }} // Add the spacing prop here
          >
            <Sidebar />
            <ContentArea />
          </Stack>
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
