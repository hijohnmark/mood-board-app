import React, { useState } from "react"
import { useOutletContext } from "react-router-dom"

const PostForm = () => {
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")

    const { onAddPost } = useOutletContext()
    

    const handleSubmit = e => {
        e.preventDefault()
        const postData = {
            title: title,
            image: image,
            description: description
        }
    fetch('http://localhost:4000/posts', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postData)
    })
    .then(r => r.json())
    .then(newPost => onAddPost(newPost))
    }

    return (
        <div className="new-post-form">
            <h1>Add something to your Mood Board!</h1>
            <form onSubmit={handleSubmit}>
                
                {/* title input */}
                <input 
                type="text" 
                name="title" 
                placeholder="Add a title here"
                value={title} 
                onChange={e => setTitle(e.target.value)}
                />

                {/* image input */}
                <input
                type="text" 
                name="image" 
                placeholder="Add an image URL here"
                value={image} 
                onChange={e => setImage(e.target.value)}
                />

                {/* description input */}
                <input
                type="text" 
                name="description" 
                placeholder="How does this make you feel?"
                value={description} 
                onChange={e => setDescription(e.target.value)}
                />
                <button type="submit">Add Post</button>
            </form>
        </div>
    )
}

export default PostForm