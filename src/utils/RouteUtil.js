const RouteUtil = {

    BuildPath: function (path, params) {
        if (!path)
            return '';

        if (!params)
            return path;

        let ph = path;
        for (let key in params) {
            let val = params[key];
            if (!val || (typeof(val) !== 'string' && typeof(val) !== 'number'))
                continue;

            ph = ph.replace(':' + key, val);
        }

        return ph;
    }

};

export default RouteUtil;