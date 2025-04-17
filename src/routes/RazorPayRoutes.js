const routes = require("express").Router();
const paymentController = require("../controllers/RazorPayControllers");
routes.post("/create_order", paymentController.create_order);
routes.post("/verify_order", paymentController.verify_order);

module.exports = routes;