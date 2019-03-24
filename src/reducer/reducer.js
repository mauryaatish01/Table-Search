export default (state = [], action) => {
  const newState = [...state];
  switch (action.type) {
    case "ADD_USER":
      newState=newState.concat(action.data)
      return newState
    default:
      return state;
  }
};
