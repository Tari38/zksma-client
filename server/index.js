const express = require('express');
const db = require('./config/db').default
const cors = require('cors')

const app = express();
const  PORT = 3002;
app.use(cors());
app.use(express.json())

// Route to get all venues
app.get("/api/get", (req,res)=>{
db.query("SELECT * FROM zks_venues", (err,result)=>{
    if(err) {
    console.log(err)
    } 
res.send(result)
});   });

// Route to get one venue
app.get("/api/getFromId/:id", (req,res)=>{

const id = req.params.id;
 db.query("SELECT * FROM zks_venues WHERE id = ?", id, 
 (err,result)=>{
    if(err) {
    console.log(err)
    } 
    res.send(result)
    });   });

// Route for creating the venue
app.post('/api/create', (req,res)=> {

const name = req.body.name;
const address_line1 = req.body.address_line1;
const address_line2 = req.body.address_line2;
const town = req.body.town;
const county = req.body.county;
const postcode = req.body.postcode;
const hasGroups = req.body.hasGroups;

db.query("INSERT INTO zks_venues (name, address_line1, address_line2, town, county, postcode, hasGroups) VALUES (?,?,?)",[name,address_line1,address_line2, town, county, postcode, hasGroups], (err,result)=>{
   if(err) {
   console.log(err)
   } 
   console.log(result)
});   })

// Route to delete a zks_venue

app.delete('/api/delete/:id',(req,res)=>{
const id = req.params.id;

db.query("DELETE FROM zks_venues WHERE id= ?", id, (err,result)=>{
if(err) {
console.log(err)
        } }) })

app.listen(PORT, ()=>{
    console.log(`Server is running on ＄{PORT}`)
})