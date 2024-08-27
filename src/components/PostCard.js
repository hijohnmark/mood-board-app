import React from "react";

function PostCard({title, image, description}) {
  return (
    <li className="card">
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <p>{description}</p>
      <button onClick={() => console.log(`You just tried to delete ${title}. You sure 'bout that?`)}>delete</button>
    </li>
  );
}

export default PostCard;