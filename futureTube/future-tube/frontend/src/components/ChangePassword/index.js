import React, { useState }  from 'react';
import { useDispatch } from "react-redux";
import ChangePasswordForm from './style';

export function ChangePassword(props) {

  const initialState = {
    confirmEmail: '',
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

  return (
    <ChangePasswordForm
    confirmNewPassword={form.confirmEmail}
    onChange={handleChange}
    onSubmit={handleSubmit}
    />

  );
} 
