import { useState, useEffect, useImperativeHandle, forwardRef } from "react";

interface TimerProps {
  initialSeconds: number;
  onExpire: () => void;
}

export interface TimerRef {
  reset: () => void;
}

export const Timer = forwardRef<TimerRef, TimerProps>(
  ({ initialSeconds, onExpire }, ref) => {
    const [seconds, setSeconds] = useState(initialSeconds);

    useImperativeHandle(ref, () => ({
      reset: () => {
        setSeconds(initialSeconds);
      },
    }));

    useEffect(() => {
      if (seconds <= 0) {
        onExpire();
        return;
      }

      const timer = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    }, [seconds, onExpire]);

    const formatTime = (time: number) => {
      const minutes = Math.floor(time / 60);
      const remainingSeconds = time % 60;
      return `${String(minutes).padStart(2, "0")}:${String(
        remainingSeconds
      ).padStart(2, "0")}`;
    };

    return <span className="text-gray-600">{formatTime(seconds)}</span>;
  }
);
