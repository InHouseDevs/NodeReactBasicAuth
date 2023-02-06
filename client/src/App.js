import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Components/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h1>Auth App</h1>
                <a href="/login">Login / Register</a>
              </div>
            }
          />
          <Route
            path="/login"
            element={
              <div>
                <h2>Login</h2>
                <Login />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
