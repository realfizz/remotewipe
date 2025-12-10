import { Elysia } from "elysia";
import { healthRoutes } from "./health.routes";

export const routes = new Elysia()
  .get("/", () => "Hi")
  .use(healthRoutes);