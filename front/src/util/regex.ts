// regex
const getRegex = (tag: string, text: string) => {
  const regex = new RegExp(tag, "g")
  const datas = text.match(regex) || []
  return datas
}

// 인자 찾기
export const getParams = (text: string) => {
  const datas = getRegex(":.*?=\".*?\"", text)
  let _datas: any = {}
  datas.map(item => {
    const [name, value] = item.replace(/(\"|:)/g, "").split("=")
    _datas[name] = value
  })
  return _datas;
};
// 함수 찾기
export const getFunctions = (text: string) => {
  const datas = getRegex("@.*?=\".*?\"", text)
  let _datas: any = {}
  datas.map(item => {
    const [name, value] = item.replace(/(\"|@)/g, "").split("=")
    _datas[name] = value
  })
  return _datas;
};

// 컴포넌트 인지
export const isComponent = (text: string) => {
  const openTag = "(<.*>)";
  const jsxs =  getRegex(`${openTag}`, text)
  const jsxDatas = jsxs ? jsxs.map((jsx) => {
    return {
      'jsx': jsx,
      "params": getParams(jsx)
    }
  }) : null
  return jsxDatas;
};
// 컴포넌트 거르기
export const getComponent = (text: string) => {
  const openTag = "(<.*/>)";
  return getRegex(`${openTag}`, text);
};

export const isTag = (text: string) => {
    const Tag = '[a-zA-Z-0-9:\s]'
    const openTag = `<(${Tag})+>`;
    return getRegex(`${openTag}`, text);
};

export const isOuter = (text: string) => {
    const Tag = '[a-zA-Z-0-9:\s]'
    return getRegex(`<(${Tag})+>.*?</(${Tag})+>`, text);
};
// 태그 찾기
export const getTag = (text: string) => {
  const componentTag = "[A-Z]([a-zA-Z])*";
  const regex = new RegExp(componentTag, "g");
  const result = text.match(regex) || [""]
  return result[0];
};