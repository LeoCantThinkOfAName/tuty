import { useCallback, useEffect, useState } from "react";

let interval: NodeJS.Timer;
export const useCountDown = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    return () => {
      clearInterval(interval);
    };
  }, []);

  const countDown = useCallback((seconds: number) => {
    setCount(seconds);

    interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount === 1) {
          clearInterval(interval);
        }
        return prevCount - 1;
      });
    }, 1000);
  }, []);

  return { count, countDown };
};
