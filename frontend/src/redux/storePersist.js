function isJSONString(str) {
  try {
    JSON.parse(str);
  } catch (error) {
    console.error(e.message);
    return false;
  }
  return true;
}

export const storePersist = {
  set: (key, state) => {
    window.localStorage.setItem(key, JSON.stringify(state));
  },
  get: (key) => {
    const result = window.localStorage.getItem(key);
    if (!result) {
      return false;
    } else if (!isJSONString(result)) {
      window.localStorage.removeItem(key);
    } else {
      return JSON.parse(result);
    }
  },
  remove: (key) => {
    window.localStorage.removeItem(key);
  },
  getAll: () => {
    return window.localStorage;
  },
  clear: () => {
    window.localStorage.clear();
  },
};
