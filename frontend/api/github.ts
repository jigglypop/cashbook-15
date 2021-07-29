import request from "./utils/request";

const BASE_URL = "/callback/github";

const getGithubApi = () => {
  return request.get(BASE_URL);
};

const github = {
  getGithubApi,
};

export default github;
