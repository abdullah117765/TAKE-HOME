import type { FC } from "react";
import "./App.css";
import JoinForm from "../../pages/JoinTeam/JoinForm"
import Agents from "../../pages/Agent/Agents";
import Navbar from "../Navbar/Navbar";
import {
  BrowserRouter,
  Routes,
  Route,     //npm install react-router-dom
} from "react-router-dom"; 

const App: FC = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>   
        <Route path="/" element={< Agents />}/>
        <Route path="/join" element={<  JoinForm/>}/>  
      </Routes>
    </BrowserRouter>
  );
};

export default App;
