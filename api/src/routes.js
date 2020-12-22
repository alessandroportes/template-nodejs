import { Router } from "express";

const routes = new Router();

routes.get("/", (request, response) => {
  // rota exemplo
  response.json({ message: "Hello World" });
});

export default routes;
