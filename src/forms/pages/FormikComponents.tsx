import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import '../styles/styles.css';


interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
    terms: false,
    jobType: ''
}


export const FormikComponents = () => {

    return (
        <div>
            <h1>Formik Components</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '', 
                }}
                onSubmit={ (values) => {
                    console.log(values);
                }}
                validationSchema={
                    Yup.object({
                        firstName: Yup.string()
                                    .max(15, 'Should be 15 characters or less')
                                    .required('Required'),
                        lastName: Yup.string()
                                    .max(15, 'Should be 15 characters or less')
                                    .required('Required'),
                        email: Yup.string()
                                    .email('Must to be a valid email')
                                    .required('Required'),
                        terms: Yup.boolean()
                                    .oneOf([true], 'Need to accept terms'),
                                    jobType: Yup.string()
                                    .notOneOf(['designer'], 'Option not permited')
                                    .required('Required')
                })}
            >
                {
                    (formik) => (
                        <Form>
                            <label htmlFor="firstName">First Name</label>
                            <Field name="firstName" type="text" placeholder="First Name"/>
                            <ErrorMessage name="firstName" component="span"/>
                            
                            <label htmlFor="lastName">Last Name</label>
                            <Field name="lastName" type="text"/>
                            <ErrorMessage name="lastName" component="span"/>
                            
                            <label htmlFor="email">Email Address</label>
                            <Field name="email" type="email"/>
                            <ErrorMessage name="email" component="span"/>
                            
                            <label htmlFor="jobType">Job Type</label>
                            <Field  name="jobType" as="select">
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="senior">Senior</option>
                            </Field>
                            <ErrorMessage name="jobType" component="span"/>

                            <label>
                                <Field name="terms" type="checkbox"/>
                                Terms and conditions
                            </label>
                            <ErrorMessage name="terms" component="span"/>
                            
                            <button type='submit'>Submit</button>
                        </Form>
                    )
                }
                
            </Formik>



            
        </div>
    )
}