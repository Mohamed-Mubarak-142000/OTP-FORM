import { useState } from "react";
import { PhoneInput } from "react-international-phone";

const CountrySelectPhone = () => {
  const [phone, setPhone] = useState("");

  const handlePhoneChange = (phone: string) => {
    setPhone(phone);
    console.log(phone);
  };
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4">OTP Form</h1>

      <PhoneInput
        defaultCountry="ar"
        value={phone}
        onChange={handlePhoneChange}
        autoFocus
        charAfterDialCode=" - "
        // countrySelectorStyleProps={{
        //   className:
        //     "border border-red-700 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500",
        // }}
        defaultMask="+54 9 11 2345-6789"
        // dialCodePreviewStyleProps={{
        //   className:
        //     " rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500",
        // }}
        inputProps={{
          className:
            "border border-gray-300 ms-2 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500",
        }}

        // disableDialCodeAndPrefix                      // true===> remove dial code and prefix
        // disableCountryGuess={true}                   // true===> remove country guess
        // disableCountryCode                          // true===> remove country code
        // disableFocusAfterCountrySelect             // true===> remove focus after country select
        // disableDialCodePrefill                    // true==> remove dial code prefill
        // disableFormatting={true}                 // true===> remove formatting (45) 4554
        // forceDialCode={true}                    // true===> force dial code , you cannot remove dial code
        // inputClassName="w-full border-2 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
      />
    </div>
  );
};

export default CountrySelectPhone;
