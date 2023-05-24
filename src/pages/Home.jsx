import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"


const Home = () => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response  = await fetch(`https://jsonplaceholder.typicode.com/comments`)
        const data = await response.json()
        setComments(data);
      } catch (error) {
        console.error(error)
      }
    }
    fetchPost()
  },[])
   console.log(comments);
  return (
    <div>
        <h3>Comments from Json place holder</h3>
        {
         
          comments.map((item) => {
             console.log(item)
            return (
              <div key={item.id}>
                <ul>
                  <li>
                    <p>User ID: {item.id}</p>
                    Name: <Link to={`/${item.id}`}>{item.name}</Link>
                  </li>
                </ul>
              </div>
            );
          })
          }
             
    </div>
  )
}

export default Home
