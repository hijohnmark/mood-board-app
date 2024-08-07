import React, {useState, useEffect} from "react";
import PostList from "./PostList";

function MoodBoard() {
const [posts, setPosts] = useState([])

useEffect(() => {
  fetch('http://localhost:4000/posts')
  .then(r => r.json())
  .then(data => setPosts(data))
}, [])

// const onAddPlant = newPost => setPosts([...posts, newPost])

  return (
    <main>
        <PostList posts={posts} />
    </main>
  )
}

export default MoodBoard