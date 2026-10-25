class School {

    constructor(highestAchievement, schoolName, date = {startDate: "", endDate: ""}, awards=[] ) {
        this.highestAchievement = highestAchievement;
        this.schoolName = schoolName;
        this.date = date;
        this.awards = awards;
    }

}