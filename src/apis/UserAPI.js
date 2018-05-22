import fetch from 'isomorphic-fetch';

const UserAPI = {
    Login: function (username, password) {
        const data = {username, password};
        return fetch('http://www.eeip13.com/api/user/login', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json());
    }

};

export default UserAPI;