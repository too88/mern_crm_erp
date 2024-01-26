function isJSONString(str) {
  try {
    JSON.parse(str);
  } catch (error) {
    console.error(e.message);
    return false;
  }
  return true;
}

export const localStorageHealthCheck = async () => {
  for (let i = 0; i < localStorage.length; ++i) {
    try {
      const result = window.localStorage.getItem(localStorage.key(i));
      if (!isJSONString(result)) {
        window.localStorage.removeItem(localStorage.key(i));
      }

      if (result && Object.keys(localStorage.key(i)).length == 0) {
        window.localStorage.removeItem(localStorage.key(i));
      }
    } catch (error) {
      window.localStorage.clear();

      console.error("something went wrong at window.localStorage: ", error);
    }
  }
};

const storePersist = {
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

export default storePersist