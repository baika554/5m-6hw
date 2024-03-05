const defaultState = {
    user: {
        name: '',
        age: '',
        gender: ''
    }
};

const userReducer = (state = defaultState, action) => {
    if (action.type === 'UPDATE_USER') {
        return {
            ...state,
            user: {
                ...state.user,
                [action.payload.field]: action.payload.value
            }
        };
    }
    return state;
};

export default userReducer;
