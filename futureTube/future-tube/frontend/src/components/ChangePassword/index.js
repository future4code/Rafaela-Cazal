import React, { useState }  from 'react';
import { useDispatch } from "react-redux";
import { ChangerForm } from './style';


export function ChangePassword() {
  const initialState = {
    oldPassword: '',
    newPassword: ''
  }

  const [form, setForm] = useState(initialState)
  
  const dispatch = useDispatch();
  

  const handleChange = (event) => {

    const auxForm = { ...form };
      auxForm[event.target.name] = event.target.value;
        setForm(auxForm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form)
    setForm(initialState)
  };

  return(
    <>
      <RegisterForm
        oldPassword={form.oldPassword}
        newPassword={form.newPassword}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
} 