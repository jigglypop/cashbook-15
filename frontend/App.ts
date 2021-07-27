import "./App.scss";
import { Container } from "./util/Container";

class App extends Container {
  constructor($target: HTMLElement) {
    super($target, "App");
    this.init();
  }

  componentWillMount() {
    return {}
  }

  render() {
    return `
          <Header/>
          <Router/>
        `;
  }

  componentDidMount() {}
}

export default App;
