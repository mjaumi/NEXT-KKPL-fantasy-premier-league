import React, { useState, FocusEvent } from 'react';
import { AiOutlineDown } from 'react-icons/ai';

// select field's datatype declared here
interface ISelectField {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  isReadOnly?: boolean;
  options: Array<string>;
}

const KKPLSelectField = ({
  name,
  label,
  type,
  placeholder,
  isReadOnly,
  options,
}: ISelectField) => {
  // integration of react hooks here
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>('');

  // function to choose selected option
  const chooseSelectedValue = (value: string) => {
    setSelectedValue(value);
    setShowOptions(false);
  };

  // rendering the custom select field here
  return (
    <div className='relative'>
      <label htmlFor={`${name}_field`}>
        <span className='font-semibold text-KKPL-light-blue capitalize'>
          {label}
        </span>

        <input
          type={type}
          id={`${name}_field`}
          onClick={() => setShowOptions((state) => !state)}
          name={name}
          className='bg-KKPL-dark-blue border border-KKPL-light-blue px-5 py-3 focus:border-KKPL-light-red focus:outline-none w-full font-medium duration-300 cursor-pointer'
          placeholder={placeholder}
          value={selectedValue}
          autoComplete='off'
          readOnly={isReadOnly ? isReadOnly : true}
        />
      </label>

      <AiOutlineDown
        className={`absolute h-6 w-6 right-3 top-1/2 text-KKPL-light-blue ${
          showOptions && 'rotate-180'
        } duration-300`}
      />

      <div
        className={`absolute top-full bg-white w-full mt-2 text-KKPL-dark-blue ${
          showOptions ? 'scale-y-100' : 'scale-y-0'
        } duration-300 origin-top z-20`}
      >
        {options.map((option) => (
          <p
            onClick={() => chooseSelectedValue(option)}
            className='px-3 py-1 font-medium cursor-pointer hover:bg-KKPL-light-grey duration-300'
            key={option}
          >
            {option}
          </p>
        ))}
      </div>
    </div>
  );
};

export default KKPLSelectField;
