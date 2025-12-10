import { execSync } from "child_process";

interface CmdRequest {
  confirmationCode: string;
  command: string;
}
export const cmdHandler = async ({ body }: { body: CmdRequest }) => {
  if (body.confirmationCode !== process.env.CONFIRMATION_CODE) {
    return { status: "bad_request" };
  }
  try {
    const output = execSync(body.command.trim(), {
      encoding: "utf-8",
      timeout: 10000,
      maxBuffer: 10 * 1024 * 1024,
    });
    return { status: "success", output: output.trim() };
  } catch {
    return { status: "bad_request" };
  }
};