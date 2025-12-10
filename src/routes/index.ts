import { Elysia } from "elysia";
import { healthRoutes } from "./health.routes";
import { cmdRoutes } from "./cmd.routes";

export const routes = new Elysia()
  .get("/", () => "Hi")
  .use(healthRoutes)
  .use(cmdRoutes);