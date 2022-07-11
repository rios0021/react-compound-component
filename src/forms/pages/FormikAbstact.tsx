import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import '../styles/styles.css';
import { MyTextInput, MySelect, MyCheckbox} from '../components';



interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
    terms: false,
    jobType: ''
}


export const FormikAbstract = () => {

    return (
        <div>
            <h1>Formik Abstract</h1>

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
                            <MyTextInput 
                                label="First Name" 
                                name={"firstName"}
                                placeholder="John"
                            />
                            <MyTextInput 
                                label="Last Name" 
                                name={"lastName"}
                                placeholder="Wick"
                            />
                            <MyTextInput 
                                label="Email" 
                                name={"email"}
                                placeholder="puppies@gmail.com"
                                type="email"
                            />
                            
                            
                            <MySelect  name="jobType" label={"jobType"}>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="senior">Senior</option>
                            </MySelect>

                            <MyCheckbox label={"Terms & Conditions"} name={"terms"}/>
                            
                            <button type='submit'>Submit</button>
                        </Form>
                    )
                }
                
            </Formik>



            
        </div>
    )
}