const express = require('express');
const router = express.Router();

const Venue = require('../models/venue');

router.get('/', (req, res) => {
    const venuesData = Venue.all
    res.send(venuesData);
});

router.post('/', (req, res) => {
    const data = req.body;
    const newVenue = Venue.create(data);
    res.send({message: `${newVenue.name} successfully added to our collection.`});
});

module.exports = router;