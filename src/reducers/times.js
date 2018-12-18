//EXPENSES REDUCER
const timesReducerDefaultState = [];

export default (state = timesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_TIME':
            return [
                ...state,
                action.time
            ];
        case 'REMOVE_TIME':
            return state.filter(({ id }) => id !== action.id); // this returns a new array. if the function returns true, the item is kept and vice versa, id = expense
        case 'EDIT_TIME':
            return state.map((time) => {
                if (time.id === action.id) {
                    return {
                        ...time, // grabs every value from the expense objects
                        ...action.updates // this means to override every value that was changed
                    }
                } else {
                    return time; // This means make no changes
                }; 
            });
            case 'SET_TIMES':
                return action.times;
        default:
            return state;
    }
};

