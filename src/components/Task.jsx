import { Button, Flex, Input, ListItem, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Task = ({
  id,
  name,
  description,
  isCompleted,
  updateTask,
  deleteTask,
}) => {
  const [taskIsCompleted, setTaskIsCompleted] = useState(isCompleted);
  const [isEditing, setIsEditing] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    watch,
  } = useForm({ mode: "onChange" });

  const handleDelete = () => {
    console.log(id);
    deleteTask(id);
  };
  const handleComplete = () => {
    setTaskIsCompleted(!taskIsCompleted);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    updateTask(id, name, description, isCompleted);
  };

  const onSumbit = () => {
    setIsEditing(false);
    updateTask(id, watch("taskName"), watch("taskDescription"), isCompleted);
  };

  return (
    <>
      <ListItem m={2} listStyleType="none" bg="" borderRadius={10}>
        <Flex w="100%">
          <Flex w="7%" justifyContent="center">
            <Button
              className="completed"
              onClick={handleComplete}
              m={1}
              bg={"#BDE038"}
            >
              {taskIsCompleted ? "◉" : "◯"}
            </Button>
          </Flex>
          {isEditing ? (
            <>
              <form onSubmit={handleSubmit(onSumbit)} style={{ width: "90%" }}>
                <Flex w="100%" justifyContent="center">
                  <Flex w="78%" justifyContent="flex-start" alignItems="center">
                    <Input
                      type="text"
                      defaultValue={name}
                      w="20%"
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
                    {errors.taskName && (
                      <span style={{ color: "red" }}>
                        {errors.taskName.message}
                      </span>
                    )}
                    <Input
                      type="text"
                      defaultValue={description}
                      w="68%"
                      ml={2}
                      {...register("taskDescription")}
                    />
                  </Flex>
                  <Flex w="20%" justifyContent="flex-end">
                    <Button
                      type="submit"
                      disabled={!isValid}
                      w="30%"
                      ml={2}
                      mr={2}
                    >
                      Ok
                    </Button>
                    <Button type="button" onClick={handleCancelEdit} w="30%">
                      Cancel
                    </Button>
                  </Flex>
                </Flex>
              </form>
            </>
          ) : (
            <>
              <Flex
                w="75%"
                justifyContent="flex-start"
                alignItems="center"
                bg={"#A3AB78"}
                borderRadius={15}
              >
                <Text
                  display="inline-block"
                  textDecoration={taskIsCompleted ? "line-through" : "none"}
                  fontWeight="bold"
                  mr={2}
                  ml={2}
                >
                  {name}:
                </Text>
                <Text
                  display="inline-block"
                  textDecoration={taskIsCompleted ? "line-through" : "none"}
                >
                  {description}
                </Text>
              </Flex>
              <Flex w="20">
                <Button
                  className="completed"
                  onClick={handleEdit}
                  m={1}
                  bg={"#BDE038"}
                >
                  🖋️
                </Button>
                <Button
                  className="completed"
                  onClick={handleDelete}
                  m={1}
                  bg={"#BDE038"}
                >
                  ✖️
                </Button>
              </Flex>
            </>
          )}
        </Flex>
      </ListItem>
      {/* <pre style={{ color: "red" }}>{JSON.stringify(watch(), null, 2)}</pre> */}
    </>
  );
};

export default Task;
