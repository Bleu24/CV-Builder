import "./App.css";
import Controls from "./ui/components/Controls";
import Page from "./ui/components/Page";
import { School } from "./classes/School";
import { useState } from "react";
import { Organization } from "./classes/Organization";

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

  const [info, setInfo] = useState(initialInfo);
  const [sections, setSections] = useState(initialSections);
  const [educationSection, professionalSection] = sections;

  const handleFullNameChange = (e) =>
    setInfo({ ...info, fullName: e.target.value });
  const handleDegreeChange = (e) =>
    setInfo({ ...info, degree: e.target.value });
  const handleAddressChange = (e) =>
    setInfo({ ...info, address: e.target.value });
  const handleEmailChange = (e) =>
    setInfo({ ...info, email: e.target.value });

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
  }

  const handleStartDateChange = (e) => {
    const parentDiv = e.target.closest(".educationItem");
    const nextSections = sections.map(section => {
      if (section.category === "Education") {
        const nextSchools = section.schools.map(school => {
          if (school.id === parentDiv.id) {
            return { ...school, date: { ...school.date, startDate: e.target.value } };
          } else return school;
        });

        return { ...section, schools: [...nextSchools] };
      } else return section;
    })

    setSections(nextSections);
  }

  const handleEndDateChange = (e) => {
    const parentDiv = e.target.closest(".educationItem");
    const nextSections = sections.map(section => {
      if (section.category === "Education") {
        const nextSchools = section.schools.map(school => {
          if (school.id === parentDiv.id) {
            return { ...school, date: { ...school.date, endDate: e.target.value } };
          } else return school;
        });

        return { ...section, schools: [...nextSchools] };
      } else return section;
    })

    setSections(nextSections);
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

    console.log(professionalSection);
    setSections(nextSections);
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
            handleOrgChange
          }}
      />
      <Page info={info} sections={sections} />
    </>
  );
}

export default App;
