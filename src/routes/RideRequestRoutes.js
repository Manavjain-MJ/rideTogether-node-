const routes = require("express").Router()
const rideRequestControllers = require("../controllers/RideRequestControllers")

routes.post("/addriderequest",rideRequestControllers.addRideRequest)
routes.get("/getriderequest",rideRequestControllers.getAllRideRequest)

module.exports= routes