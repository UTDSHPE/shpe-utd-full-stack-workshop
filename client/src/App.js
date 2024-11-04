import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pages to be routed by the React router
import Home from "./components/Home";
import Post from "./components/Post";
import Profile from "./components/Profile";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/post/:id" element={<Post />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
