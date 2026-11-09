import '../styles/Controls.css';
import EducationComponent from './EducationControl';
import ProfessionalComponent from './ProfessionalControl';

export default function Controls({
  headerProps,
  educationProps
}) {
  // TODO: Add new control for education and pro exp
  const { handleFullNameChange, handleDegreeChange, handleAddressChange, handleEmailChange } = headerProps;
  const { 
    handleAddEducationItem, 
    educationItems, 
    handleAddAwards, 
    handleSchoolChange, 
    handleAchievementChange, 
    handleStartDateChange, 
    handleEndDateChange, 
    handleAwardChange 
  } = educationProps;


  return (
    <div className="controls">
      <h1>Controls</h1>
      <form action="">
        <label>
          Full name:{" "}
          <input
            onChange={handleFullNameChange}
            type="text"
            id="first-name"
            name="first-name"
          />
        </label>
        <label>
          Degree:{" "}
          <input
            onChange={handleDegreeChange}
            type="text"
            id="degree"
            name="degree"
          />
        </label>
        <label>
          Address:{" "}
          <input
            onChange={handleAddressChange}
            type="text"
            id="address"
            name="address"
          />
        </label>
        <label>
          Email:{" "}
          <input
            onChange={handleEmailChange}
            type="email"
            id="email"
            name="email"
          />
        </label>

        <EducationComponent
          onClick={handleAddEducationItem}
          educationItems={educationItems}
          onAddAwardClick={handleAddAwards}
          handleSchoolChange={handleSchoolChange}
          handleAchievementChange={handleAchievementChange}
          handleStartDateChange={handleStartDateChange}
          handleEndDateChange={handleEndDateChange}
          handleAwardChange={handleAwardChange}
        />

        <ProfessionalComponent />
      </form>
    </div>
  );
}
