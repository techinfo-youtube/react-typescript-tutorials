import "./App.css";
import UserList from "./components/UserList";
// import AuthUser from "./components/AuthUser";
// import Login from "./components/Login";
// import Counter from "./components/Counter";
// import Youtube from "./components/Youtube";
// import ClassComp from "./components/ClassComp";
// import FunComp from "./components/FunComp";

function App() {
  return (
    <>
      <div className="container">
        {/* <ClassComp name="Techinfoyt" age={26} />
        <FunComp name="Techinfoyt" age={26} /> */}
        {/* <Counter />
        <Youtube /> */}
        {/* <Login /> */}
        {/* <AuthUser /> */}
        <UserList />
      </div>
    </>
  );
}

export default App;
