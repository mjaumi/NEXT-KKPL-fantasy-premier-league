import React from 'react';
import { BsDot } from 'react-icons/bs';
import KKPLImage from '../shared/KKPLImage';
import ReactCountryFlag from 'react-country-flag';

// datatype of top performer declared here
interface ITopPerformer {
  title: string;
  name: {
    firstName: string;
    lastName: string;
  };
  countryCode?: string;
  teamName?: string;
  imgSrc: string;
  borderColor?: string;
  textColor?: string;
  additionalClassName?: string;
  imgStyle: string;
  hasPriority?: boolean;
  stats: {
    statName: string;
    statValue: string | number;
  }[];
}

const TopPerformerCard = ({
  title,
  name,
  countryCode,
  teamName,
  imgSrc,
  borderColor,
  textColor,
  hasPriority,
  stats,
  imgStyle,
  additionalClassName,
}: ITopPerformer) => {
  // rendering top performer item component here
  return (
    <div
      className={`border-2 rounded-xl bg-KKPL-dark-blue block 2xl:flex justify-between items-end ${
        borderColor ? borderColor : 'border-KKPL-light-red'
      } ${additionalClassName} cursor-pointer hover:scale-110 duration-300`}
    >
      <div className='xl:flex-1 flex flex-col justify-between h-full py-5 pl-5 pr-5 2xl:pr-0'>
        <div>
          <h3
            className={`text-lg xl:text-2xl font-semibold ${
              textColor ? textColor : 'text-KKPL-light-red'
            }`}
          >
            #01 {title}
          </h3>
        </div>

        <div className='flex justify-center my-2'>
          <div className={`${imgStyle} 2xl:hidden block`}>
            <KKPLImage
              src={imgSrc}
              alt={`${name.firstName} ${name.lastName}'s image`}
              priority={hasPriority && hasPriority}
            />
          </div>
        </div>

        <div>
          <div>
            <p className='text-base xl:text-2xl font-light'>
              {name.firstName}{' '}
              <span className='font-semibold'>{name.lastName}</span>
            </p>
            {countryCode && (
              <div className='flex items-center text-xs md:text-sm text-KKPL-medium-grey'>
                <ReactCountryFlag
                  style={{
                    height: '25px',
                    width: '25px',
                  }}
                  countryCode={countryCode}
                  title={countryCode}
                  svg
                />
                <p className='ml-2'>{countryCode}</p>
                <BsDot className='h-6 w-6' />
                {teamName && <p>{teamName}</p>}
              </div>
            )}
          </div>

          <div className='grid grid-cols-3 mt-5'>
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`${
                  index !== stats.length - 1 &&
                  `border-r ${
                    borderColor ? borderColor : 'border-KKPL-light-red'
                  }`
                } px-2`}
              >
                <p className='text-sm font-semibold'>{stat.statName}</p>
                <h2
                  className={`text-2xl xl:text-3xl font-bold ${
                    textColor ? textColor : 'text-KKPL-light-red'
                  }`}
                >
                  {stat.statValue}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={`${imgStyle} hidden 2xl:block`}>
        <KKPLImage
          src={imgSrc}
          alt={`${name.firstName} ${name.lastName}'s image`}
          priority={hasPriority && hasPriority}
        />
      </div>
    </div>
  );
};

export default TopPerformerCard;
