import Task from "./Task";
import "../styles/TaskList.css";
import { useRef } from "react";
import useTaskManage from "../hooks/useTaskManage";
import { useForm } from "react-hook-form";

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
      <div>
        <form onSubmit={handleSubmit(addTask)}>
          <input
            type="text"
            placeholder="Add Task"
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
          {errors.taskName && (
            <span style={{ color: "red" }}>{errors.taskName.message}</span>
          )}
          <input
            type="text"
            placeholder="Add Description"
            ref={inputDescriptionRef}
            {...register("taskDescription")}
          />
          <button type="submit" disabled={!isValid}>
            +
          </button>
        </form>
      </div>
      <ul className="list">
        {tasks.map((task) => (
          <Task
            key={task.id}
            {...task}
            updateTask={updateTask}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
      {/* <pre style={{ color: "red" }}>{JSON.stringify(watch(), null, 2)}</pre> */}
    </>
  );
};

export default TaskList;
