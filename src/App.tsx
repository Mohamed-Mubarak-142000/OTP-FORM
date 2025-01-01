import { OTPVerification } from "./components/otp-verification/otp-verification";
import CountrySelectPhone from "./components/select-country/current-selector";

function App() {
  const handleVerify = (otp: string) => {
    console.log("Verification code:", otp);
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-1/2 mx-auto shadow-lg p-4 rounded-lg flex flex-col gap-5 ">
        <CountrySelectPhone />

        <OTPVerification
          phoneNumber="***1234"
          onClose={() => console.log("Closed")}
          onVerify={handleVerify}
        />
      </div>
    </div>
  );
}

export default App;
