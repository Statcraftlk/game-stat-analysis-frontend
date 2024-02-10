import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ContentArea from "./components/ContentArea";
import { Box, Stack } from "@mui/material";

function App() {
  return (
    <>
      <Box>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar />
          <ContentArea />
        </Stack>
      </Box>
    </>
  );
}

export default App;
