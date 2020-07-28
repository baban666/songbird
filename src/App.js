import React from 'react';
import './App.css';
import Header from "./components/header";
import CustomizedSteppers from "./components/stepper";
import Main from "./components/main";

function App() {
  return (
    <div className="App">
      <header>
          <Header />
          <CustomizedSteppers />
          <Main />
      </header>
    </div>
  );
}

export default App;
