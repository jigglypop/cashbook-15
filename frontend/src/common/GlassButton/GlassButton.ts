import { $ } from "../../util/jQurey"
import { Container } from "../../util/react"
import "./style.css"

interface IGlassButton {
    text: string
    onClick: () => {}
}

export default class GlassButton extends Container {

    private props: IGlassButton

    constructor($target: HTMLElement, ID: string, props: IGlassButton) {
        super($target, 'GlassButton', [])
        this.props = props
        this.ID = ID
        this.init()
    }

    componentWillMount() {}

    render() {
        return(`
            <button class="glass-button" id="${this.ID}" >${this.props.text}</button>
        `)
    }

    componentDidMount() {
        $(`#GlassButtonOuter-${this.ID}`).on('click', this.props.onClick)
    }
}