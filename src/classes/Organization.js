export class Organization {

    constructor(id = crypto.randomUUID(), organizationName = "", address = { city: "", state: "", country: "" }, date = { startDate: "", endDate: "" }, role = "", accomplishments = []) {
        this.id = id;
        this.organizationName = organizationName;
        this.address = address;
        this.date = date;
        this.role = role;
        this.accomplishments = accomplishments;
    }
    
}
