const express = require('express')
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(cors())

const roleRoutes = require("./src/routes/RoleRoute")
app.use(roleRoutes)

const UserRoutes = require("./src/routes/UserRoutes")
app.use(UserRoutes)

const RideRoutes = require("./src/routes/RideRoutes")
app.use(RideRoutes) 

const StateRoutes =require("./src/routes/StateRoutes")
app.use("/state",StateRoutes)

const CityRoutes =require("./src/routes/CityRoutes")
app.use("/city",CityRoutes)

const AreaRoutes =require("./src/routes/AreaRoutes")
app.use("/area",AreaRoutes)

const VehicleRoutes =require("./src/routes/VehicleRoutes")
app.use("/vehicle",VehicleRoutes)

const liveRideRoutes =require("./src/routes/LiveRideRoutes")
app.use("/liveride",liveRideRoutes)

const ratingRoutes = require("./src/routes/RatingRoutes")
app.use("/rating",ratingRoutes)

const rideRequestRoutes = require("./src/routes/RideRequestRoutes")
app.use("/riderequest",rideRequestRoutes)

const notificationRoutes = require("./src/routes/NotificationRoutes")
app.use("/notification",notificationRoutes)

const paymentRoutes = require("./src/routes/PaymentRoutes")
app.use("/payment",paymentRoutes)

mongoose.connect("mongodb://localhost:27017/25_node_intership").then(()=>{
    console.log("database connected...")
})



const PORT = 8000
app.listen(PORT,()=>{
    console.log(`Server is starting at localhost:${PORT}`)
})