import { useState } from "react";
// import "../styles/ProfessionalControl.css";

function ProfessionalItem({ id }) {
	const [accomplishments, setAccomplishments] = useState([]);

	const handleAddAccomplishment = (e) => {
		e.preventDefault();
		setAccomplishments([...accomplishments, crypto.randomUUID()]);
	};

	return (
		<div key={id}>
			<label htmlFor={`organizationName-${id}`}>
				Organization Name: {" "}
				<input
					type="text"
					name={`organizationName-${id}`}
					id={`organizationName-${id}`}
				/>
			</label>

			<div className="address">
				<label htmlFor={`city-${id}`}>
					City: <input type="text" name={`city-${id}`} id={`city-${id}`} />
				</label>
				<label htmlFor={`state-${id}`}>
					State: <input type="text" name={`state-${id}`} id={`state-${id}`} />
				</label>
				<label htmlFor={`country-${id}`}>
					Country: {" "}
					<input type="text" name={`country-${id}`} id={`country-${id}`} />
				</label>
			</div>

			<div className="date-picker">
				<label htmlFor={`startDate-${id}`}>
					Start Date: {" "}
					<input type="text" name={`startDate-${id}`} id={`startDate-${id}`} />
				</label>
				<label htmlFor={`endDate-${id}`}>
					End Date: {" "}
					<input type="text" name={`endDate-${id}`} id={`endDate-${id}`} />
				</label>
			</div>

			<label htmlFor={`role-${id}`}>
				Role: <input type="text" name={`role-${id}`} id={`role-${id}`} />
			</label>

			<div className="accomplishments">
				<div className="accomplishments__header">
					<h3 className="accomplishments__heading">Accomplishments</h3>
					<button onClick={handleAddAccomplishment}>Add Accomplishment</button>
				</div>

				{accomplishments.map((accomplishment, index) => (
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

function ProfessionalComponent() {
	const [professionalItems, setProfessionalItems] = useState([]);

	const handleAddProfessionalItem = (e) => {
		e.preventDefault();
		setProfessionalItems([...professionalItems, crypto.randomUUID()]);
	};

	return (
		<div className="professional-controls">
			<div>
				<h2>Professional Experience</h2>
				<button onClick={handleAddProfessionalItem}>Add Item</button>
			</div>

			{professionalItems.map((item) => (
				<ProfessionalItem id={item} key={item} />
			))}
		</div>
	);
}

export default ProfessionalComponent;
