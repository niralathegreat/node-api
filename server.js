// https://www.bezkoder.com/node-js-rest-api-express-mysql/
const express = require("express");
const cors = require("cors");
const app = express();
var corsOptions = {
  origin: "http://localhost:3000"

};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to application." });
});

require("./app/routes/tutorial.routes.js")(app);

/*const routerr = require("./app/routes/tutorial.routes.js")();
app.use('/api/tutorials', routerr); */
/*
const tutorials = require("./app/controllers/tutorial.controller.js");

var router = require("express").Router();
// Create a new Tutorial
router.post("/", tutorials.create);
// Retrieve all Tutorials
router.get("/", tutorials.findAll);
// Retrieve all published Tutorials
router.get("/published", tutorials.findAllPublished);
// Retrieve a single Tutorial with id
router.get("/:id", tutorials.findOne);
// Update a Tutorial with id
router.put("/:id", tutorials.update);
// Delete a Tutorial with id
router.delete("/:id", tutorials.delete);
// Delete all Tutorials
router.delete("/", tutorials.deleteAll);

app.use('/api/tutorials', router);
 */



// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

/*
const cors = require("cors");
const express = require("express");
const app = express();
global.__basedir = __dirname;
var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
const initRoutes = require("./app/routes");
app.use(express.urlencoded({ extended: true }));
initRoutes(app);
let port = 8080;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});
*/

/*
const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');
const fs = require('fs');
const mime = require('mime');
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());
 
 
const uploadImage = async (req, res, next) => {
// to declare some path to store your converted image
var matches = req.body.base64image.match(/^data:([A-Za-z-+/]+);base64,(.+)$/),
response = {};
 
if (matches.length !== 3) {
return new Error('Invalid input string');
}
 
response.type = matches[1];
response.data = new Buffer(matches[2], 'base64');
let decodedImg = response;
let imageBuffer = decodedImg.data;
let type = decodedImg.type;
//let extension = mime.extension(type);
//let fileName = "image." + extension;
let fileName = "gs1.PNG";
try {
fs.writeFileSync("C:/Users/BAM20550/node-project/api/app/images/" + fileName, imageBuffer, 'utf8');
return res.send({"status":"success"});
} catch (e) {
next(e);
}
}
 
app.post('/upload/image', uploadImage)
 
app.listen(port, () => console.log(`Server is listening on port ${port}`))
*/