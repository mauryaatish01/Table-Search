export default (state = [], action) => {
  const newState = [...state];
  switch (action.type) {
    case "ADD_DATA":
      return [...state,action.data]
    default:
      return state;
  }
};
