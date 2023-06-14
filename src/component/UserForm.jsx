/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { createUser } from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import Viewuser from "./Viewuser";

const UserForm = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [gen, setGen] = useState("");

  const dispatch = useDispatch();
  const data = useSelector((store) => store.userStore.userFromeSlice);

  console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser({ id: uuid(), name, gender, gen }));
    setName("");
    setGender("");
    setGen("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <br />
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <br />
        <br />
        <label>Gender</label> &nbsp;
        <select name="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value=""></option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <br />
        <br />
        <label>Gen</label> <br />
        <input
          type="number"
          name="gen"
          value={gen}
          onChange={(e) => setGen(e.target.value)}
        />{" "}
        <br />
        <br />
        <input type="submit" value="Submit" />
        <br />
        <hr />
        <br />
      </form>
      <div>
        {data.map((item, idx) => {
          return (
            <div key={item.id + idx}>
              <Viewuser item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserForm;
