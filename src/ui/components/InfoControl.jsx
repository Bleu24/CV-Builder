function InfoComponent({handleFullNameChange, handleDegreeChange, handleAddressChange, handleEmailChange}) {
    return (
        <div className="info-controls">
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
        </div>
    );
}

export default InfoComponent;