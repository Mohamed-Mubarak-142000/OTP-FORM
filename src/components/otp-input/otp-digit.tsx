import React from "react";

interface OTPDigitProps {
  value: string;
  onChange: (value: string) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  inputRef: React.Ref<HTMLInputElement>;
  autoFocus?: boolean;
}

export const OTPDigit: React.FC<OTPDigitProps> = ({
  value,
  onChange,
  onKeyDown,
  inputRef,
  autoFocus = false,
}) => {
  return (
    <input
      ref={inputRef}
      type="text"
      maxLength={1}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={onKeyDown}
      autoFocus={autoFocus}
      className="w-12 h-12 text-2xl text-center border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 mx-1"
    />
  );
};
