import React from 'react';

interface IInputField {
  name: string;
  label: string;
  type: string;
  placeholder: string;
}

const KKPLInputField = ({ name, label, type, placeholder }: IInputField) => {
  // rendering custom input field component here
  return (
    <label htmlFor={`${name}_field`}>
      <span className='font-semibold text-KKPL-light-blue capitalize'>
        {label}
      </span>
      <input
        type={type}
        id={`${name}_field`}
        name={name}
        className='bg-KKPL-dark-blue border border-KKPL-light-blue px-5 py-3 focus:border-KKPL-light-red focus:outline-none w-full font-medium duration-300'
        placeholder={placeholder}
        autoComplete='off'
      />
    </label>
  );
};

export default KKPLInputField;
