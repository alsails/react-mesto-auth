import { useState } from 'react';
import AuthenticationForm from "./AuthenticationForm";
import '../index.css'

function Login({ handleLogin }) {
    const [formValue, setFormValue] = useState({
        email: '',
        password: ''
    })

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
        handleLogin(formValue.email, formValue.password)
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