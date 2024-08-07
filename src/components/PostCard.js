import React from "react";

function PostCard({title, image, description}) {
  return (
    <li className="card">
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <p>{description}</p>
    </li>
  );
}

export default PostCard;