import React from "react";
import "./App.css";
import dotenv from "dotenv";
import FirebaseLogin from "./components/FirebaseLogin/FirebaseLogin.js";
import Navbar from "./components/Header/Navbar.js";

dotenv.config();

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <FirebaseLogin />
      </header>
    </div>
  );
}

export default App;
