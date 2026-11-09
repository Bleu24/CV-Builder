import { useState } from 'react';
import '../styles/EducationControl.css';

function EducationItem({ id, awards, onClick, handleSchoolChange, handleAchievementChange, handleStartDateChange, handleEndDateChange, handleAwardChange }) {
    

    return (
        <div className="educationItem" id={id} key={id}>
            <label htmlFor={`schoolName-${id}`}>
                School Name: {" "}
                <input onChange={handleSchoolChange} type="text" name={`schoolName-${id}`} id={`schoolName-${id}`} />
            </label>
            <label htmlFor={`highestAchievement-${id}`}>
                Highest Education: {" "}
                <input onChange={handleAchievementChange} type="text" name={`highestAchievement-${id}`} id={`highestAchievement-${id}`} />
            </label>

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

            <div className="awards">
                <div className="awards__header">
                    <h3 className='awards__heading'>Awards</h3>
                    <button onClick={onClick}>Add Award</button>
                </div>

                {
                    awards && awards.map((award, idx) => (
                        <label key={award.id}>
                            {`Award ${idx + 1}: `}
                            <input onChange={handleAwardChange} type="text" name={`award-${award.id}`} id={`${award.id}`} />
                        </label>
                    ))
                }

            </div>
        </div>
    );
}

function EducationComponent({ onClick, educationItems, onAddAwardClick, handleSchoolChange, handleAchievementChange, handleStartDateChange, handleEndDateChange, handleAwardChange }) {

    return (
        <div className="education-controls">
            <div>
                <h2>Education</h2>
                <button onClick={onClick}>Add Item</button>
            </div>

            {educationItems.map(educationItem => 
                <EducationItem 
                    id={educationItem.id} 
                    key={educationItem.id} 
                    onClick={onAddAwardClick} 
                    awards={educationItem.awards}
                    handleSchoolChange={handleSchoolChange}
                    handleAchievementChange={handleAchievementChange}
                    handleStartDateChange={handleStartDateChange}
                    handleEndDateChange={handleEndDateChange}
                    handleAwardChange={handleAwardChange}
                />
            )}

        </div>
    );
}

export default EducationComponent;