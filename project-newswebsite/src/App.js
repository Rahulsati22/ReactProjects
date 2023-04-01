import "./App.css";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<News category={"general"} />} />
        <Route path="/health" element={<News category={"health"} />} />
        <Route
          path="/entertainment"
          element={<News category={"entertainment"} />}
        />
        <Route path="/science" element={<News category={"science"} />} />
        <Route path="/technology" element={<News category={"technology"} />} />
        <Route path="/sports" element={<News category={"sports"} />} />
        <Route path="/business" element={<News category={"business"} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
