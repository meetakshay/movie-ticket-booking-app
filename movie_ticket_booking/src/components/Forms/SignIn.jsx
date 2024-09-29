

import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { login } from '../../store/formSlice';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const SignIn = () => {
  
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const userData = useSelector((state) => state.form.userData);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            // Handle form submission logic here
            // Example: dispatch(login(values));
          }}
        >
          <Form className="signin-form">
            <h1 className="mb-6 text-3xl font-semibold text-center">Login Form</h1>

            <div className="mb-4 form-group">
              <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
                Email:
              </label>
              <Field
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage name="email" component="div" className="mt-1 text-sm text-red-600" />
            </div>

            <div className="mb-4 form-group">
              <label htmlFor="password" className="block mb-2 font-medium text-gray-700">
                Password:
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage name="password" component="div" className="mt-1 text-sm text-red-600" />
            </div>

            <div className="mb-6 form-group">
              <button
                type="submit"
                className="w-full py-2 font-semibold text-white transition duration-300 bg-blue-500 rounded-lg hover:bg-blue-600"
              >
                Sign In
              </button>
            </div>

            <div className="text-center">
              <p className="text-gray-600">
                If not a registered user...
                <Link to="/signup" className="ml-1 text-blue-500 hover:underline">
                  Sign Up
                </Link>
              </p>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default SignIn;
