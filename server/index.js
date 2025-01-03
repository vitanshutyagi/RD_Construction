const express = require('express')
const bodyParser = require("body-parser")
const app = express()

require('dotenv').config()

const cors = require("cors")
app.use(cors())

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(express.json())

// import routes 
const mailRoutes = require("./routes/mailRoutes")

app.use(mailRoutes)

app.get("/", (req, res) => {
	console.log("hello");
	return res.status(200).json({
		success: true,
		message: "Your server is up and running ...",
	});
});

const PORT = process.env.PORT || 4000

app.listen(PORT,() => {
    console.log(`App is running at port ${PORT}`);
})