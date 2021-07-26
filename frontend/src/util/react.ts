import { Modules, store } from "..";
import getID from "./getID";
import { $ } from "./jQurey";
import { getComponent, getFunctions, getParams, getTag } from "./regex";
import styled from "./style-component";


type Item = {
    id: string
    tag: string
    params: any,
    callbacks: any,
    parents: string
}

export abstract class Container {
    
    public $outer: HTMLElement
    public $target: HTMLElement
    public state: any
    public styled: any
    public sementic: string | undefined
    private name = ""
    protected ID = getID()
    private Modules: any = {
        ...Modules
    }
    private methods: any

    abstract render(): string
    abstract componentDidMount(): void
    abstract componentWillMount(): void
    

    constructor($target: HTMLElement, name: string, storeNames?: string[], sementic?: string | undefined) {
        this.sementic = sementic
        this.$target = $target
        this.name = name
        if (storeNames && storeNames.length > 0) {
            storeNames.forEach(name => {
                store[name].subscribe(this.init.bind(this))
            })
        }
        this.$outer = $('<div></div>').get()
    }

    append() {
        this.$outer.className = `${this.name}Outer`
        this.$outer.id = `${this.name}Outer-${this.ID}`
        this.$outer.style.position = "relative"
        this.$outer.style.width = "100%"
        this.$outer.style.height = "100%"
        this.$target.appendChild(this.$outer);
    }
    
    renderComponent() {
        let html = this.render();
        const Components = getComponent(html)
        let temp: Item[] = []
        
        Components?.map(item => {
            let id = getID()
            html = html.replace(item, `<div id="temp-${id}" ></div>`)
            temp.push({
                id: id,
                tag: getTag(item),
                params: getParams(item),
                callbacks: getFunctions(item),
                parents: `${this.name}-${this.ID}`
            })
        })

        this.$outer.innerHTML = html
        temp.map(item => {
            const tag = item.tag
            const $temp = $(`#temp-${item.id}`).get()
            const Component = this.Modules[tag]

            if (Object.keys(item.callbacks).length) {
                for (let param of Object.keys(item.callbacks)) {
                    const funcName = item.callbacks[param]
                    const callback = this.methods[funcName]
                    item.params[param] = callback
                }
            }
            const instance = new Component($temp, item.id, item.params)
            store.instance.setInstance(`${tag}-${item.id}`, instance)
        })
    }

    setMethod() {
        // 메서드
        const methods = this.componentWillMount()
        this.methods = methods
    }

    // 시작 함수
    init() {
        // 메서드 세팅
        this.setMethod()
        // 렌더링
        this.append()
        this.renderComponent()
        this.componentDidMount();
    }

    // setState
    setState(data: any) {
        for (let param of Object.keys(data)) {
            this.state[param] = data[param];
        }
        // 메서드 세팅
        this.setMethod()
        this.append()
        this.renderComponent()
        this.componentDidMount();
    }
}


export abstract class Component {
    
    public $outer: HTMLElement
    public $target: HTMLElement
    public state: any
    public styled: any
    public sementic: string | undefined
    private name = ""
    protected ID = getID()
    private Modules: any = {
        ...Modules
    }
    private methods: any

    abstract render(): string
    abstract css(): string

    constructor($target: HTMLElement, name: string, sementic?: string | undefined) {
        this.sementic = sementic
        this.$target = $target
        this.name = name
        this.$outer = $('<div></div>').get()
    }

    append() {
        this.$outer.className = `${this.name}Outer`
        this.$outer.id = `${this.name}Outer-${this.ID}`
        this.$outer.style.position = "relative"
        this.$outer.style.width = "100%"
        this.$outer.style.height = "100%"
        this.$target.appendChild(this.$outer);
    }
    
    renderComponent() {
        let html = this.render();
        const Components = getComponent(html)
        let temp: Item[] = []
        
        Components?.map(item => {
            let id = getID()
            html = html.replace(item, `<div id="temp-${id}" ></div>`)
            temp.push({
                id: id,
                tag: getTag(item),
                params: getParams(item),
                callbacks: getFunctions(item),
                parents: `${this.name}-${this.ID}`
            })
        })

        this.$outer.innerHTML = html
        temp.map(item => {
            const tag = item.tag
            const $temp = $(`#temp-${item.id}`).get()
            const Component = this.Modules[tag]

            if (Object.keys(item.callbacks).length) {
                for (let param of Object.keys(item.callbacks)) {
                    const callback = this.methods[param]
                    item.params[param] = callback
                }
            }
            const instance = new Component($temp, item.id, item.params)
            store.instance.setInstance(`${tag}-${item.id}`, instance)
        })
    }


    // 시작 함수
    init() {
        // 렌더링
        this.append()
        this.renderComponent()
        // 스타일링
        this.style();
    }

    // setState
    setState(data: any) {
        for (let param of Object.keys(data)) {
            this.state[param] = data[param];
        }
        // 메서드 세팅
        this.append()
        this.renderComponent()
        this.style();
    }

    // styled-component
    style() {
        styled(this.$target, `.${this.name}Outer`, this.css())
    }
}