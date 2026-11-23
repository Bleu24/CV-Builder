function save(info, sections) {

    try {
        if (info && sections && typeof info === "object" && sections?.length != 0) {

            const stringifiedInfo = JSON.stringify(info);
            const stringifiedSections = JSON.stringify(sections);

            localStorage.setItem("personalInfo", stringifiedInfo);
            localStorage.setItem("personalExperiences", stringifiedSections)

        } else throw `info: ${info} and sections: ${sections} are invalid`;
    } catch (error) {
        console.error(error);
    }

}

function load(type) {

    if (type === "info") {
        const savedInfo = localStorage.getItem("personalInfo") || false;
        const parsedInfo = JSON.parse(savedInfo);

        return parsedInfo;
    } else if (type === "sections") {
        const savedSections = localStorage.getItem("personalExperiences") || false;
        const parsedSections = JSON.parse(savedSections);

        return parsedSections;
    } else return false;

}

export { save, load }; 