import "../styles/Page.css";
import Header from "./Header";
import Section from "./Section";
import SectionItem from "./SectionItem";

const sections = [
  {
    id: crypto.randomUUID(),
    category: "Education",
    schools: [
      {
        highestAchievement: "Bachelor of Science in Computer Science",
        schoolName: "Mapua University",
        date: {
          startDate: "Aug 2022",
          endDate: "May 2026",
        },
        awards: [
          {
            id: crypto.randomUUID(),
            text: "Dean’s Lister (1 Term A.Y. 2022-2023, 3 Term A.Y. 2022-2023, 4 Term A.Y. 2023-2024)",
          },
        ],
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    category: "Professional Experience",
    orgs: [
      {
        organizationName: "NCNA",
        address: {
          city: "Daly City",
          state: "California",
          country: "United States of America",
        },
        date: {
          startDate: "Oct 2024",
          endDate: "Apr 2025"
        },
        role: "Quality Assurance Tester",
        accomplishments: [
          {
            id: crypto.randomUUID(),
            text: "Tested multiple features of the company portal (e.g., admin controls) to ensure functionality, responsiveness, and overall system reliability.",
          },
          {
            id: crypto.randomUUID(),
            text: "Ensured consistency and accuracy of data between sandbox and live environments, minimizing discrepancies and deployment risks",
          },
        ],
      },
    ],
  },
];

export default function Page({info}) {
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
