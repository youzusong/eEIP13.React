import fetch  from 'isomorphic-fetch';

const FetchUtil = {
    PostJSON: function (url, data, cors = false) {
        let options = {
            method: 'POST',
            mode: cors ? 'cors' : 'no-cors',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        return fetch(url, options);
    }
};

export default FetchUtil;