export const initialState = [
    
  ];
  
  //state=intialState is setting state to default
  
  export const carReducer = (state, action) => {
    switch (action.type) {
      //spread what's in state already
  
      case "ADD_TODO":
        //   console.log("*****", "ADD_TODO");
        const newTodo = {
          name: action.payload,
          id: Date.now(),
          completed: false
        };
        //   console.log("!!!!!!!!!!!", newTodo);
        return [...state, newTodo];
      case "REMOVE":
        return state.filter(todo => todo.id !== action.id);
      case "TOGGLE_TODO":
        return state.map(name =>
          name.id === action.id ? { ...name, completed: !name.completed } : name
        );
      case "EDIT":
        return state.map(name =>
          name.id === action.id ? { ...name, task: action.newTask } : name
        );
  
      default:
        return state;
    }
  };