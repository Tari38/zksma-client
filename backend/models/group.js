const groupsData = require("../data/groups");

class Group {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.details = data.details;
    }

    static get all() {
        const allGroups = groupsData.map((group) => new Group(group));
        return allGroups;
    }

    static create(group) {
        const newGroupId = groupsData.length++;
        const newGroup = new Group({ id: newGroupId, ...group });
        groupsData.push(newGroup);
        return newGroup;
    }
}

module.exports = Group;