const { Router } = require("express");
const usersController = require("../controllers/usersController");
const usersRouter = Router();

usersRouter.get("/", usersController.usersListGet);
usersRouter.post("/create", usersController.usersCreatePost);
usersRouter.get("/home", usersController.usersListGetNew);
usersRouter.post("/:id/toggle", usersController.toggle);
// usersRouter.post("/toggle/:id", usersController.toggle);
// usersRouter.post("/toggle", usersController.toggle);
// usersRouter.get("/create", usersController.usersCreateGet); doing get create on frontend side


//search function
usersRouter.get("/search", usersController.usersSearchGet);
usersRouter.get("/:id/update", usersController.usersUpdateGet);
usersRouter.post("/:id/update", usersController.usersUpdatePost);
usersRouter.post("/:id/delete", usersController.usersDeletePost);


module.exports = usersRouter;