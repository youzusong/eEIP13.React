const LocalStorageUtil = {

    Set: function (key, val, time = 3600 * 24 * 365) {
        let cached = {
            data: val,
            exp: +new Date() + time
        };

        localStorage.setItem(key, JSON.stringify(cached));
    },

    Get: function (key) {
        let cached = localStorage.getItem(key);
        if (!cached)
            return null;

        let obj = JSON.parse(cache);
        if (+new Date() > obj.exp)
            return null;

        return obj.data;
    },

    Remove: function (key) {
        localStorage.removeItem(key);
    },

    Clear: function () {
        localStorage.clear();
    }
};

export default LocalStorageUtil;