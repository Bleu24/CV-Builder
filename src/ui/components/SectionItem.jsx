export default function SectionItem({ educationalAchievement=null, role=null, address ,category, orgName, date=null, accomplishments }) {
  return (
    <div className="section-item">
      <div className="org-info">
        <div className="org-info--left">
          {category === 'education' ?
            <>
              <h5 className="achievement">{educationalAchievement}</h5>
              <h5 className="org-name">{orgName}</h5>
            </>
            :
            <>
              <h5 className="org-name">{orgName}</h5>
              <h5>{`${address?.city}, ${address?.state}, ${address?.country}`}</h5>
            </>
          }
        </div>
        <h5 className="org-date">{`${date.startDate} - ${date.endDate}`}</h5>
      </div>
      {role && <h5 className="professional-role">{role}</h5>}
      {accomplishments && (
        <ul>
          {accomplishments.map((accomp) => {
            return <li key={accomp.id}>{accomp.text}</li>;
          })}
        </ul>
      )}
    </div>
  );
}
