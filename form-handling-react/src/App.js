// src/App.js

import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/FormikForm';

function App() {
  return (
    <div className="max-w-md mx-auto mt-10">
      <h2>Controlled Registration Form</h2>
      <RegistrationForm />
      <h2 className="mt-10">Formik Registration Form</h2>
      <FormikForm />
    </div>
  );
}

export default App;