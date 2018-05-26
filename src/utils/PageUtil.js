import { Toast } from 'antd-mobile';

const PageUtil = {
    ToggleLoading: function (flag) {
        if(flag){
            Toast.loading('',0);
        }else{
            Toast.hide();
        }
    }
};

export default PageUtil;
