import express from "express";
import ContactController from "./controllers/ContactController";

const routes = express.Router();

const contactController = new ContactController();

routes.post("/contact", contactController.create);
routes.get("/contact", contactController.index);
routes.get("/contact/:id", contactController.show);
routes.delete("/contact/:id", contactController.delete);
routes.put("/contact/:id", contactController.update);

export default routes;
