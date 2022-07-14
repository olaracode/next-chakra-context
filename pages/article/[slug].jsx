import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "context";
import { useRouter } from "next/router";
import { Box, Image } from "@chakra-ui/react";
const Article = () => {
  const [article, setArticle] = useState(null);
  const { posts } = useContext(AppContext);
  const router = useRouter();
  useEffect(() => {
    if (!router.query.slug) return;
    const slug = router.query.slug;
    if (!posts) return;
    const postResponse = posts.map((post) => {
      console.log(post.attributes);
      if (post.attributes.slug === slug) {
        setArticle(post.attributes);
        console.log(post);
      }
    });
    console.log(postResponse);
  }, [router.query.slug]);
  return (
    <Box>{article && <Image w="100vw" h="400px" src={article.hero} />}</Box>
  );
};

export default Article;
