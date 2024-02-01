import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Tasks } from "./pages/Tasks";
import { AbousUs } from "./pages/AbousUs";
import { Menu } from "./components/Menu";

function App() {
  return (
    <>
      <BrowserRouter>
      <Menu/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/about-us" element={<AbousUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
