export default function SectionItem({ educationalAchievement=null, role=null, address ,category, orgName, date=null, accomplishments }) {
  return (
    <div className="section-item">
      <div className="org-info">
        <div className="org-info--left">
          {category === 'education' ?
            <>
              <h5 className={educationalAchievement ? "achievement" : "no-info"}>{educationalAchievement || "Bachelor of Science in what?"}</h5>
              <h5 className={orgName ? "org-name" : "no-info"}>{orgName || "Your university"}</h5>
            </>
            :
            <>
              <h5 className={orgName ? "org-name" : "no-info"}>{orgName || "Your company"}</h5>
              <h5 className={(address?.city && address.state && address.country) || "no-info" }>{ (address?.city && address.state && address.country) ? `${address?.city}, ${address?.state}, ${address?.country}` : "Your address"}</h5>
            </>
          }
        </div>
        <h5 className={(date?.startDate && date?.endDate) ? "org-date" : "no-info"}>{ (date?.startDate || date?.endDate) ? `${date?.startDate || "Start Date"} - ${date?.endDate || "End Date"}` : "Put date"}</h5>
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
