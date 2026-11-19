import '../styles/Controls.css';
import EducationComponent from './EducationControl';
import ProfessionalComponent from './ProfessionalControl';

export default function Controls({
  headerProps,
  educationProps,
  professionalProps
}) {
  // TODO: Add new control for education and pro exp
  const { handleFullNameChange, handleDegreeChange, handleAddressChange, handleEmailChange } = headerProps;
  const { 
    handleAddEducationItem, 
    educationItems, 
    handleAddAwards, 
    handleSchoolChange, 
    handleAchievementChange, 
    handleStartDateChange, //can migrate this elsewhere, to avoid confusion
    handleEndDateChange, 
    handleAwardChange 
  } = educationProps;
  const {
    handleOrganizationItem,
    professionalItems,
    handleOrgChange,
    handleProfAddressChange,
    handleRoleChange,
    handleAddAccomplishments,
    handleAccomplishmentChange 
  } = professionalProps;


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

        <ProfessionalComponent 
          onClick={handleOrganizationItem}
          professionalItems={professionalItems}
          handleOrgChange={handleOrgChange}
          handleStartDateChange={handleStartDateChange}
          handleEndDateChange={handleEndDateChange}
          handleProfAddressChange ={handleProfAddressChange}
          handleRoleChange={handleRoleChange}
          handleAddAccomplishments={handleAddAccomplishments}
          handleAccomplishmentChange={handleAccomplishmentChange}
        />
      </form>
    </div>
  );
}
