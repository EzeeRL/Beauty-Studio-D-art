import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/nav";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
