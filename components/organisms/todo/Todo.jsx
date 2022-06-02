import React, { useState } from "react";
import { Box, Input, Flex } from "@chakra-ui/react";
import CustomButton from "@/atoms/CustomButton";
import { useStoreActions, useStoreState } from "easy-peasy";
const Todo = () => {
  const add = useStoreActions((actions) => actions.todos.add);
  const todos = useStoreState((state) => state.todos.items);
  console.log(todos)
  const addTodo = () => {
      add(text)
  }
  const [text, setText] = useState("");
  return (
    <Box width="100%" bg={"brand.card"} p={3} shadow={"md"}>
      <Flex justify={"space-around"}>
        <Input
          placeholder="My new Todo"
          w={"90%"}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <CustomButton content="Add" hover="true" onClick={addTodo} />
      </Flex>
      {
          todos && todos.map((item, index) => {
              return(
                  <Box key={index}>
                      {item}
                  </Box>
              )
          })
      }
    </Box>
  );
};

export default Todo;
