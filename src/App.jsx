import "./App.css";
import Controls from "./ui/components/Controls";
import Page from "./ui/components/Page";
import { useState } from "react";

function App() {
  const initialInfo = {
    fullName: "",
    telNo: "",
    degree: "",
    address: "",
    email: "",
  };

  const [info, setInfo] = useState(initialInfo);

  const handleFullNameChange = (e) =>
    setInfo({ ...info, fullName: e.target.value });
  const handleDegreeChange = (e) =>
    setInfo({ ...info, degree: e.target.value });
  const handleAddressChange = (e) =>
    setInfo({...info, address: e.target.value });
  const handleEmailChange = (e) =>
    setInfo({ ...info, email: e.target.value });

  return (
    <>
      <Controls
        handleFullNameChange={handleFullNameChange}
        handleDegreeChange={handleDegreeChange}
        handleAddressChange={handleAddressChange}
        handleEmailChange={handleEmailChange}
      />
      <Page info={info} />
    </>
  );
}

export default App;
