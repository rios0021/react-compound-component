import { ChangeEvent, FormEvent, useState } from 'react';

import { useForm } from '../hooks/useForm';

import '../styles/styles.css';
export const RegisterPage = () => {

    const {formData, onChange, resetForm, isValidEmail} = useForm({
        name: 'eduardo',
        email: 'eduardo@gmail.com',
        password1: '123456',
        password2: '123456'
    });
    const{name, email, password1 , password2} = formData;

    const onSubmit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
    }
    return (
        <div>
            <h1>Register Page</h1>
            <form noValidate onSubmit={onSubmit}>
                <input 
                    type="text" 
                    placeholder="Name"
                    name ={'name'}
                    value={name}
                    onChange={onChange}
                    className={`${name.trim().length<=0 && 'has-error'}`} 
                    />
                {name.trim().length<=0  && <span>This field is mandatory</span>}
                <input 
                    type="email" 
                    placeholder="Email"
                    name ={'email'}
                    value={email}
                    onChange={onChange}
                    className={`${!isValidEmail(email) && 'has-error'}`} 
                    />
                { !isValidEmail(email)  && <span>Invalid email</span>}
                {email.trim().length<=0  && <span>This field is mandatory</span>}
                <input 
                    type="password" 
                    placeholder="Password"
                    name ={'password1'}
                    value={password1}
                    onChange={onChange}
                />
                {password1.trim().length<=0  && <span>This field is mandatory</span>}
                {password1.trim().length < 6 && password1.trim().length > 0 && <span>Password needs at least 6 characters</span>}
                <input 
                    type="password" 
                    placeholder="Repeat Password"
                    name ={'password2'}
                    value={password2}
                    onChange={onChange}
                    />
                {password2.trim().length<=0  && <span>This field is mandatory</span>}
                {password2.trim().length > 0 && password1 !== password2  && <span>Passwords must match</span>}
                <button type="submit">Create</button>
                <button type="button" onClick={resetForm}>Reset Form</button>
            </form>
        </div>
    )
}