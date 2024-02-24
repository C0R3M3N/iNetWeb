const express = require("express")
const cors = require("cors")

const app = express();
app.use(express.json());
app.use(cors())

console.log("App listen at port 5000");
app.listen(5000);