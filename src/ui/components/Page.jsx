import "../styles/Page.css";
import Header from "./Header";
import Section from "./Section";
import SectionItem from "./SectionItem";
 
export default function Page({info, sections}) {
  return (
    <div className="cv">
      <Header user={info} />
      {sections.map((section) => {
        return (
          <Section key={section.id} category={section.category}>
            <hr></hr>
            {section.category === "Education" ? (
              section.schools && section.schools.length > 0 ? (
                section.schools.map((school) => {
                  return (
                    <SectionItem
                      educationalAchievement ={school.highestAchievement}
                      category={section.category.toLowerCase()}
                      key={school.schoolName}
                      orgName={school.schoolName}
                      date={school.date}
                      accomplishments={school.awards}
                    />
                  );
                })
              ) : (
                <p>
                  <i>No Education</i>
                </p>
              )
            ) : section.orgs && section.orgs.length > 0 ? (
              section.orgs.map((org) => {
                return (
                  <SectionItem
                    category={section.category.toLowerCase()}
                    address={org.address}
                    key={org.organizationName}
                    orgName={org.organizationName}
                    date={org.date}
                    accomplishments={org.accomplishments}
                    role={org.role}
                  />
                );
              })
            ) : (
              <p>
                <i>No Work Experience</i>
              </p>
            )}
          </Section>
        );
      })}
    </div>
  );
}
