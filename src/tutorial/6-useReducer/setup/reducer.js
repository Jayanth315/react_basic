const reducer = (state, action) => {
  if (action.type === "NO_VALUE") {
    return {
      ...state,
      modalContent: "Please Enter a Value",
      isModalVisble: true,
    };
  }
  if (action.type === "ADD_ITEM") {
    const newData = [...state.data, action.payload];
    return {
      ...state,
      data: newData,
      modalContent: "Item Added",
      isModalVisble: true,
    };
  }
  if (action.type === "REMOVE_ITEM") {
    const id = action.payload;
    const newList = state.data.filter((people) => people.id !== id);
    return {
      ...state,
      data: newList,
      modalContent: "Item deleted",
      isModalVisble: true,
    };
  }
  if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      modalContent: "",
      isModalVisble: false,
    };
  }

  throw new Error("No Dispath type found");
};

export default reducer;
