import React, { useState, useContext } from 'react'
import { useDispatch } from "react-redux";
import { LoginPageStyle } from './style';


export function LoginPage() {
  const initialState = {
    name: '',
    email: '',
    password: ''
  }

  const [form, setForm] = useState(initialState)
  const dispatch = useDispatch()

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
      <LoginPageStyle
        email={form.email}
        password={form.password}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
} 