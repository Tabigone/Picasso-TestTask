import { HomePage } from "../pages/HomePage/HomePage";
import { PostPage } from "../pages/PostPage/PostPage";
import { Routes, Route, useLocation } from 'react-router-dom';
import "./App.css";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts/:id" element={<PostPage />} />
      </Routes>
    </div>
  );
}

export default App;
