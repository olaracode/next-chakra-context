import React from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import CustomButton from "@/atoms/CustomButton";
import { faBars, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStoreActions, useStoreState } from "easy-peasy";

const Navbar = () => {
  const themeSwitch = useStoreActions((actions) => actions.theme.themeSwitch);
  const palette = useStoreState((state) => state.theme.palette);
  return (
    <Box w="100%" bg="brand.card" shadow={"md"}>
      <Flex justify={"space-between"} h={"60px"} mx={"6%"} align="center">
        <Text as="p" fontSize="16px" cursor="pointer">
          Super cool logo 😎😎
        </Text>
        <Flex gap={2} align="center" display={{ base: "none", md: "flex" }}>
          <Button bg="none" onClick={() => themeSwitch(palette)}>
            <FontAwesomeIcon icon={faMoon} />
          </Button>
          <CustomButton
            bg="none"
            ftColor={"black"}
            hover={false}
            content="About"
          />
          <CustomButton
            bg="none"
            ftColor={"black"}
            content="Login"
            hover="true"
          />
          <CustomButton hover={true} content="register" />
        </Flex>
        <Box display={{ sm: "block", md: "none", lg: "none", xl: "none" }}>
          <Menu>
            <MenuButton
              border="2px solid"
              borderColor="brand.main"
              py="10px"
              px="15px"
              borderRadius="8px"
              color="brand.main"
            >
              <FontAwesomeIcon icon={faBars} />
            </MenuButton>
            <MenuList p={1}>
              <MenuItem borderRadius="8px">
                <Flex gap={2} w="100%" align="center">
                  <FontAwesomeIcon icon={faMoon} />
                  Theme
                </Flex>
              </MenuItem>
              <MenuItem borderRadius="8px">About</MenuItem>
              <MenuItem borderRadius="8px">Login</MenuItem>
              <MenuItem borderRadius="8px" bg={"brand.main"}>
                Register
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
