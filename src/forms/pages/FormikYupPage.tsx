import { useFormik } from "formik";
import * as Yup from "yup";
import '../styles/styles.css';


interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}


export const FormikYupPage = () => {

    
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '', 
        },
        onSubmit: values => {
            console.log(values)
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                        .max(15, 'Should be 15 characters or less')
                        .required('Required'),
            lastName: Yup.string()
                        .max(15, 'Should be 15 characters or less')
                        .required('Required'),
            email: Yup.string()
                        .email('Must to be a valid email')
                        .required('Required'),
        })
    });


    return (
        <div>
            <h1>Formik Yup</h1>
            <form noValidate onSubmit={formik.handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input 
                    type="text" 
                    {...formik.getFieldProps('firstName')}
                    />
                {formik.touched.firstName && formik.errors.firstName && <span>{formik.errors.firstName}</span>}
                <label htmlFor="lastName">Last Name</label>
                <input 
                    type="text" 
                    {...formik.getFieldProps('lastName')}
                    />
                    {formik.touched.lastName && formik.errors.lastName && <span>{formik.errors.lastName}</span>}
                
                <label htmlFor="email">Email Address</label>
                <input 
                    type="text" 
                    {...formik.getFieldProps('email')}
                    />
                {formik.touched.email && formik.errors.email && <span>{formik.errors.email}</span>}

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}