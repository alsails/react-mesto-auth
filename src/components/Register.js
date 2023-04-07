import { useState } from 'react';
import AuthenticationForm from "./AuthenticationForm";
import '../index.css'



function Register({handleRegister}) {
    const [formValue, setFormValue] = useState({
        email: '',
        password: '',
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
        handleRegister(formValue)
    }

    return (
        <AuthenticationForm
            title="Регистрация"
            buttonText="Зарегистрироваться"
            loginLink={true}
            formValue={formValue}
            handleChange={handleChange}
            onSubmit={handleSubmit}
        />
    );
}

export default Register;