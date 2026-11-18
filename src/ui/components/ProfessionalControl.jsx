import "../styles/ProfessionalControl.css";

function ProfessionalItem({ 
	id, 
	accomplishments, 
	handleOrgChange, 
	handleStartDateChange,
	handleEndDateChange,
	handleProfAddressChange,
	handleRoleChange 
}) {

	return (
		<div key={id} className="professionalItem" id={id}>
			<label htmlFor={`organizationName-${id}`}>
				Organization Name: {" "}
				<input
					type="text"
					name={`organizationName-${id}`}
					id={`organizationName-${id}`}
					onChange={handleOrgChange}
				/>
			</label>

			<div className="address">
				<label htmlFor="city">
					City: <input onChange={handleProfAddressChange } type="text" name="city" />
				</label>
				<label htmlFor="state">
					State: <input onChange={handleProfAddressChange } type="text" name="state" />
				</label>
				<label htmlFor="country">
					Country: {" "}
					<input onChange={handleProfAddressChange } type="text" name="country" />
				</label>
			</div>

			<div className="date-picker">
				<label htmlFor={`startDate-${id}`}>
					Start Date: {" "}
					<input onChange={handleStartDateChange} type="date" name={`startDate-${id}`} id={`startDate-${id}`} />
				</label>
				<label htmlFor={`endDate-${id}`}>
					End Date: {" "}
					<input onChange={handleEndDateChange} type="date" name={`endDate-${id}`} id={`endDate-${id}`} />
				</label>	
			</div>

			<label htmlFor={`role-${id}`}>
				Role: <input onChange={handleRoleChange} type="text" name={`role-${id}`} id={`role-${id}`} />
			</label>

			<div className="accomplishments">
				<div className="accomplishments__header">
					<h3 className="accomplishments__heading">Accomplishments</h3>
					<button onClick={(e)=>e.preventDefault}>Add Accomplishment</button>
				</div>

				{accomplishments?.map((accomplishment, index) => (
					<label key={accomplishment} htmlFor={`accomplishment-${accomplishment}`}>
						{`Accomplishment ${index + 1}: `}
						<input
							type="text"
							name={`accomplishment-${accomplishment}`}
							id={`accomplishment-${accomplishment}`}
						/>
					</label>
				))}
			</div>
		</div>
	);
}

function ProfessionalComponent({onClick, professionalItems, handleOrgChange, handleStartDateChange, handleEndDateChange, handleProfAddressChange, handleRoleChange}) {

	return (
		<div className="professional-controls">
			<div>
				<h2>Professional Experience</h2>
				<button onClick={onClick}>Add Item</button>
			</div>

			{professionalItems.map((item) => (
				<ProfessionalItem 
					id={item.id} 
					key={item.id} 
					handleOrgChange={handleOrgChange} 
					handleStartDateChange={handleStartDateChange}
					handleEndDateChange={handleEndDateChange}
					handleProfAddressChange={handleProfAddressChange}
					handleRoleChange={handleRoleChange}
				/>
			))}
		</div>
	);
}

export default ProfessionalComponent;
