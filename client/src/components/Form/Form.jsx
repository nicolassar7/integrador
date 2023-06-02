import { useState } from "react";
import validation from "../validation";
import style from './Form.module.css'

const Forms = ({login}) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setErrors(validation({...userData,[event.target.name]: event.target.value }))
    setUserData({ ...userData,[event.target.name]: event.target.value,})
};

const handleSubmit = (event)=>{
    event.preventDefault();
    login(userData)
};  

  return (
    <div className={style.form}>
      <form>
        <h1 className="text">Sign in</h1>
        <label htmlFor="email">Email: </label>
        <input
          onChange={handleChange}
          value={userData.email}
          type="text"
          name="email"
        />
        {errors.e1 ? (<p>{errors.e1}</p>)
        : errors.e2 ? (<p>{errors.e2}</p>) 
        : (<p>{errors.e3}</p>)
        }
        <hr />

        <label htmlFor="password">Password: </label>
        <input
          onChange={handleChange}
          value={userData.password}
          type="password"
          name="password"
        />
        {
            errors.p1 ? <p>{errors.p1}</p> : (<p>{errors.p2}</p>)
        }
        <br />
        <button onClick={handleSubmit} type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default Forms;
