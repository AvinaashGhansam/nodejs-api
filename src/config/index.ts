import config from "config";

export const appName: string = config.get("name");
export const mailServer: string = config.get("mail.host");
