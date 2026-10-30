import { useState } from 'react';
import '../styles/EducationControl.css';

function EducationItem({ id }) {
    const [awards, setAwards] = useState([]);

    const handleAddAwards = (e) => {
        e.preventDefault();
        setAwards([...awards, crypto.randomUUID()]);
    }

    return (
        <div key={id}>
            <label htmlFor={`schoolName-${id}`}>
                School Name: {" "}
                <input type="text" name={`schoolName-${id}`} id={`schoolName-${id}`} />
            </label>
            <label htmlFor={`highestAchievement-${id}`}>
                Highest Education: {" "}
                <input type="text" name={`highestAchievement-${id}`} id={`highestAchievement-${id}`} />
            </label>
       
            <div className="date-picker">
                <label htmlFor={`startDate-${id}`}>
                    Start Date: {" "}
                    <input type="date" name={`startDate-${id}`} id={`startDate-${id}`} />
                </label>
                <label htmlFor={`endDate-${id}`}>
                    End Date: {" "}
                    <input type="date" name={`endDate-${id}`} id={`endDate-${id}`} />
                </label>
            </div>

            <div className="awards">
                <div className="awards__header">
                    <h3 className='awards__heading'>Awards</h3>
                    <button onClick={handleAddAwards}>Add Award</button>
                </div>

                {
                    awards.map((award, idx) => (
                        <label key={award}>
                            {`Award ${idx + 1}: `}
                            <input type="text" name={`award-${award}`} id={`award-${award}`} />
                        </label>
                    ))
                }

            </div>
        </div>
    );
}

function EducationComponent() {

    const [educationItems, setEducationItems] = useState([]);

    const handleAddEducationItem = (e) => {
        e.preventDefault();
        setEducationItems([...educationItems, crypto.randomUUID()]);
    }

    return (
        <div className="education-controls">
            <div>
                <h2>Education</h2>
                <button onClick={handleAddEducationItem}>Add Item</button>
            </div>

            {educationItems.map(eI => <EducationItem id={eI} key={eI}/>)}

        </div>
    );
}

export default EducationComponent;