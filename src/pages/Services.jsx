import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"


const Services = () => {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos')
      const data = await response.json()
      setTodos(data)
    }
    fetchData()
  }, [])
  
  return (
    <div>
      <h1>Todos API from json place holder</h1>
      {
        todos.map((item) => {
          return (
            <div key={item.id}>
              <ul>
                <li>
                  <div>
                    <p>User ID: {item.userId}</p>
                    Title: <Link to={`/services/${item.id}`}>{item.title}</Link>
                  </div>
                </li>
              </ul>
            </div>
          );
        })
      }
    </div>
  )
}

export default Services
