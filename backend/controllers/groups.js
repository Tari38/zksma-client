const express = require('express');
const router = express.Router();

const Group = require('../models/group');

router.get('/', (req, res) => {
    const groupsData = Group.all
    res.send(groupsData);
});

router.post('/', (req, res) => {
    const data = req.body;
    const newGroup = Group.create(data);
    res.send({message: `${newGroup.name} successfully added to our collection.`});
});

module.exports = router;