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

        setTitle("")
        setImage("")
        setDescription("")
    }

    return (
        <div className="new-post-form">
            <h1>add something to your mood board</h1>
            <br></br>
            <form onSubmit={handleSubmit}>
                
                {/* title input */}
                <input 
                type="text" 
                name="title" 
                placeholder="add a title here"
                value={title} 
                onChange={e => setTitle(e.target.value)}
                />

                {/* image input */}
                <input
                type="text" 
                name="image" 
                placeholder="add an image URL here"
                value={image} 
                onChange={e => setImage(e.target.value)}
                />

                {/* description input */}
                <input
                type="text" 
                name="description" 
                placeholder="how does this make you feel?"
                value={description} 
                onChange={e => setDescription(e.target.value)}
                />
                <button type="submit">add post</button>
            </form>
        </div>
    )
}

export default PostForm