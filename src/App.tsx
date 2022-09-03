import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";
// import UserList from "./components/UserList";
import Users from "./components/Users";
// import AuthUser from "./components/AuthUser";
import Login from "./components/Login";
import Navabr from "./components/Navbar";
import UserDetail from "./components/UserDetail";
// import Counter from "./components/Counter";
// import Youtube from "./components/Youtube";
// import ClassComp from "./components/ClassComp";
// import FunComp from "./components/FunComp";

function App() {
  return (
    <>
      <Navabr />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
