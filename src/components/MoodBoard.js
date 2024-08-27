import { useOutletContext } from "react-router-dom";
import PostList from "./PostList";

function MoodBoard() {

  const { posts } = useOutletContext()

  return (
    <main>
      <h1>My Mood Board</h1>
        <PostList posts={posts}/>
    </main>
  )
}

export default MoodBoard