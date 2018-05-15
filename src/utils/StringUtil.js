const StringUtil = {
    Format: function (format) {
        let args = arguments;
        let argsLen = args.length;
        if (argsLen > 1) {
            if (argsLen == 2 && typeof(args[1]) === 'object') {
                return format.replace(/{([^{}]+)}/gm, function (a, b, c, d) {
                    return args[1][b];
                });
            } else {
                return format.replace(/{(\d+)}/gm, function (a, b, c, d) {
                    return args[~~b + 1];
                });
            }
        }
        return format;
    },

    Truncate: function (str, len, postfix) {
        let strLen = str.length;
        if (strLen > len) {
            str = str.substr(0, len);
            if (postfix) str += postfix;
        }

        return str;
    }
};

export default StringUtil;