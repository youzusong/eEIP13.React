const UrlUtil = {
    GetParam: function (name, url = null) {
        let search = '';

        if (!url) {
            search = window.location.search.substr(1);
        }
        else {
            let index = url.indexOf('?');
            if (index != -1) search = url.substr(index + 1);
        }

        if (!search)
            return null;

        let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        let arr = search.match(reg);
        if (arr != null)
            return unescape(arr[2]);

        return null;
    },

    ReplaceParam: function (url, name, value) {
        let reg = new RegExp(name + '=([^&]*)', 'gi');
        if (url.match(reg)) {
            url = url.replact(name + '=' + RegExp.$1, name + '=' + value);
        } else {
            let replaceText = name + '=' + value;
            let index = url.indexOf('?');
            if (index == -1) {
                url = url + '?' + replaceText;
            } else if (index == url.length - 1) {
                url = url + replaceText;
            } else {
                url = url + '&' + replaceText;
            }
        }

        return url;
    }
};

export default UrlUtil;