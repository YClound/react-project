const Global = (state = "/", action) => {
  // console.log(state, action, 'Global redux')
  switch (action.type) {
    case "GET_SELECTKEYS":
      return state;
    case "SET_SELECTKEYS":
      return state;
    default:
      return "/";
  }
};

export default Global;
