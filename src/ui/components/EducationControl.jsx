import { useState } from 'react';
import '../styles/EducationControl.css';

function EducationComponent() {

    const [educationItems, setEducationItems] = useState([]);

    const handleAddEducationItem = () => {
        setEducationItems([...educationItems, crypto.randomUUID()])
    }

    return (
        <div className="education-controls">
            <div>
                <h2>Education</h2>
                <button onClick={handleAddEducationItem}>Add Item</button>
            </div>

            {
                educationItems.map(eI => (
                    <div key={eI}>
                        <label htmlFor={`schoolName-${eI}`}>
                            School Name: {" "}
                            <input type="text" name={`schoolName-${eI}`} id={`schoolName-${eI}`} />
                        </label>
                        <label htmlFor={`highestAchievement-${eI}`}>
                            Highest Education: {" "}
                            <input type="text" name={`highestAchievement-${eI}`} id={`highestAchievement-${eI}`} />
                        </label>
                        {/* TODO: add date picker */}
                    </div>

                ))
            }

        </div>
    );
}

export default EducationComponent;