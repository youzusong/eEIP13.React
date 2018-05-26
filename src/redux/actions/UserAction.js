export const Types = {
    USER_LOGIN: 'USER_LOGIN',
    USER_LOGOUT: 'USER_LOGOUT'
};

export const Events = {
    login: (payload) => {
        return {
            type: Types.USER_LOGIN,
            payload: payload
        }
    },

    logout: () => {
        return {
            type: Types.USER_LOGOUT
        }
    }

};
