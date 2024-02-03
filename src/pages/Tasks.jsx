import { useState } from "react";
import TaskList from "../components/TaskList";
import Header from "../components/Header";
import { Flex } from "@chakra-ui/react";

export const Tasks = () => {
  const [allTasks, setAllTasks] = useState([]);

  const updateList = (newTaskList) => {
    setAllTasks(newTaskList);
  };

  return (
    <Flex
      alignItems="center"
      justifyContent="space-evenly"
      flexDirection="column"
      h="70%"
      w="90%"
      bg="#818274"
      borderRadius={25}
    >
      <Header />
      {<TaskList tasks={allTasks} updateTaskList={updateList} />}
    </Flex>
  );
};
