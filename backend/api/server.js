// const express = require('express');
// const bodyParser = require("body-parser");
// const cors = require('cors');
const http = require('http');


// const server = express();
// server.use(bodyParser.json());
// server.use(cors());
const allGroups = require("../data/groups");
const allVenues = require("../data/venues");

// const requestListener = (req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*'); // NEW LINE
//     res.writeHead(200);
//     res.end(JSON.stringify({groupsData}, {venuesData}));
// };

const requestListener = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // NEW LINE
    res.writeHead(200);
    let body;

    switch(req.url) {
        case "/groups":
            if (req.method === "GET") { 
                body = { groups: allGroups };
            } else if (req.method === "POST") {
                let reqBody = [];
                let newGroup;
                req.on("data", chunk => reqBody.push(chunk));
                req.on("end", () => {
                    newGroup = JSON.parse(reqBody);
                    allGroups.push(newGroup);
                })
            }; break;        
        case "/venues":
            if (req.method === "GET") { 
                body = { venues: allVenues };
            } else if (req.method === "POST") {
                let reqBody = [];
                let newVenue;
                req.on("data", chunk => reqBody.push(chunk));
                req.on("end", () => {
                    newVenue = JSON.parse(reqBody);
                    allVenues.push(newVenue);
                })
            }; break;  
        case "table":
            body = { groupData: { id: "id", name: "name", details: "details"}, venueData: { id: "name", name: "name" } };
            break;
        default:
            res.statusCode = 404;
            body = { error: "Unknown route" };
    }
    res.end(JSON.stringify(body));
}

const server = http.createServer(requestListener);
// const db = require("./dbConfig.js")


const host= "localhost";
const port = 3000 || 3001;



// const venueRoutes = require("../controllers/venues");
// server.use("/venues", venueRoutes);


server.listen(port, host, () => console.log(`All cylinders now firing on http://${host}:${port}!`))
