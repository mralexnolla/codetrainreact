import React, {useState} from 'react'

const FunctinalForm = () => {

    const [data, setData] = useState({name:"", email:"", pword:""});

    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const pword = e.target.password.value;

        setData({
            ...data,
            name,
            email,
            pword
            
        })

        e.target.name.value = "";
        e.target.email.value = "";
        e.target.password.value = "";

        

    }
  return (
    <div>
      <h2>Functional Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Enter name" /> <br />
        <br />
        <input type="email" name="email" placeholder="Enter Email" /> <br />
        <br />
        <input type="password" name="password" placeholder="password" />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>

      <hr />
      <hr />

      <h1>{data.name}</h1>
      <h1>{data.email}</h1>
      <h1>{data.pword}</h1>
    </div>
  );
}

export default FunctinalForm
