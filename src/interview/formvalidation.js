import { useState, useEffect } from "react";
import './field.css'
import axios from 'axios';
function Formvalidation() {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [isSubmit, setIsSubmit] = useState(false);
  const postValues = {user:'',title:''};
  const [valuesToSet,setValues] = useState(postValues);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(!isSubmit);
    sendRequest()
  };
const sendRequest = (postValues)=>{
  axios.post('https://jsonplaceholder.typicode.com/posts',postValues)
  .then(res =>
    console.log('res')
  ).catch(err =>
    console.log(err))
}
  useEffect(() => {
    setFormValues(formValues);
    setValues(valuesToSet);
    console.log(valuesToSet);
  }, []);

  return (
    <div className="container">
      <form >
        <h1>Login Form</h1>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <button className="fluid ui button blue" onSubmit={handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Formvalidation;
