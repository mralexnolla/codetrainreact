/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { createUser, updateUser, deleteUser } from "../slice/userslice";
import { useDispatch, useSelector } from "react-redux";
import {v4 as uuid} from 'uuid'

const UserForm = () => {
    const [name, setName] = useState("")

    const [isEdit, setIsEdit] = useState(false)
    const [update, setUpdate] = useState(null)
    const [editedID, setEditedId] = useState("")

    const [uname, setUname] = useState(null)

    const dispatch = useDispatch()
    const appointments = useSelector((store) => store.users.users)

    const handleSubmit = (e) => {
        e.preventDefault()
        const newUser = {id: uuid(), name}
        dispatch(createUser(newUser))
        setName("")
    }

    const handleEdit = (id) =>{
        setIsEdit(true)
        setUpdate(getClientName(id))
        setEditedId(id)
    }

    const getClientName = (appointId) =>{
        const clientName = appointments.find((item) => item.id === appointId);
        return clientName ? clientName.name : ''
    }

    const handleUpdate = (id) =>{
          setUname(update);
          const updatedDetails = { id, uname:update };
          dispatch(updateUser(updatedDetails));
          setIsEdit(false);
          setUpdate("");
          setEditedId("");
    }

    const handleDelet = (id) => {
        dispatch(deleteUser(id));
    }

    

  return (
    <div>

       <form onSubmit={handleSubmit}>
        <label>Name</label>   <br /><br />
        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>   <br /><br />
        <input type="submit" value="Create User" />
        
       </form>
       <br />
       <hr /><hr />
        <div>
            {
                appointments.map((appointment, idx) => {
                    return (
                      <div key={appointment.id + idx}>
                        <h3>Appointment number {idx + 1}</h3>
                        <p>Name : {appointment.name}</p>
                        <button onClick={() => handleEdit(appointment.id)}>
                          Edit
                        </button>
                        <button onClick={() => handleDelet(appointment.id)}>Delete</button>

                        {isEdit && appointment.id === editedID && (
                          <div><br />
                            <input
                              type="text"
                              name="name"
                              value={update}
                              onChange={(e) => setUpdate(e.target.value)}
                            />
                            &nbsp; <button onClick={() => handleUpdate(appointment.id)}>Update</button>
                          </div>
                        )}
                      </div>
                    );
                })
            }
        </div>
      
    </div>
  )
}

export default UserForm
