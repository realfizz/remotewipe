import { Elysia } from "elysia";
import { routes } from "../routes";

export const createApp = () =>
  new Elysia()
    .use(routes)
    .onError(({ error, set }) => {
      console.error(error);
      set.status = 500;
      return { error: "Something went wrong" };
    });