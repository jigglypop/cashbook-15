import { check } from "./check";
import instance from "./instance";
import { list } from "./list";
import { login } from "./login";
import { register } from "./register";
import { writerecords } from "./writerecords";
import { yearcategory } from "./yearcategory";

const createStore = function () {
  return {
    instance: instance,
    check: check,
    login: login,
    register: register,
    writerecords: writerecords,
    list: list,
    yearcategory: yearcategory,
  };
};

export default createStore;
