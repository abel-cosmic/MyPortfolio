"use"
import React, { useState, useEffect } from "react";

const Countdown = ({ targetDate }: { targetDate: string }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  }, [calculateTimeLeft]);

return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 justify-center">
        {Object.keys(timeLeft).map((interval: string) => (
            <div key={interval} className="flex flex-col items-center gap-1">
                <span className="text-sm font-medium tracking-wide text-gray-500 md:text-base dark:text-gray-400">
                    {interval.charAt(0).toUpperCase() + interval.slice(1)}
                </span>
                <span className="text-xl font-semibold md:text-2xl">
                    {timeLeft[interval as keyof typeof timeLeft]}
                </span>
            </div>
        ))}
    </div>
);
};

export default Countdown;
