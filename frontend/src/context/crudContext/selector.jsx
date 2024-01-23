const contextSelector = (state) => {
  return {
    isPanelOpen: () => {
      return state.isPanelOpen;
    },
    isBoxOpen: () => {
      return state.isBoxOpen;
    },
  };
};

export default contextSelector;
