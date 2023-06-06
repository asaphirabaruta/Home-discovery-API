const express = require("express");
// const router = express.Router();
const app = express();
const port = process.env.PORT || 3001;

const employees = [
    {name:"Asaph", location: "Kigali"},
    {name:"Claude", location: "Gisenyi"},
    {name:"Ishimwe", location: "Ruhango"}
];

app.get("/", (req, res)=>{ res.send(employees)});

app.listen(port, ()=>{console.log(`listening on port ${port}`)});