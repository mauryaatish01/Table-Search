export default (state = [], action) => {
  let newState;
  let storedData = localStorage.getItem("data");
  if (storedData != null) {
    newState = [...JSON.parse(storedData)];
  } else {
    newState = [...state];
    localStorage.setItem("data", JSON.stringify(newState));
  }

  switch (action.type) {
    case "ADD_DATA":
      localStorage.setItem("data", JSON.stringify([...state, action.data]));
      return [...state, action.data];

    case "DEL_DATA":
      action.data.forEach(key => {
        newState = newState.filter(data => data["key"] != key);
      });
      localStorage.setItem("data", JSON.stringify(newState));
      return newState;
    case "SEARCH_DATA":
      if (action.text !== "") {
        console.log(localStorage.getItem("data"));
        let { text } = action;
        newState = newState.filter(data => {
          if (
            data["firstName"].toLowerCase() === text.toLowerCase() ||
            data["lastName"].toLowerCase() === text.toLowerCase() ||
            data["heroName"].toLowerCase() === text.toLowerCase() ||
            data["email"].toLowerCase() === text.toLowerCase() ||
            data["gender"].toLowerCase() === text.toLowerCase() ||
            data["age"] === text
          ) {
            return data;
          }
        });
        return newState;
      } else {
        return newState;
      }
    case "SORT_DATA":
      if (action.id !== "") {
        let sortdata = [...newState];
        sortdata.sort(GetSortOrder(action.id));
        return sortdata;
      }
      break;
    default:
      return newState;
  }
};

const GetSortOrder = prop => {
  if (prop === "age") {
    return (a, b) => {
      if (parseInt(a[prop]) > parseInt(b[prop])) {
        return 1;
      } else if (parseInt(a[prop]) < parseInt(b[prop])) {
        return -1;
      }
      return 0;
    };
  }
  return (a, b) => {
    if (a[prop].toLowerCase() > b[prop].toLowerCase()) {
      return 1;
    } else if (a[prop].toLowerCase() < b[prop].toLowerCase()) {
      return -1;
    }
    return 0;
  };
};
