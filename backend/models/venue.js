const venuesData = require("../data/venues");

class Venue {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
    }

    static get all() {
        const allVenues = venuesData.map((venue) => new Venue(venue));
        return allVenues;
    }

    static create(venue) {
        const newVenueId = venuesData.length++;
        const newVenue = new Venue({ id: newVenueId, ...venue });
        venuesData.push(newVenue);
        return newVenue;
    }
}

module.exports = Venue;