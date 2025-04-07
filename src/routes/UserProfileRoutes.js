const routes = require("express").Router()
const userProfileControllers = require("../controllers/UserProfileControllers")

routes.get("/userprofile/:id",userProfileControllers.getUserProfile)
routes.put("/updateprofile/:id",userProfileControllers.updateUser)

module.exports=routes