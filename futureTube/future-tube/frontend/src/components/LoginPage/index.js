import React, { useState} from 'react'
import { useDispatch} from "react-redux";
import { autenticateLogin } from "../../actions/user";
import { LoginPageStyle } from './style';


export function LoginPage() {

  const initialState = {
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

    dispatch(autenticateLogin (form.email, form.password))
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