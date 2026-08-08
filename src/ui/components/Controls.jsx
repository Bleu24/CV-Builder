export default function Controls({
  fullName,
  degree,
  handleFullNameChange,
  handleDegreeChange,
}) {
  return (
    <div className="controls">
      <h1>Controls</h1>
      <form action="">
        <label>
          Full name:{" "}
          <input
            onChange={handleFullNameChange}
            value={fullName}
            type="text"
            id="first-name"
            name="first-name"
          />
        </label>
        <label>
          Degree:{" "}
          <input
            onChange={handleDegreeChange}
            value={degree}
            type="text"
            id="degree"
            name="degree"
          />
        </label>
      </form>
    </div>
  );
}
