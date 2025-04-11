import {
  Box,
  Button,
  Container,
  Flex,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import CreateUserModal from "./CreateUserModal";

const Navbar = ({ setUsers }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Container maxW={"900px"}>
        <Box
          px={4}
          py={4}
          borderRadius={5}
          bgColor={useColorModeValue("gray.200", "gray.500")}
        >
          <Flex justifyContent={"space-between"} alignItems={"center"} h={16}>
            {/* left side */}
            <Flex
              alignItems={"center"}
              justifyContent={"center"}
              gap={3}
              display={{ base: "none", sm: "flex" }}
            >
              <img src="/react.png" alt="react logo" width={50} height={50} />
              <Text fontSize={"40px"}>+</Text>
              <img src="/python.png" alt="react logo" width={50} height={40} />
              <Text fontSize={"40px"}>=</Text>

              <img src="/explode.png" alt="react logo" width={45} height={45} />
            </Flex>
            {/* right side */}
            <Flex alignItems={"center"} justifyContent={"center"}>
              <Text
                fontSize={"lg"}
                fontWeight={500}
                display={{ base: "none", md: "block" }}
              >
                GOAT <span style={{ fontSize: "3.5rem" }}> 🐐</span>
              </Text>
              <Button
                onClick={toggleColorMode}
                bgColor={useColorModeValue("teal.400", "teal.600")}
                borderRadius={25}
                color={"white"}
                _hover={{
                  bgColor: useColorModeValue("teal.500", "teal.700"),
                }}
              >
                {colorMode === "light" ? <IoMoon /> : <LuSun size={20} />}
              </Button>
              <CreateUserModal setUsers={setUsers} />
            </Flex>
          </Flex>
        </Box>
      </Container>
    </>
  );
};

export default Navbar;
