import "./App.css";
import Controls from "./ui/components/Controls";
import Page from "./ui/components/Page";
import { School } from "./classes/School";
import { useState } from "react";
import { Organization } from "./classes/Organization";
import { save, load } from "./utils";

function App() {
  const initialInfo = {
    fullName: "",
    telNo: "",
    degree: "",
    address: "",
    email: "",
  };

  const initialSections = [
    {
      id: crypto.randomUUID(),
      category: "Education",
      schools: [],
    },
    {
      id: crypto.randomUUID(),
      category: "Professional Experience",
      orgs: [],
    },
  ];

  const [info, setInfo] = useState(load("info") || initialInfo);
  const [sections, setSections] = useState(load("sections") || initialSections);
  const [educationSection, professionalSection] = sections;

  const handleFullNameChange = (e) => {
    const nextInfo = { ...info, fullName: e.target.value };
    setInfo(nextInfo);
    save(nextInfo, sections);
  }

  const handleDegreeChange = (e) => {
    const nextInfo = { ...info, degree: e.target.value };
    setInfo(nextInfo);
    save(nextInfo, sections);
  }

  const handleAddressChange = (e) => {
    const nextInfo = { ...info, address: e.target.value };
    setInfo(nextInfo);
    save(nextInfo, sections);
  }

  const handleEmailChange = (e) => {
    const nextInfo = { ...info, email: e.target.value };
    setInfo(nextInfo);
    save(nextInfo, sections);
  }

  const handleAddEducationItem = (e) => {
    e.preventDefault();

    const nextSections = sections.map(section => {
      if (section.category === "Education") {
        return {
          ...section,
          schools: [...section.schools, new School()]
        }
      } else return section;
    });

    setSections(nextSections);
    save(info, nextSections);
  }

  const handleAddAwards = (e) => {
    e.preventDefault();
    const parentDiv = e.target.closest(".educationItem");
    const nextSections = sections.map(section => {
      if (section.category === "Education") {
        const nextSchools = section.schools.map(school => {
          if (school.id === parentDiv.id) {
            return { ...school, awards: [...school.awards, { id: crypto.randomUUID(), text: "" }] }
          } else return school;
        });

        return { ...section, schools: [...nextSchools] };
      } else return section;
    });

    setSections(nextSections);
    save(info, nextSections);
  }

  const handleSchoolChange = (e) => {
    const parentDiv = e.target.closest(".educationItem");
    const nextSections = sections.map(section => {
      if (section.category === "Education") {
        const nextSchools = section.schools.map(school => {
          if (school.id === parentDiv.id) {
            return { ...school, schoolName: e.target.value };
          } else return school;
        });

        return { ...section, schools: [...nextSchools] };
      } else return section;
    })

    setSections(nextSections);
    save(info, nextSections);
  }

  const handleAchievementChange = (e) => {
    const parentDiv = e.target.closest(".educationItem");
    const nextSections = sections.map(section => {
      if (section.category === "Education") {
        const nextSchools = section.schools.map(school => {
          if (school.id === parentDiv.id) {
            return { ...school, highestAchievement: e.target.value };
          } else return school;
        });

        return { ...section, schools: [...nextSchools] };
      } else return section;
    })

    setSections(nextSections);
    save(info, nextSections);
  }

  const handleStartDateChange = (e) => {
    const parentDiv = e.target.closest(".educationItem") || e.target.closest(".professionalItem");
    const nextSections = sections.map(section => {
      if (section.category === "Education") {
        const nextSchools = section.schools.map(school => {
          if (school.id === parentDiv.id) {
            return { ...school, date: { ...school.date, startDate: e.target.value } };
          } else return school;
        });

        return { ...section, schools: [...nextSchools] };

      } else if (section.category === "Professional Experience") {
        const nextOrgs = section.orgs.map(org => {
          if (org.id === parentDiv.id) {
            return { ...org, date: { ...org.date, startDate: e.target.value } };
          } else return org;
        });

        return { ...section, orgs: [...nextOrgs] }
      } else return section;
    });

    setSections(nextSections);
    save(info, nextSections);
  }

  const handleEndDateChange = (e) => {
    const parentDiv = e.target.closest(".educationItem") || e.target.closest(".professionalItem");
    const nextSections = sections.map(section => {
      if (section.category === "Education") {
        const nextSchools = section.schools.map(school => {
          if (school.id === parentDiv.id) {
            return { ...school, date: { ...school.date, endDate: e.target.value } };
          } else return school;
        });

        return { ...section, schools: [...nextSchools] };

      } else if (section.category === "Professional Experience") {
        const nextOrgs = section.orgs.map(org => {
          if (org.id === parentDiv.id) {
            return { ...org, date: { ...org.date, endDate: e.target.value } };
          } else return org;
        });

        return { ...section, orgs: [...nextOrgs] }
      } else return section;
    });

    setSections(nextSections);
    save(info, nextSections);
  }

  const handleAwardChange = (e) => {
    const parentDiv = e.target.closest(".educationItem");
    const input = e.target;
    const nextSections = sections.map(section => {
      if (section.category === "Education") {
        const nextSchools = section.schools.map(school => {
          if (school.id === parentDiv.id) {
            const nextAwards = school.awards.map(award => {
              if (award.id === input.id) {
                return { ...award, text: e.target.value };
              } else return award;
            });

            return { ...school, awards: [...nextAwards] };
          } else return school;
        });

        return { ...section, schools: [...nextSchools] };
      } else return section;
    })

    setSections(nextSections);
    save(info, nextSections);
  }

  const handleOrganizationItem = (e) => {
    e.preventDefault();

    const nextSections = sections.map(section => {
      if (section.category === "Professional Experience") {
        return {
          ...section,
          orgs: [...section.orgs, new Organization()]
        }
      } else return section;
    });

    setSections(nextSections);
    save(info, nextSections);
  }

  const handleOrgChange = (e) => {
    const parentDiv = e.target.closest(".professionalItem");
    const nextSections = sections.map(section => {
      if (section.category === "Professional Experience") {
        const nextOrgs = section.orgs.map(org => {
          if (org.id === parentDiv.id) {
            return { ...org, organizationName: e.target.value };
          } else return org;
        });

        return { ...section, orgs: [...nextOrgs] };
      } else return section;
    })

    setSections(nextSections);
  }

  const handleProfAddressChange = (e) => {
    const parentDiv = e.target.closest(".professionalItem");
    const input = e.target.name;
    const nextSections = sections.map(section => {
      if (section.category === "Professional Experience") {
        const nextOrgs = section.orgs.map(org => {
          if (org.id === parentDiv.id) {
            switch (input) {
              case "city":
                return { ...org, address: { ...org.address, city: e.target.value } };
              case "state":
                return { ...org, address: { ...org.address, state: e.target.value } };
              case "country":
                return { ...org, address: { ...org.address, country: e.target.value } };
              default:
                break;
            }
          } else return org;
        });

        return { ...section, orgs: [...nextOrgs] };
      } else return section;
    })

    setSections(nextSections);
    save(info, nextSections);
  }

  const handleRoleChange = (e) => {
    const parentDiv = e.target.closest(".professionalItem");
    const nextSections = sections.map(section => {
      if (section.category === "Professional Experience") {
        const nextOrgs = section.orgs.map(org => {
          if (org.id === parentDiv.id) {
            return { ...org, role: e.target.value };
          } else return org;
        });

        return { ...section, orgs: [...nextOrgs] };
      } else return section;
    })

    setSections(nextSections);
    save(info, nextSections);
  }

  const handleAddAccomplishments = (e) => {
    e.preventDefault();
    const parentDiv = e.target.closest(".professionalItem");
    const nextSections = sections.map(section => {
      if (section.category === "Professional Experience") {
        const nextOrgs = section.orgs.map(org => {
          if (org.id === parentDiv.id) {
            return { ...org, accomplishments: [...org.accomplishments, { id: crypto.randomUUID(), text: "" }] };
          } else return org;
        });

        return { ...section, orgs: [...nextOrgs] };
      } else return section;
    });

    setSections(nextSections);
    save(info, nextSections);
  }

  const handleAccomplishmentChange = (e) => {
    const parentDiv = e.target.closest(".professionalItem");
    const input = e.target;
    const nextSections = sections.map(section => {
      if (section.category === "Professional Experience") {
        const nextOrgs = section.orgs.map(org => {
          if (org.id === parentDiv.id) {
            const nextAccomplishments = org.accomplishments.map(accomplishment => {
              if (accomplishment.id === input.id) {
                return { ...accomplishment, text: e.target.value };
              } else return accomplishment;
            });

            return { ...org, accomplishments: [...nextAccomplishments] };
          } else return org;
        });

        return { ...section, orgs: [...nextOrgs] };
      } else return section;
    })

    setSections(nextSections);
    save(info, nextSections);
  }

  return (
    <>
      <Controls
        headerProps={{ handleFullNameChange, handleDegreeChange, handleAddressChange, handleEmailChange }}
        educationProps=
        {{
          handleAddEducationItem,
          educationItems: educationSection.schools,
          handleAddAwards,
          handleSchoolChange,
          handleAchievementChange,
          handleStartDateChange,
          handleEndDateChange,
          handleAwardChange
        }}
        professionalProps=
        {{
          handleOrganizationItem,
          professionalItems: professionalSection.orgs,
          handleOrgChange,
          handleProfAddressChange,
          handleRoleChange,
          handleAddAccomplishments,
          handleAccomplishmentChange
        }}
      />
      <Page info={info} sections={sections} />
    </>
  );
}

export default App;
