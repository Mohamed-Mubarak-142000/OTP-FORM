export interface OTPInputProps {
  length?: number;
  onComplete: (otp: string) => void;
}

export interface OTPInputRef {
  reset: () => void;
}