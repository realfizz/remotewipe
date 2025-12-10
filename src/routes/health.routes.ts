import { Elysia } from "elysia";
import { healthHandler } from "../handlers";

export const healthRoutes = new Elysia({ prefix: "/health" })
  .get("/", healthHandler);