import React from "react";
import { Button } from "@chakra-ui/react";

const CustomButton = ({ content, bg, ftColor, hover, ...props }) => {
  return (
    <Button
      {...props}
      bg={bg ? bg : "brand.main"}
      _hover={hover && { bg: "brand.light", color: "black" }}
      _focus={{ border: "none" }}
      color={ftColor ? ftColor : "white"}
    >
      {content}
    </Button>
  );
};

export default CustomButton;
