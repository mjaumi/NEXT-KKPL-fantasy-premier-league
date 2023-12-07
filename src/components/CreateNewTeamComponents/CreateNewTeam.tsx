import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import CreateNewTeamForm from './CreateNewTeamForm';

const CreateNewTeam = () => {
  // rendering create new team component here
  return (
    <section className='w-[90%] lg:w-4/5 max-w-[1500px] mx-auto pb-10'>
      <SectionTitle title='Create New Team' />

      <CreateNewTeamForm />
    </section>
  );
};

export default CreateNewTeam;
