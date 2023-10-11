'use client';

import { Form, Formik } from 'formik';
import React from 'react';
import KKPLInputField from '../shared/Inputs/KKPLInputField';
import KKPLButton from '../shared/Buttons/KKPLButton';
import SectionTitle from '../shared/SectionTitle';
import { signinFormSchema } from '@/schema';

const SigninForm = () => {
  // rendering sign in form component here
  return (
    <section className='h-screen w-full'>
      <div className='w-[90%] md:w-4/5 h-fit mx-auto'>
        <SectionTitle title='Sign into your account' />
      </div>
      <div className='w-[90%] md:w-4/5 xl:w-2/5 mx-auto p-5 bg-KKPL-dark-purple border border-KKPL-light-red mt-20'>
        <div className='mb-10'>
          <h1 className='text-KKPL-light-blue uppercase text-2xl md:text-4xl font-semibold'>
            sign in
          </h1>
          <p className='text-xs md:text-sm text-KKPL-light-grey'>
            Sign in to your account using email and password here...
          </p>
        </div>

        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={signinFormSchema}
          onSubmit={(values) => console.log(values)}
        >
          <Form className='space-y-5'>
            <div>
              <KKPLInputField
                name='email'
                type='text'
                label='Email'
                placeholder='Enter Your Email Here...'
              />
            </div>

            <div>
              <KKPLInputField
                name='password'
                type='password'
                label='Password'
                placeholder='Enter Your Password Here...'
              />
            </div>

            <div className='pt-5'>
              <KKPLButton type='submit' additionalClassNames='w-full'>
                Sign In
              </KKPLButton>
            </div>
          </Form>
        </Formik>
      </div>
    </section>
  );
};

export default SigninForm;
