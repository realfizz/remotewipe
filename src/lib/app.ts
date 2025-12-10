import { Elysia } from "elysia";
import logixlysia from "logixlysia";
import { routes } from "../routes";

export const createApp = () =>
  new Elysia({ name: "remote.wipe" })
    .use(
      logixlysia({
        config: {
          showStartupMessage: false,
          startupMessageFormat: "simple",
          timestamp: {
            translateTime: "yyyy-mm-dd HH:MM:ss",
          },
          ip: true,
          logFilePath: "./logs/logixlysia.log",
          logRotation: {
            maxSize: "10m",
            interval: "1d",
            maxFiles: "7d",
            compress: true,
          },
          customLogFormat:
            "[+] {now} {level} {duration} {method} {pathname} {status} {message} {ip}",
        },
      })
    )
    .use(routes)
    .onError(({ error, set }) => {
      console.error(error);
      set.status = 500;
      return { error: "Something went wrong" };
    });