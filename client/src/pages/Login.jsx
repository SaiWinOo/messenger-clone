import React, {useState} from 'react';
import LoginForm from "../components/LoginForm.jsx";
import RegisterForm from "../components/RegisterForm.jsx";

const Login = () => {

    const [form, setForm] = useState('login');

    return (
        <div className={'flex justify-center items-center h-screen w-screen'}>

            {form === 'login' && <LoginForm setForm={setForm} />}
            {form === 'register' && <RegisterForm setForm={setForm}/>}
        </div>
    );
};

export default Login;