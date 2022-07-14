import React, { useContext } from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  Icon,
} from "@chakra-ui/react";
import CustomButton from "@/atoms/CustomButton";
import { faBars, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AppContext } from "context";
const Navbar = () => {
  const { isDarkTheme, setDarkTheme } = useContext(AppContext);
  const logo = "/assets/imgs/techielogo.svg";
  return (
    <Box w="100%" bg="brand.card" shadow={"md"}>
      <Flex justify={"space-between"} h={"60px"} mx={"6%"} align="center">
        <Flex justify={"center"} align="center" gap="3">
          <Image src={logo} h="30px" />
          <Text
            as="p"
            fontSize="16px"
            cursor="pointer"
            color={"brand.main"}
            fontWeight={"bold"}
          >
            Techie
          </Text>
        </Flex>
        <Flex gap={2} align="center" display={{ base: "none", md: "flex" }}>
          <Button bg="none" onClick={() => setDarkTheme(!isDarkTheme)}>
            <FontAwesomeIcon icon={faMoon} />
          </Button>
          <CustomButton bg="none" hover={false} content="About" />
          <CustomButton bg="none" content="Login" hover="true" />
          <CustomButton ftColor={"white"} hover={true} content="register" />
        </Flex>
        <Box display={{ sm: "block", md: "none", lg: "none", xl: "none" }}>
          <Menu>
            <MenuButton
              border="2px solid"
              borderColor="brand.main"
              py="10px"
              px="15px"
              borderRadius="8px"
            >
              <FontAwesomeIcon icon={faBars} />
            </MenuButton>
            <MenuList
              p={1}
              py={3}
              bg={"brand.card"}
              borderColor="transparent"
              shadow={"md"}
            >
              <MenuItem
                _hover={{ color: "text.hover" }}
                borderRadius="8px"
                onClick={() => setDarkTheme(!isDarkTheme)}
              >
                <Flex gap={2} w="100%" align="center">
                  <FontAwesomeIcon icon={faMoon} />
                  <Text>Theme</Text>
                </Flex>
              </MenuItem>
              <MenuItem _hover={{ color: "text.hover" }} borderRadius="8px">
                About
              </MenuItem>
              <MenuItem _hover={{ color: "text.hover" }} borderRadius="8px">
                Login
              </MenuItem>
              <MenuItem
                my="3"
                _hover={{ color: "text.hover" }}
                borderRadius="8px"
                bg={"brand.main"}
              >
                <Text textAlign={"center"} w="100%">
                  Register
                </Text>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
