import React from 'react';

const SectionTitle = ({ title }: { title: string }) => {
  // rendering section title component here
  return (
    <div>
      <h1 className='text-2xl md:text-4xl font-extrabold uppercase text-KKPL-light-red border-b-4 border-KKPL-light-red w-fit'>
        #{title}
      </h1>
    </div>
  );
};

export default SectionTitle;
