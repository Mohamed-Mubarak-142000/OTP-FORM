export interface OTPVerificationProps {
  phoneNumber: string;
  onClose: () => void;
  onVerify: (otp: string) => void;
}
