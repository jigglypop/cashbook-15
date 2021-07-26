import { count } from "./count"
import instance from "./instance"

const createStore = function () {
    return {
        instance: instance,
        count: count
    }
}

export default createStore