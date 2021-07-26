import "./public/css/App.css";
import { Container } from "./util/react";

class App extends Container {
    constructor($target: HTMLElement) {
        super($target, 'App', []);
        this.init()
    }
    
    componentWillMount() {}

    render() {
        const items = [
            {
                title: "카운트",
                content: "컨텐츠"
            }
        ]
        return (`
            <h1>Hello</h1>
            ${items.map(item => `<Count :title="${item.title}" :content="${item.content}" />`).join("\n")}
        `)
    }
    
    componentDidMount() {}
}

export default App