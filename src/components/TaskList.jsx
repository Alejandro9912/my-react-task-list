import Task from "./Task";
import { useRef } from "react";
import useTaskManage from "../hooks/useTaskManage";
import { useForm } from "react-hook-form";
import { Button, Flex, Input, UnorderedList } from "@chakra-ui/react";

const TaskList = () => {
  const { tasks, createTask, deleteTask, updateTask } = useTaskManage();
  const inputNameRef = useRef();
  const inputDescriptionRef = useRef();
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    watch,
  } = useForm({ mode: "onChange" });

  const addTask = () => {
    const taskName = watch("taskName");
    const taskDescription = watch("taskDescription");
    createTask(taskName, taskDescription);
    inputNameRef.current.value = "";
    inputDescriptionRef.current.value = "";
  };

  return (
    <>
      <Flex w="100%" justifyContent="center" bg={""} alignItems={"center"}>
        {errors.taskName && (
          <span style={{ color: "red" }}>{errors.taskName.message}</span>
        )}
        <form onSubmit={handleSubmit(addTask)} style={{ width: "90%" }}>
          <Input
            m={2}
            w="20%"
            type="text"
            placeholder="Add Task"
            _placeholder={{ color: "black" }}
            ref={inputNameRef}
            {...register("taskName", {
              required: {
                value: true,
                message: "Task name is required",
              },
              minLength: {
                value: 3,
                message: "Min 3 characters",
              },
            })}
          />

          <Input
            w="60%"
            type="text"
            placeholder="Add Description"
            _placeholder={{ color: "black" }}
            ref={inputDescriptionRef}
            {...register("taskDescription")}
          />
          <Button
            type="submit"
            disabled={!isValid}
            w="10%"
            m={4}
            bg={"#BDE038"}
          >
            +
          </Button>
        </form>
      </Flex>
      {
        <Flex w="100%" alignItems={"center"} justifyContent={"center"}>
          <UnorderedList className="list" w="100%">
            {tasks.map((task) => (
              <Task
                key={task.id}
                {...task}
                updateTask={updateTask}
                deleteTask={deleteTask}
              />
            ))}
          </UnorderedList>
        </Flex>
      }
      {/* <pre style={{ color: "red" }}>{JSON.stringify(watch(), null, 2)}</pre> */}
    </>
  );
};

export default TaskList;
