import React, { useState }  from 'react';
import { useDispatch } from "react-redux";
import ChangePasswordForm from './style';

export function ChangePassword(props) {

  const initialState = {
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '',
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
    oldPassword={form.oldPassword}
    newPassword={form.newPassword}
    confirmNewPassword={form.confirmNewPassword}
    onChange={handleChange}
    onSubmit={handleSubmit}
    />

  );
} 
