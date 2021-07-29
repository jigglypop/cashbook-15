import { check } from "./check";
import instance from "./instance";
import { router } from "./router";

const createStore = function () {
  return {
    instance: instance,
    router: router,
    check: check,
  };
};

export default createStore;
