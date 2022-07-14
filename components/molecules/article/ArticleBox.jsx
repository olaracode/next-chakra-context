import React from "react";
import { Box, Flex, Skeleton, Text, SkeletonText } from "@chakra-ui/react";
import { useRouter } from "next/router";
const ArticleBox = ({ post, skeleton }) => {
  const router = useRouter();
  return (
    <>
      {skeleton ? (
        <Flex
          w="90%"
          minW="150px"
          minH="300px"
          h="15vw"
          shadow="md"
          bg="brand.card"
          borderRadius={"18px"}
          p="5"
        >
          <Skeleton color="brand.primary" h="20px" w="90%" speed={"1"} />
        </Flex>
      ) : (
        <Flex
          w="15vw"
          minW="150px"
          minH="150px"
          h="15vw"
          shadow="md"
          bg="brand.main"
          borderRadius={"18px"}
          p="5"
          align={"center"}
          justify="center"
          cursor={"pointer"}
          onClick={() => router.push(`article/${post.slug}`)}
        >
          <Box w="100%">
            <Text textAlign={"center"}>{post.title}</Text>
          </Box>
        </Flex>
      )}
    </>
  );
};

export default ArticleBox;
