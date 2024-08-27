// import logo from './logo.svg';
// import './css/index.css';
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";


function App() {
  
const [posts, setPosts] = useState([])

useEffect(() => {
  fetch('http://localhost:4000/posts')
  .then(r => r.json())
  .then(data => setPosts(data))
}, [])

const onAddPost = newPost => setPosts([...posts, newPost])

  return (
    <>
      <header>
        <NavBar />
      </header>
      <Outlet context={{posts, onAddPost}}/>
    </>
  );
}

export default App;
