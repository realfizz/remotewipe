import { Elysia } from "elysia";
import { cmdHandler } from "../handlers";

export const cmdRoutes = new Elysia({ prefix: "/cmd" })
  .post("/", cmdHandler);