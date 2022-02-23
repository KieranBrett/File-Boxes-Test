import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar'


import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/about">
          </Route>
          <Route path="/register" element={<Register />}/>
          <Route path="/" element={<Home />}/>
        </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <h1>Home</h1>
}

function Register() {
  return <h1>Register</h1>
}

export default App;
