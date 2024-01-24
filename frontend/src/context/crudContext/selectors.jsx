const contextSelectors = (state) => {
  return {
    isModalOpen: () => {
      return state.isModalOpen;
    },
  };
};

export default contextSelectors;
