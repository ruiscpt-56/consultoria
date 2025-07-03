import HomePage from "./HomePage";
import HomePageEN from "./HomePageEN";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/en" element={<HomePageEN />} />
      </Routes>
    </Router>
  );
}

export default App;
