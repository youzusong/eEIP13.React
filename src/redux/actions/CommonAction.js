export const Types = {
    TOGGLE_ERROR: 'TOGGLE_ERROR',
    TOGGLE_LOADING: 'TOGGLE_LOADING'
};

export const Events = {
    toggleError: (payload) => {
        return {
            type: Types.TOGGLE_ERROR,
            payload: payload
        };
    },

    toggleLoading: (payload) => {
        return {
            type: Types.TOGGLE_LOADING,
            payload: payload
        };
    }
};
