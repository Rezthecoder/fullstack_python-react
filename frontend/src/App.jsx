import { Container, Stack, Text } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import UserGrid from "./components/UserGrid";
import { useState } from "react";

export const BASE_URL = import.meta.env.MODE === "development" ? "http://127.0.0.1:5000/api" : "/api";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <Stack minH={"100vh"}>
      <Navbar setUsers={setUsers} />
      <Container maxW={"1200px"} my={4}>
        <Text
          fontWeight={"bold"}
          fontSize={{ base: "4xl", md: "50" }}
          letterSpacing={"2px"}
          textAlign={"center"}
          textTransform={"uppercase"}
          mb={8}
        >
          <Text
            as={"span"}
            bgGradient={"linear(to-r, #7b14e3, #ff9d00)"}
            bgClip={"text"}
          >
            My GOAT Members
          </Text>
          🥷🏻
        </Text>
        <UserGrid users={users} setUsers={setUsers} />
      </Container>
    </Stack>
  );
}

export default App;
