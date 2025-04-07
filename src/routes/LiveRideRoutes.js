const routes = require("express").Router()
const liveRideControllers = require("../controllers/LiveRideControllers")

routes.post("/addliveride",liveRideControllers.addLiveRide)
routes.get("/getliverides",liveRideControllers.getAllLiveRide)
routes.get("/getridebyid/:id",liveRideControllers.getLiveRideById)
module.exports = routes