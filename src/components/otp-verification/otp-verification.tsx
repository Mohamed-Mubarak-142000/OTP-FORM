import { useState, useRef } from "react";
import { X } from "lucide-react";
import { OTPInput } from "../otp-input/otp-input";
import { Timer } from "../timer/otp-timer";
import { OTPInputRef } from "../otp-input/types";
import { TimerRef } from "../timer/types";
import { OTPVerificationProps } from "./types";

export const OTPVerification = ({
  phoneNumber,
  onClose,
  onVerify,
}: OTPVerificationProps) => {
  const [isResending, setIsResending] = useState(false);
  const otpInputRef = useRef<OTPInputRef>(null);
  const timerRef = useRef<TimerRef>(null);

  const handleResend = async () => {
    setIsResending(true);
    otpInputRef.current?.reset();
    timerRef.current?.reset();
    setTimeout(() => {
      setIsResending(false);
    }, 1000);
  };

  const handleExpire = () => {
    // Timer expired logic here
  };

  return (
    <div
      className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg"
      dir="rtl"
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">رمز التحقق</h2>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <p className="text-gray-600 mb-6">
        لقد أرسلنا رمز التحقق المكون من 6 أرقام إلى رقم هاتفك المنتهي بـ
        <span className="font-semibold"> {phoneNumber}</span>
      </p>

      <div className="mb-6">
        <OTPInput ref={otpInputRef} onComplete={onVerify} />
      </div>

      <div className="text-center space-y-4">
        <div className="text-sm text-gray-600">
          سينتهي رمز التحقق خلال:{" "}
          <Timer ref={timerRef} initialSeconds={90} onExpire={handleExpire} />
        </div>

        <button
          onClick={handleResend}
          disabled={isResending}
          className="text-orange-500 hover:text-orange-600 text-sm font-medium disabled:opacity-50"
        >
          {isResending ? "جاري إعادة الإرسال..." : "إعادة إرسال الرمز"}
        </button>
      </div>
    </div>
  );
};
