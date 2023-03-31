import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthenticationForm from "./AuthenticationForm";
import * as auth from '../utils/Auth'
import '../index.css'



function Register({isOpen, status}) {
    const [formValue, setFormValue] = useState({
        email: '',
        password: '',
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
        auth.signup(formValue)
            .then((res) => {
                isOpen(true)
                status(false)
                navigate('/sign-in', { replace: true });
            }
            )
            .catch((err) => {
                isOpen(true)
                status(true)
                console.log(err)
            })
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