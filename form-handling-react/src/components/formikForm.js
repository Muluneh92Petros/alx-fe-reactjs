// src/components/FormikForm.js

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

function FormikForm() {
  return (
    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        // Simulate API call
        console.log('User Registered:', values);
      }}
    >
      {() => (
        <Form className="space-y-4">
          <div>
            <label htmlFor="username">Username:</label>
            <Field
              type="text"
              id="username"
              name="username"
              className="border rounded p-2 w-full"
            />
            <ErrorMessage name="username" component="div" className="text-red-500" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <Field
              type="email"
              id="email"
              name="email"
              className="border rounded p-2 w-full"
            />
            <ErrorMessage name="email" component="div" className="text-red-500" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <Field
              type="password"
              id="password"
              name="password"
              className="border rounded p-2 w-full"
            />
            <ErrorMessage name="password" component="div" className="text-red-500" />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default formikForm;
