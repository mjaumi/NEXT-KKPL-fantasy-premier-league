import React, { useState, MouseEvent } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { AiOutlineDown } from 'react-icons/ai';

// select field's datatype declared here
interface ISelectField {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  isReadOnly: boolean;
  options: Array<string> | Array<Country>;
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
  const [searchValue, setSearchValue] = useState<string>('');

  // function to choose selected option
  const chooseSelectedValue = (value: string) => {
    setSelectedValue(value);
    setSearchValue('');
    setShowOptions(false);
  };

  // handler function to handle click event on select and input field
  const onCLickFieldHandler = (e: MouseEvent<HTMLInputElement>) => {
    if (!isReadOnly) {
      setSelectedValue('');
    }
    setShowOptions((state) => !state);
  };

  // handler function to handle filtering option
  const filterByValueHandler = (country: Country) => {
    return country.name.common
      .toLocaleLowerCase()
      .includes(searchValue.toLocaleLowerCase());
  };

  // rendering the custom select field here
  return (
    <div className='relative'>
      <label htmlFor={`${name}_field`}>
        <span className='font-semibold text-KKPL-light-blue capitalize'>
          {label}
        </span>

        {!isReadOnly && !selectedValue ? (
          <input
            type={type}
            id={`${name}_search_field`}
            onClick={onCLickFieldHandler}
            name={name}
            className='bg-KKPL-dark-blue border border-KKPL-light-blue px-5 py-3 focus:border-KKPL-light-red focus:outline-none w-full font-medium duration-300 cursor-pointer'
            placeholder={placeholder}
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
            autoComplete='off'
            readOnly={isReadOnly}
          />
        ) : (
          <input
            type={type}
            id={`${name}_select_field`}
            onClick={onCLickFieldHandler}
            name={name}
            className='bg-KKPL-dark-blue border border-KKPL-light-blue px-5 py-3 focus:border-KKPL-light-red focus:outline-none w-full font-medium duration-300 cursor-pointer'
            placeholder={placeholder}
            value={selectedValue}
            autoComplete='off'
            readOnly
          />
        )}
      </label>

      <AiOutlineDown
        className={`absolute h-6 w-6 right-3 top-1/2 text-KKPL-light-blue ${
          showOptions && 'rotate-180'
        } duration-300`}
      />

      <div
        className={`absolute top-full bg-white w-full mt-2 text-KKPL-dark-blue ${
          showOptions ? 'scale-y-100' : 'scale-y-0'
        } duration-300 origin-top z-20 max-h-[350px] overflow-y-scroll`}
      >
        {typeof options[0] === 'string' &&
          (options as string[]).map((option: string) => (
            <p
              onClick={() => chooseSelectedValue(option)}
              className='px-3 py-1 font-medium cursor-pointer hover:bg-KKPL-light-grey duration-300'
              key={option}
            >
              {option}
            </p>
          ))}

        {typeof options[0] === 'object' &&
          (options as Country[])
            .filter(filterByValueHandler)
            .sort((a, b) => a.name.common.localeCompare(b.name.common))
            .map((option: Country) => (
              <div
                className='relative flex items-center space-x-2 cursor-pointer hover:bg-KKPL-light-grey duration-300'
                onClick={() => chooseSelectedValue(option.name.common)}
                key={option.cca2}
              >
                <ReactCountryFlag
                  style={{
                    height: '30px',
                    width: '35px',
                  }}
                  countryCode={option.cca2}
                  svg
                />
                <p className='font-medium '>{option.name.common}</p>
                <span className='absolute right-3 text-sm'>{option.cioc}</span>
              </div>
            ))}
      </div>
    </div>
  );
};

export default KKPLSelectField;
