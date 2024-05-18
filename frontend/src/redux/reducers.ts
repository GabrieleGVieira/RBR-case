const initialState = {
  employees: [],
};

const employeesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_EMPLOYEES":
      return { ...state, employees: action.payload };
    default:
      return state;
  }
};

export default employeesReducer;