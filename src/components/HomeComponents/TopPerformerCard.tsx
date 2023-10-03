import React from 'react';
import KKPLImage from '../shared/KKPLImage';

// datatype of top performer declared here
interface ITopPerformer {
  title: string;
  name: {
    firstName: string;
    lastName: string;
  };
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
      className={`border-2 rounded-xl bg-KKPL-dark-blue flex justify-between items-end ${
        borderColor ? borderColor : 'border-KKPL-light-red'
      } ${additionalClassName} cursor-pointer hover:scale-110 duration-300`}
    >
      <div className='xl:flex-1 flex flex-col justify-between h-full py-5 pl-5'>
        <div>
          <h3
            className={`text-lg xl:text-2xl font-semibold ${
              textColor ? textColor : 'text-KKPL-light-red'
            }`}
          >
            #01 {title}
          </h3>
        </div>
        <div>
          <p className='text-base xl:text-2xl font-light'>
            {name.firstName}{' '}
            <span className='font-semibold'>{name.lastName}</span>
          </p>

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
                  className={`text-lg xl:text-3xl font-bold ${
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
      <div className={`${imgStyle}`}>
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
