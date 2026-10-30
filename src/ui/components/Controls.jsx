import '../styles/Controls.css';
import EducationComponent from './EducationControl';

export default function Controls({
  handleFullNameChange,
  handleDegreeChange,
  handleAddressChange,
  handleEmailChange
}) {
  // TODO: Add new control for education and pro exp
  
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

        <EducationComponent/>
      </form>
    </div>
  );
}
