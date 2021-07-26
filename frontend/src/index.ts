import App from "./App"
import GlassButton from "./common/GlassButton/GlassButton"
import LineInput from "./common/LineInput/LineInput"
import Count from "./components/Count/Count"
import "./index.css"
import createStore from "./redux"
import { $ } from "./util/jQurey"

export const Modules: any = {
    "Count": Count,
    "App": App,
    "GlassButton": GlassButton,
    "LineInput": LineInput,
}

export const store : any = createStore()
const app: any = new App($("#root").get())
store.instance.setInstance(`App-${app.ID}`, app)
