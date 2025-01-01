import React, {
  useRef,
  useState,
  useImperativeHandle,
  forwardRef,
} from "react";
import { OTPDigit } from "./otp-digit";
import { OTPInputProps, OTPInputRef } from "./types";

export const OTPInput = forwardRef<OTPInputRef, OTPInputProps>(
  ({ length = 4, onComplete }, ref) => {
    const [otp, setOtp] = useState<string[]>(new Array(length).fill(""));
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    useImperativeHandle(ref, () => ({
      reset: () => {
        setOtp(new Array(length).fill(""));
        inputRefs.current[0]?.focus();
      },
    }));

    const handleChange = (value: string, index: number) => {
      if (isNaN(Number(value))) return;

      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value !== "" && index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }

      if (newOtp.every((digit) => digit !== "")) {
        onComplete(newOtp.join(""));
      }
    };

    const handleKeyDown = (
      e: React.KeyboardEvent<HTMLInputElement>,
      index: number
    ) => {
      if (e.key === "Backspace" && index > 0 && !otp[index]) {
        inputRefs.current[index - 1]?.focus();
      }
    };

    return (
      <div className="flex justify-center space-x-2" dir="ltr">
        {otp.map((digit, index) => (
          <OTPDigit
            key={index}
            value={digit}
            onChange={(value) => handleChange(value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            inputRef={(el) => {
              inputRefs.current[index] = el;
            }}
            autoFocus={index === 0}
          />
        ))}
      </div>
    );
  }
);
