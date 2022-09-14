import React from "react";
import { useState } from "react";
import './formagain.css';
import axios from "axios";

export default function Form(){
const initialValues = {username:"",emailid:"",password:""}
const [formValues,setFormValues] = useState(initialValues);

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('https://jsonplaceholder.typicode.com/posts',formValues)
    .then(res =>{
        console.log(res)
    })
    .catch(err=>{
        console.log(err)
    })
  }

return(
    <>
        <form>
            <div className="Final">
                <label>Username</label>
                <input type="text" 
                name="username"
                className="inputFields"
                value={formValues.username}
                onChange={handleChange}/>
            <br/>
            
            <label>Email Id</label>
                <input type="text" 
                name = "emailid"
                className="inputFields"
                value={formValues.emailid}
                onChange={handleChange}/>
           <br/>
            
            <label>Password</label>
                <input type="password" 
                name="password"
                className="inputFields"
                value={formValues.password}
                onChange={handleChange}/>
             <br/>
             <button onSubmit={handleSubmit}>Submit</button>
             </div>
        </form>
    </>
)
}