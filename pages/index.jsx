import { useState } from "react";
import { Box, Grid, Flex } from "@chakra-ui/react";
import ArticleBox from "@/molecules/article/ArticleBox";
import { useContext } from "react";
import { AppContext } from "context";
export default function Home() {
  const { posts } = useContext(AppContext);

  return (
    <Box mx={"6%"} my={"2%"}>
      <Flex justify={"center"} align="center">
        <ArticleBox skeleton={true} />
      </Flex>
    </Box>
  );
}
