import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css'
import AuthenticationForm from "./AuthenticationForm";
import * as auth from '../utils/Auth'

function Login({ handleLogin }) {
    const [formValue, setFormValue] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormValue({
            ...formValue,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formValue.email || !formValue.password) {
            return;
        }
        auth.signin(formValue.email, formValue.password)
            .then(() => {
                handleLogin(formValue.email);
                navigate('/');
            })
            .catch(err => console.log(err));
    }

    return (
        <AuthenticationForm
            title="Вход"
            buttonText="Войти"
            loginLink={false}
            formValue={formValue}
            handleChange={handleChange}
            onSubmit={handleSubmit}
        />
    );
}

export default Login;