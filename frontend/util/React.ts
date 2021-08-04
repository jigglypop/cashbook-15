import { Modules, store } from "..";
import getID from "./getID";
import { $ } from "./jQurey";
import { getComponent, getFunctions, getParams, getTag } from "./regex";
import styled from "./style-component";

type Item = {
  id: string;
  tag: string;
  params: any;
  callbacks: any;
  parents: string;
};

export abstract class React {
  public $outer: HTMLElement;
  public $target: HTMLElement;
  public state: any;
  public styled: (El: any, root: string, text: string) => void;
  public sementic: string | undefined;
  private name = "";
  protected ID = getID();
  private methods: any;
  private storeNames: any;

  abstract render(): string;
  abstract componentWillMount(): ReturnType<() => void>;
  abstract componentDidMount(): void;
  abstract css(): string;

  constructor(
    $target: HTMLElement,
    name: string,
    storeNames?: string[],
    sementic?: string | undefined
  ) {
    this.sementic = sementic;
    this.$target = $target;
    this.name = name;
    if (storeNames) {
      this.storeNames = storeNames;
    }
    this.$outer = $("<div></div>").get();
  }

  append() {
    this.$outer.className = `${this.name}Outer`;
    this.$outer.id = `${this.name}Outer-${this.ID}`;
    if (this.$target.className === "tempOuter") {
      const $parent: any = this.$target.parentNode;
      if ($parent) {
        const _$target = this.$target;
        this.$target = $parent;
        this.$target.insertBefore(this.$outer, _$target);
        _$target.remove();
      }
    } else {
      this.$target.appendChild(this.$outer);
    }
  }

  renderComponent() {
    let html = this.render();
    const Components = getComponent(html);
    const temp: Item[] = [];

    Components?.map((item) => {
      const id = getID();
      html = html.replace(
        item,
        `<div class="tempOuter" id="temp-${id}" ></div>`
      );
      temp.push({
        id: id,
        tag: getTag(item),
        params: getParams(item),
        callbacks: getFunctions(item),
        parents: `${this.name}-${this.ID}`,
      });
    });
    this.$outer.innerHTML = html;
    temp.map((item) => {
      const tag = item.tag;
      const $temp = $(`#temp-${item.id}`).get();
      const Component = Modules[tag];

      if (Object.keys(item.callbacks).length) {
        for (const param of Object.keys(item.callbacks)) {
          const funcName = item.callbacks[param];
          const callback = this.methods[funcName];
          item.params[param] = callback;
        }
      }
      const instance = new Component($temp, item.id, item.params);
      store.instance.setInstance(`${tag}-${item.id}`, instance);
    });
  }

  setMethod() {
    // 메서드
    const methods = this.componentWillMount();
    this.methods = methods;
  }

  // 시작 함수
  init() {
    // 메서드 세팅
    this.setMethod();
    // 렌더링
    this.append();
    this.renderComponent();
    this.componentDidMount();
    if (this.storeNames && this.storeNames.length > 0) {
      this.storeNames.forEach((name: any) => {
        store[name].subscribe(
          `${this.name}Outer-${this.ID}`,
          this.init.bind(this)
        );
      });
    }
    this.style();
  }

  // setState
  setState(data: any) {
    for (const param of Object.keys(data)) {
      this.state[param] = data[param];
    }
    // 메서드 세팅
    this.setMethod();
    this.append();
    this.renderComponent();
    this.componentDidMount();
    if (this.storeNames && this.storeNames.length > 0) {
      this.storeNames.forEach((name: any) => {
        store[name].subscribe(
          `${this.name}Outer-${this.ID}`,
          this.init.bind(this)
        );
      });
    }
    this.style();
  }
  // styled-component
  style() {
    styled(this.$target, `.${this.name}Outer`, this.css());
  }
}
