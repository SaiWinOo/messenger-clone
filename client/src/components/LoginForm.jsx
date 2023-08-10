import React from 'react';
import Input from "./Input.jsx";
import Button from "./Button.jsx";

const LoginForm = ({setForm}) => {
    return (
        <div className={'w-[400px] h-[300px]'}>
            <Input type={'email'} placeholder={'johndoe@example.com'} onChange={e => console.log(e.target.value)}  label={'Email Address'} id={'email'}/>
            <Input type={'password'} placeholder={'*******'} onChange={e => console.log(e.target.value)}  label={'Password'} id={'password'}/>
            <Button type={'submit'} >Login</Button>
            <div className={'mt-4'}>
                <p className={'text-center text-gray-600'}>Don't have an account? <span onClick={()=> setForm('register')} className={'text-blue-400 cursor-pointer'}>Signup here!</span></p>
            </div>
        </div>
    );
};

export default LoginForm;