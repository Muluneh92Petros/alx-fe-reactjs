// src/components/FormikForm.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormikForm = () => {
    const initialValues = {
        username: '',
        email: '',
        password: '',
    };

    const validationSchema = Yup.object({
        username: Yup.string().required('Username is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string().required('Password is required'),
    });

    const handleSubmit = (values) => {
        console.log(values);
        // Here you would typically make an API call to register the user
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {() => (
                <Form>
                    <div>
                        <label>
                            Username:
                            <Field type="text" name="username" />
                        </label>
                        <ErrorMessage name="username" component="p" />
                    </div>
                    <div>
                        <label>
                            Email:
                            <Field type="email" name="email" />
                        </label>
                        <ErrorMessage name="email" component="p" />
                    </div>
                    <div>
                        <label>
                            Password:
                            <Field type="password" name="password" />
                        </label>
                        <ErrorMessage name="password" component="p" />
                    </div>
                    <button type="submit">Register</button>
                </Form>
            )}
        </Formik>
    );
};

export default FormikForm;