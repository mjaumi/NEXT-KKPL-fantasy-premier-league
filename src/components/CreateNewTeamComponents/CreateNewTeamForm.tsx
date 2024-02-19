'use client';

import { Form, Formik } from 'formik';
import KKPLInputField from '../shared/Inputs/KKPLInputField';

const CreateNewTeamForm = () => {
  // rendering create new team form component here
  return (
    <div className='w-full md:w-4/5 mx-auto mt-8 p-5 bg-KKPL-dark-purple border border-KKPL-light-red'>
      <Formik initialValues={{}} onSubmit={(values) => console.log(values)}>
        {() => (
          <Form className='space-y-5'>
            <div>
              <KKPLInputField
                type='text'
                name='country'
                label={`Teams's Name`}
                placeholder={`Enter Team's Name Here...`}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateNewTeamForm;
