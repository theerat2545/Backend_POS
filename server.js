const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const userController = require("./controllers/UserController");
const foodTypeController = require("./controllers/FoodTypeController");

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000, () => {
  console.log("API Server Running...");
});

app.post("/api/user/signin", (req, res) => userController.login(req, res));
app.post("/api/foodType/create", (req, res) => foodTypeController.create(req, res));
app.get("/api/foodType/list", (req, res) => foodTypeController.list(req, res));
app.delete("/api/foodType/remove/:id", (req, res) => foodTypeController.delete(req, res));
app.put("/api/foodType/update", (req, res) => foodTypeController.update(req, res));