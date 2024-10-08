import React from "react";
import PostCard from "./PostCard";

function PostList({ posts }) {
  return (
    <ul className="cards">
      {
      posts.map(post => {
        return (
          <PostCard 
          key={post.id}
          title={post.title}
          image={post.image}
          description={post.description}/>
        )
      })
    }
    </ul>
  );
}

export default PostList;