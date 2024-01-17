const contextSelector = (state) => {
  return {
    isBoxOpen: () => {
      return state.isBoxOpen;
    },
  };
};

export default contextSelector;
