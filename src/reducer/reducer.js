export default (state = [], action) => {
  
  switch (action.type) {
    case "ADD_DATA":
      return [...state, action.data];
    case "DEL_DATA":
      let newState=[...state]
       action.data.forEach((key)=>{
         newState = newState.filter((data)=>data['key']!=key)
      })
      return newState;
    default:
      return state;
  }
};
