import "./App.css";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

const tasks = [
  { id: 1, name: "Comprar la comida de mi perro", isCompleted: true },
  { id: 2, name: "Ir al gimnasio", isCompleted: false },
];

function App() {
  return (
    <>
      <Header />
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
