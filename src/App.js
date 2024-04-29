import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Data from "./Data";

function App() {
  return (
    <>
      <h1>App</h1>
      <Data />
      <BrowserRouter>
        <Routes> 
          <Route path="/"/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
