import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ToastErrorView from 'root/components/Common/ToastErrorView';
import ToastLoadingView from 'root/components/Common/ToastLoadingView';
import * as CommonAction from "root/redux/actions/CommonAction";

class RootLayout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {/*主體內容*/}
                {this.props.children}

                {/*顯示錯誤訊息*/}
                {
                    this.props.common.error
                        ? <ToastErrorView
                            error={this.props.common.error}
                            onCloseHandler={this.props.toggleError}/>
                        : null
                }

                {/*顯示Loading*/}
                {
                    this.props.common.loading
                        ? <ToastLoadingView loading={this.props.common.loading}/>
                        : null
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        common: state.common
    }
}

function mapDispatchToProps(dispatch) {
    return Object.assign({},
        bindActionCreators(CommonAction.Events, dispatch)
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(RootLayout);
