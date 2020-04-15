import React, { useState }  from 'react';
import { useDispatch } from "react-redux";
import { RegisterForm } from './style';


export function RegisterPage() {
  const initialState = {
    name: '',
    birthDate: '',
    email: '',
    password: '',
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
      <RegisterForm
        name={form.name}
        birthDate={form.birthDate}
        email={form.email}
        password={form.password}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
} 