import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Posts = () => {
    const [post, setPost] = useState(null)
    const {id} = useParams()

    useEffect(() => {
        const getComments = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/comments?id=${id}`)
                const data = await response.json()
                console.log(data)
                setPost(data[0]);
            } catch (error) {
                console.error(error)
            }
        }
        getComments();
    },[])
    
  return (
    <div>
       <h1>Comments Details </h1>
      <ul>
        <li>
          <div>Name: {post && post.name}</div>
        </li>
        <li>
          <div>email: {post && post.email}</div>
        </li>
        <li>
          <div>
            Comments: {post && post.body}
          </div>
        </li>
      </ul>
      
    </div>
  );
}

export default Posts
