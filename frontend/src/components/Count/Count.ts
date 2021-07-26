import { store } from "../..";
import { decrease, increase } from "../../redux/count";
import { Container } from "../../util/react";
import "./style.css";

interface ICount {
    title: string
    content: string
}

export default class Count extends Container {

    private props
    public state = {
        title: ""
    }

    constructor($target: HTMLElement, ID: string, props: ICount) {
        super($target, 'Count', ['count']);
        this.ID = ID
        this.props = props
        this.init()
    }

    componentWillMount() {
        return {
            onPlus: () => {
                store.count.dispatch(increase())
            },
            onMinus: () => {
                store.count.dispatch(decrease())
            },
        }
    }

    render() {
        const { counter } = store.count.getState()
        return (`
            <h1>${counter}</h1>
            <GlassButton :text="+" @onClick="onPlus" />
            <GlassButton :text="-" @onClick="onMinus" />
        `)
    }

    componentDidMount() {}
}
