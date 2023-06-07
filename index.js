const express = require("express");
const cors = require("cors");
const pool = require("./db");

// const router = express.Router();
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const employees = [
    {name:"Asaph", location: "Kigali"},
    {name:"Claude", location: "Gisenyi"},
    {name:"Ishimwe", location: "Ruhango"}
];

app.get("/", (req, res)=>{ res.send(employees)});

app.get("/api/users", async (req, res)=>{

    try {
        const users = await pool.query("SELECT * FROM users");
        res.json(users.rows);
    } catch (error) {
        console.error(error);
    }
   
})

app.post("/api/users", async (req, res)=>{
    
    try {
        const { fname, lname, email, passcode, phone} = req.body;
        const newUser = await pool.query('INSERT INTO users(fname, lname, email, passcode, phone) VALUES($1, $2, $3, $4, $5) RETURNING *', [fname, lname, email, passcode, phone]);
        res.json(newUser.rows[0]);
    } catch (error) {
        console.error(error);
    }
   
})

app.listen(port, ()=>{console.log(`listening on port ${port}`)});