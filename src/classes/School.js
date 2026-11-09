export class School {

    constructor(id = crypto.randomUUID(), highestAchievement = "", schoolName = "", date = { startDate: "", endDate: "" }, awards = []) {
        this.id = id;
        this.highestAchievement = highestAchievement;
        this.schoolName = schoolName;
        this.date = date;
        this.awards = awards;
    }

}