/* eslint-disable react/react-in-jsx-scope */
import { Container, Stack, Button } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Stack minH={"100vh"}>
      <Navbar />
      <Container maxW={"1200px"} my={4}></Container>
    </Stack>
  );
}
export default App;
