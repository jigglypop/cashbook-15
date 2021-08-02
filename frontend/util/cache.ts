const cache = {
  get(key: string) {
    const result = localStorage.getItem(key);
    if (result) {
      const data = JSON.parse(result);
      return data;
    } else {
      return null;
    }
  },
  set(key: string, data: Record<string, unknown> | string) {
    localStorage.setItem(key, JSON.stringify(data));
  },
  remove(key: string) {
    localStorage.removeItem(key);
  },
};

export default cache;

// 다크모드 확인해보고 있으면 boolean 값 변환
export const getDark = () => {
  const flag = cache.get("dark");
  if (!flag) {
    return true;
  } else {
    if (flag === "false") {
      return false;
    } else {
      return true;
    }
  }
};
