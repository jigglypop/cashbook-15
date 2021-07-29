export const SERVER_URL = process.env.SERVER_URL;
export const GITHUB_URL = `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&redirect_uri=${SERVER_URL}/callback`;
