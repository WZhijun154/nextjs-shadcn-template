import "server-only";

export const IS_PRODUCTION = process.env.IS_PRODUCTION === "true";

export const SITE_URL = IS_PRODUCTION
  ? (process.env.SITE_URL as string)
  : "http://localhost:3000";

export const SUPPORT_EMAIL = process.env.SUPPORT_EMAIL as string;

export const GTAG_ID = IS_PRODUCTION
  ? (process.env.GTAG_ID as string)
  : "NOT_SET";

export const AUTHOR_NAME = "Wang Zhijun";
export const AUTHOR_TITLE = "Full Stack Developer";
export const AUTHOR_GITHUB_URL = "https://github.com/WZhijun154";
export const AUTHOR_AVATAR_URL =
  "https://avatars.githubusercontent.com/u/65524271?s=400&u=c3a2cdd11799add06a5259b00e9cfc7475b4da5d&v=4";
export const AUTHOR_X_URL = "https://x.com/wangzhijun154";
export const TODAY_YEAR = new Date().getFullYear();
export const TODAY_DATE = new Date();
