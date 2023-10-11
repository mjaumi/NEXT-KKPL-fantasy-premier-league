'use client';

import React from 'react';
import KKPLInputField from '../shared/Inputs/KKPLInputField';
import { Formik, Form } from 'formik';
import KKPLButton from '../shared/Buttons/KKPLButton';
import KKPLSelectField from '../shared/Inputs/KKPLSelectField';
import { createPlayerSchema } from '@/schema';

const CreateNewPlayerForm = ({ countries }: { countries: Array<Country> }) => {
  // rendering create new player form component here
  return (
    <div className='w-full md:w-4/5 mx-auto mt-8 p-5 bg-KKPL-dark-purple border border-KKPL-light-red'>
      <Formik
        initialValues={{
          playerFirstName: '',
          playerLastName: '',
          playerPhoto: '',
          playerThumbNail: '',
          country: '',
          playerRole: '',
          playerSubRole: '',
        }}
        validationSchema={createPlayerSchema}
        onSubmit={(values) => console.log(values)}
      >
        <Form className='space-y-5'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div>
              <KKPLInputField
                type='text'
                name='playerFirstName'
                label={`player's first name`}
                placeholder={`Enter Player's First Name Here...`}
              />
            </div>
            <div>
              <KKPLInputField
                type='text'
                name='playerLastName'
                label={`player's last name`}
                placeholder={`Enter Player's Last Name Here...`}
              />
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div>
              <KKPLInputField
                type='text'
                name='playerPhoto'
                label={`player's photo URL`}
                placeholder={`Enter Player's Photo URL Here...`}
              />
            </div>
            <div>
              <KKPLInputField
                type='text'
                name='playerThumbNail'
                label={`player's thumbnail URL`}
                placeholder={`Enter Player's Thumbnail URL Here...`}
              />
            </div>
          </div>

          <div>
            <KKPLSelectField
              type='text'
              name='country'
              label={`player's country`}
              placeholder={`Enter Player's Country Here...`}
              options={countries}
              isReadOnly={false}
            />
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div>
              <KKPLSelectField
                type='text'
                name='playerRole'
                label={`player's Role`}
                placeholder={`Enter Player's Role Here...`}
                options={['Batsman', 'Bowler', 'All Rounder']}
                isReadOnly
              />
            </div>
            <div>
              <KKPLSelectField
                type='text'
                name='playerSubRole'
                label={`player's Sub Role`}
                placeholder={`Enter Player's sub Role Here...`}
                options={[
                  'Right Handed Batsman',
                  'Left Handed Batsman',
                  'All Rounder',
                ]}
                isReadOnly
              />
            </div>
          </div>

          <div className='flex justify-end mt-10'>
            <KKPLButton type='submit'>Add player</KKPLButton>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default CreateNewPlayerForm;
