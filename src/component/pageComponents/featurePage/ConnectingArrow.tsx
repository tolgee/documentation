import clsx from 'clsx';
import React from 'react';

type Props = {
  gridRowStart: string;
  gridRowEnd: string;
  className?: string;
};

export const ConnectingArrow: React.FC<Props> = ({
  gridRowStart,
  gridRowEnd,
  className,
}) => {
  return (
    <div
      className={clsx([
        'flex items-center ml-[-60px] relative pointer-events-none',
        className,
      ])}
      style={{
        gridRowStart,
        gridRowEnd,
        gridColumn: 1,
        color: 'var(--text-secondary)',
      }}
    >
      <div className="relative max-h-[1000px] h-[40%]">
        <svg
          className=""
          width="80"
          height="100%"
          viewBox="0 0 109 432"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M107.484 2.22632C107.484 2.22632 2.82817 47.1822 2.47977 208.071C2.10988 378.886 106.559 429.805 106.559 429.805"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinejoin="round"
            strokeDasharray="10 8"
          />
        </svg>
        <svg
          width="15"
          viewBox="0 0 30 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-[-7px] bottom-[-4px]"
        >
          <path
            d="M1 24L27 25L16 1.5"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};
