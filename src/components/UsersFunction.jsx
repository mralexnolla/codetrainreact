import React, { useState, useEffect } from "react";
import axios from "axios";

const UsersFunction = () => {

     const [users, setUsers] = useState([]);

     const userdata = async () => {
       try {
         let getData = await axios.get(
           "https://jsonplaceholder.typicode.com/users/"
         );
         const data = getData.data;
         setUsers(data);
       } catch (error) {
         console.error(error);
       }
     };

     useEffect(() => {
       userdata();
     }, []);

  return (
    <div className="user-container">
      {users.map((user, index) => {
        return (
          <div className="user-fun-card" key={index}>
            <h3> Name: {user.name}</h3>
            <h3> Username: {user.username}</h3>
            <h3> Email: {user.email}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default UsersFunction
