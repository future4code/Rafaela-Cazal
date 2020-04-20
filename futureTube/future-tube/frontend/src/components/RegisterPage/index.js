import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { RegisterForm } from './style';
import { createUser } from '../../actions/user'


export function RegisterPage() {
  const initialState = {
    name: '',
    email: '',
    password: '',
    birthDate: '',
    picture: ''
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
    dispatch(createUser(form.name, form.email, form.password, form.birthDate, form.picture))
    setForm(initialState)
  };

  return (
    <>
      <RegisterForm
        name={form.name}
        email={form.email}
        password={form.password}
        birthDate={form.birthDate}
        picture={form.picture}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
} 