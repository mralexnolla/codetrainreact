import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const Service = () => {
  const [todo, setTodo] = useState(null)
  const {id} = useParams()

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos?id=${id}`);
        const data = await response.json()
        setTodo(data[0])
      } catch (error) {
        console.error(error)
      } 
    }
    getData()
  },[])
   
  return (
    <div>
       <h1>Todo</h1>
      <h4>User ID: {todo && todo.userId}</h4>
      <h4>Title: {todo && todo.title}</h4>
      <h4>Completed : {todo && todo.completed ? "Yes": "No"}</h4>
    </div>
  );
}

export default Service
