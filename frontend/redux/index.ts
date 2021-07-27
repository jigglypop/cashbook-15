import instance from "./instance";
import { router } from "./router";

const createStore = function () {
  return {
    instance: instance,
    router: router
  };
};

export default createStore;
