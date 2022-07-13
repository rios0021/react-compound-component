import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { MyTextInput } from '../components';

import '../styles/styles.css';


export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Register Formik Page</h1>
            <Formik  
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: ''
                }} 
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema= {
                    Yup.object({
                        name: Yup.string()
                                .min(2, 'At least 2 letters needed')
                                .max(15, 'Name must be 15 characters or less')
                                .required('Name is required'),
                        email: Yup.string()
                                .email('Invalid email')
                                .required('Email is required'),
                        password1: Yup.string()
                                .min(6, 'Minimum 6 characters long')
                                .required('Password is required'),
                        password2: Yup.string()
                                .oneOf([Yup.ref('password1'), null], 'Passwords must match')
                                .required('Password is required'),
                })}
                >
                {
                    (formik) => (
                        <Form>
                            <MyTextInput label={'Name'} name={'name'} placeholder="Eduardo"/>
                            <MyTextInput label={'Email'} name={'email'} placeholder="algo@algo.com" type="email"/>
                            <MyTextInput label={'Password'} name={'password1'} type="password" placeholder="******"/>
                            <MyTextInput label={'Confirm Password'} name={'password2'} type="password" placeholder="******"/>
                            <button type="submit">Create</button>
                            <button type="button" onClick={formik.handleReset} >Reset Form</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
        
    )
}