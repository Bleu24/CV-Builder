import "./App.css";
import Controls from "./ui/components/Controls";
import Page from "./ui/components/Page";
import { useState } from "react";

function App() {
  const initialInfo = {
    fullName: "",
    telNo: "09275483895",
    degree: "Bachelor of Science in Computer Science",
    address: "Bacoor City, Cavite",
    email: "bryanreamillo2403@gmail.com",
  };

  const [info, setInfo] = useState(initialInfo);

  const handleFullNameChange = (e) =>
    setInfo({ ...info, fullName: e.target.value });
  const handleDegreeChange = (e) =>
    setInfo({ ...info, degree: e.target.value });

  return (
    <>
      <Controls
        // fullName={info.fullName}
        // degree={info.degree}
        handleFullNameChange={handleFullNameChange}
        handleDegreeChange={handleDegreeChange}
      />
      <Page info={info} />
    </>
  );
}

export default App;
