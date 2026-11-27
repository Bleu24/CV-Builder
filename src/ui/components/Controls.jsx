import '../styles/Controls.css';
import EducationComponent from './EducationControl';
import ProfessionalComponent from './ProfessionalControl';
import InfoComponent from './InfoControl';

export default function Controls({
  headerProps,
  educationProps,
  professionalProps,
  genericProps
}) {
  // TODO: Add new control for education and pro exp
  const { handleFullNameChange, handleDegreeChange, handleAddressChange, handleEmailChange } = headerProps;

  const { 
    handleAddEducationItem, 
    educationItems, 
    handleAddAwards, 
    handleSchoolChange, 
    handleAchievementChange, 
    handleAwardChange,
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

  const { handleStartDateChange, handleEndDateChange, handleDeleteItem } = genericProps;


  return (
    <div className="controls">
      <h1>Controls</h1>
      <form action="">
        <InfoComponent
          handleFullNameChange={handleFullNameChange}
          handleDegreeChange={handleDegreeChange}
          handleAddressChange={handleAddressChange}
          handleEmailChange={handleEmailChange}
        />

        <EducationComponent
          onClick={handleAddEducationItem}
          educationItems={educationItems}
          onAddAwardClick={handleAddAwards}
          handleSchoolChange={handleSchoolChange}
          handleAchievementChange={handleAchievementChange}
          handleStartDateChange={handleStartDateChange}
          handleEndDateChange={handleEndDateChange}
          handleAwardChange={handleAwardChange}
          handleDeleteItem={handleDeleteItem}
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
          handleDeleteItem={handleDeleteItem}
        />
      </form>
    </div>
  );
}
