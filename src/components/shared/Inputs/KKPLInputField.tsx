import { useField } from 'formik';
import React from 'react';

// input field's datatype declared here
interface IInputField {
  name: string;
  label: string;
  type: string;
  placeholder: string;
}

const KKPLInputField = ({ name, label, type, placeholder }: IInputField) => {
  // integration of formik hooks here
  const [field, meta] = useField({ name });

  // rendering custom input field component here
  return (
    <label htmlFor={`${name}_field`}>
      <span className='font-semibold text-KKPL-light-blue capitalize'>
        {label}
      </span>
      <input
        type={type}
        id={`${name}_field`}
        className='bg-KKPL-dark-blue border border-KKPL-light-blue px-5 py-3 focus:border-KKPL-light-red focus:outline-none w-full font-medium duration-300'
        placeholder={placeholder}
        autoComplete='off'
        {...field}
      />

      {meta.error && meta.touched && (
        <span className='inline-block text-KKPL-light-red text-sm ml-2'>
          {meta.error}
        </span>
      )}
    </label>
  );
};

export default KKPLInputField;
