export interface TimerProps {
  initialSeconds: number;
  onExpire: () => void;
}

export interface TimerRef {
  reset: () => void;
}
