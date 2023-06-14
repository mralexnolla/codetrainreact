/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { deleteUser } from '../redux/userSlice';
import {useDispatch} from 'react-redux'
import { useState } from 'react';
import { updateUser } from '../redux/userSlice';

const Viewuser = ({ item }) => {

    const [isEdit, setIsEdit] = useState(false)

    const [name, setName] = useState(item.name);
    const [gender, setGender] = useState(item.gender);
    const [gen, setGen] = useState(item.gen);

    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteUser(id));
    }

    const handleEdit = (id) => {
        setIsEdit(true)
    }

    const handleUpdate = (id) => {
        const newUser = {id, name, gender, gen }
        dispatch(updateUser(newUser))
        setIsEdit(false);
    }



  return (
    <div>
      <p>Name : {item.name}</p>
      <p>Gender : {item.gender}</p>
      <p>Gen : {item.gen}</p>
      <button onClick={() => handleEdit(item.id)}>Edit</button> &nbsp;
      <button onClick={() => handleDelete(item.id)}>Delete</button>
      <div>
      <br />
      <br />
        {isEdit && (
          <div>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/> &nbsp;
            <select name="gender" value={gender} onChange={(e)=>setGender(e.target.value)}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select> &nbsp;
            <input type="number" name="gen" value={gen} onChange={(e)=>setGen(e.target.value)}/> &nbsp;
            <button onClick={() => handleUpdate(item.id)}>Update</button>

          </div>
        )}
      </div>
    </div>
  );
};

export default Viewuser
