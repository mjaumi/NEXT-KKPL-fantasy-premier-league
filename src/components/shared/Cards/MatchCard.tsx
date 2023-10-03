import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import KKPLImage from '../KKPLImage';
import KKPLButton from '../KKPLButton';

// match card team datatype declared here
interface IMatchCardTeam {
  teamName: string;
  teamLogo: string;
  runs?: number;
  wickets?: number;
  oversPlayed?: number;
}

// match card datatype declared here
interface IMatchCard {
  matchNo: string;
  date: string;
  time: {
    localTime: string;
    localDate: string;
  };
  venue: string;
  team1: IMatchCardTeam;
  team2: IMatchCardTeam;
  result?: {
    winingTeam: string;
    wickets?: number;
    runs?: number;
  };
  hasFinished: boolean;
}

const MatchCard = ({ matchData }: { matchData: IMatchCard }) => {
  // destructuring the match data object here
  const { matchNo, date, time, venue, team1, team2, result, hasFinished } =
    matchData;

  // rendering match card component here
  return (
    <div className='border-2 border-KKPL-light-red rounded-xl overflow-hidden'>
      {hasFinished && result && (
        <p className='bg-KKPL-light-red text-center py-1 text-sm'>
          <span className='font-semibold'>{result.winingTeam}</span> by{' '}
          {result.wickets && (
            <>
              <span className='font-semibold'>7</span> wickets
            </>
          )}
          {result.runs && (
            <>
              <span className='font-semibold'>7</span> runs
            </>
          )}
        </p>
      )}

      <div className='grid grid-cols-4 gap-10 p-5'>
        <div className='flex flex-col justify-between'>
          <div>
            <p className='text-lg'>{date}</p>
            <h3 className='text-2xl font-bold text-KKPL-light-red'>
              Match #{matchNo}
            </h3>
          </div>
          <div>
            <p className='text-sm text-KKPL-light-red'>{venue}</p>
            <p className='text-sm font-bold text-KKPL-medium-grey uppercase'>
              <span className='text-KKPL-light-red'>{time.localTime} </span>
              {time.localDate}
            </p>
          </div>
        </div>

        <div className='space-y-3 col-span-2'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <div className='w-[60px]'>
                <KKPLImage
                  src={team1.teamLogo}
                  alt={`${team1.teamName} logo`}
                />
              </div>
              <h2
                className={`text-2xl font-bold ml-3 uppercase ${
                  result
                    ? result.winingTeam.includes(team1.teamName.split(' ')[0])
                      ? 'text-KKPL-light-blue'
                      : 'text-KKPL-medium-grey'
                    : 'text-KKPL-light-blue'
                }`}
              >
                {team1.teamName}
              </h2>
            </div>

            {team1.runs && (
              <div className='flex items-end'>
                <h3
                  className={`text-3xl font-bold ${
                    result &&
                    result.winingTeam.includes(team1.teamName.split(' ')[0])
                      ? 'text-KKPL-light-red'
                      : 'text-KKPL-medium-grey'
                  }`}
                >
                  {team1.runs} {team1.wickets !== 5 && `/${team1.wickets}`}
                </h3>
                <p className='ml-1 text-sm text-KKPL-light-grey'>
                  Ov: {team1.oversPlayed}/10
                </p>
              </div>
            )}
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <div className='w-[60px]'>
                <KKPLImage
                  src={team2.teamLogo}
                  alt={`${team2.teamName} logo`}
                />
              </div>
              <h2
                className={`text-2xl font-bold ml-3 uppercase ${
                  result
                    ? result.winingTeam.includes(team2.teamName.split(' ')[0])
                      ? 'text-KKPL-light-blue'
                      : 'text-KKPL-medium-grey'
                    : 'text-KKPL-light-blue'
                }`}
              >
                {team2.teamName}
              </h2>
            </div>

            {team2.runs && (
              <div className='flex items-end'>
                <h3
                  className={`text-3xl font-bold ${
                    result &&
                    result.winingTeam.includes(team2.teamName.split(' ')[0])
                      ? 'text-KKPL-light-red'
                      : 'text-KKPL-medium-grey'
                  }`}
                >
                  {team2.runs} {team2.wickets !== 5 && `/${team2.wickets}`}
                </h3>
                <p className='ml-1 text-sm text-KKPL-medium-grey'>
                  Ov: {team2.oversPlayed}/10
                </p>
              </div>
            )}
          </div>
        </div>

        {hasFinished ? (
          <div className='flex justify-end items-center'>
            <KKPLButton>
              View Details
              <BsArrowRight className='w-7 h-7 ml-2' />
            </KKPLButton>
          </div>
        ) : (
          <div className='flex justify-end items-center'>
            <KKPLButton>
              Match centre
              <BsArrowRight className='w-7 h-7 ml-2' />
            </KKPLButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default MatchCard;
