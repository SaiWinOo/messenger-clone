import React from 'react';
import Input from "./Input.jsx";
import Button from "./Button.jsx";

const RegisterForm = ({setForm}) => {
    return (
        <div className={'w-[400px] h-[300px]'}>
            <Input type={'Name'} placeholder={'John Doe'} onChange={e => console.log(e.target.value)}
                   label={'Name'} id={'Name'}/>
            <Input type={'email'} placeholder={'johndoe@example.com'} onChange={e => console.log(e.target.value)}
                   label={'Email Address'} id={'email'}/>
            <Input type={'password'} placeholder={'*******'} onChange={e => console.log(e.target.value)}
                   label={'Password'} id={'password'}/>
            <Button type={'submit'}>Login</Button>
            <div className={'mt-4'}>
                <p className={'text-center text-gray-600'}>Already have an account? <span onClick={()=> setForm('login')} className={'text-blue-400 cursor-pointer'}>Login here!</span></p>
            </div>
        </div>
    );
};

export default RegisterForm;