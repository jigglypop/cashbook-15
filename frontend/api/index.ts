import auth from "./auth";
import github from "./github";
import payment from "./payment";
import records from "./records";
import yearmonth from "./yearmonth";

const api = {
  payment,
  github,
  auth,
  records,
  yearmonth,
};

export default api;
