import { useCallback, useState } from "react";

import { useInterval } from "./useInterval";

export const useCountDown = (interval = 1000) => {
  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState<number | null>(null);

  useInterval(() => {
    setCount((prevCount) => {
      if (prevCount === 1) {
        setDelay(null);
        return 0;
      } else {
        return prevCount - 1;
      }
    });
  }, delay);

  const countDown = useCallback((time: number) => {
    if (time) {
      setCount(time);
      setDelay(interval || null);
    } else {
      console.warn("Please pass a target time");
    }
  }, []);

  const pauseCountDown = useCallback(() => {
    setDelay(null);
  }, []);

  return { count, countDown, pauseCountDown };
};
