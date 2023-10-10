import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import CreateNewPlayerForm from './CreateNewPlayerForm';

const CreateNewPlayer = () => {
  // rendering create new player component here
  return (
    <section className='w-[90%] lg:w-4/5 max-w-[1500px] mx-auto pb-10'>
      <SectionTitle title='create new player' />

      <CreateNewPlayerForm />
    </section>
  );
};

export default CreateNewPlayer;
