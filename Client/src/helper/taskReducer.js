export const taskReducer = (state, action) => {

    switch (action.type) {
        case 'SET_TASK':
            return action.payload
            break;

        case 'ADD_TASK':
            return [...state, action.payload]
            break;

        case 'UPDATE_TASK':
            return state.map(task =>
                task._id === action.payload._id
                    ? action.payload
                    : task
            );
            break;

        case "DELETE_TASK":
            return state.filter(task => task._id !== action.payload);
            break;

        case "UPDATE_FIELD":
            return {
                ...state,
                [action.payload.field] : action.payload.value
            }
            break;

        default:
            break;
    }

}