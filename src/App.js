import "./App.css";
import "../src/fontawesome-free/css/all.min.css";
import "../src/css/sb-admin-2.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import PortalLayout from "./PortalLayout";
import Home from "./components/Home";
import Books from "./components/Books";
import Addbooks from "./components/Addbooks";
import Allissuedbooks from "./components/Allissuedbooks";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />} />
        <Route path="/portal" element={<PortalLayout />}>
          <Route path="home" element={<Home />}></Route>
          <Route path="books" element={<Books />}></Route>
          <Route path="Addbooks" element={<Addbooks />}></Route>
          <Route path="issuedbooks" element={<Allissuedbooks />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
