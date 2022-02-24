import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar'


import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Button } from '@mui/material';

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/about">
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}


function Home() {
  return <Button onClick={onSubmit}>Click Me</Button>

  async function onSubmit(e) {
    await fetch("http://localhost:5000/record/addRandom", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ value: 1 }),
    }).catch(error => {
      window.alert(error);
      return;
    });
  }
}


function Register() {
  return <h1>Register</h1>
}

export default App;
