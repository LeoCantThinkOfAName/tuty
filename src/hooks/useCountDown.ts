import { useCallback, useEffect, useState } from "react";

let inter: NodeJS.Timer;
export const useCountDown = (interval: number = 1000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    return () => {
      clearInterval(inter);
    };
  }, []);

  const countDown = useCallback((seconds: number) => {
    setCount(seconds);

    inter = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount === 1) {
          clearInterval(inter);
          return 0;
        } else {
          return prevCount - 1;
        }
      });
    }, interval);
  }, []);

  return { count, countDown };
};
