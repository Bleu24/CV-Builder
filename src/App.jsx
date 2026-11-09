import "./App.css";
import Controls from "./ui/components/Controls";
import Page from "./ui/components/Page";
import { School } from "./classes/School";
import { useState } from "react";
import { Organization } from "./classes/Organization";


const getAllAwards = (schools) => {
  const awards = [];
  for (const school of schools) {
    for (const award of school.awards) {
      awards.push(award);
    }
  }

  return awards;
}

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
        }
      ],
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
          accomplishments: [...section.accomplishments, new Organization()]
        }
      } else return section;
    });

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
      />
      <Page info={info} sections={sections} />
    </>
  );
}

export default App;
