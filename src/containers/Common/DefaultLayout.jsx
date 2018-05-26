import React from 'react';
import PropTypes from 'prop-types';
import NavBarView from 'root/components/Common/NavBarView';

class DefaultLayout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <header>
                    <NavBarView title={this.props.pageTitle}/>
                </header>
                <main>
                    {this.props.children}
                </main>
                <footer>

                </footer>
            </div>
        );
    }
}

DefaultLayout.propTypes = {
    pageTitle : PropTypes.string  //頁面標題
}

export default DefaultLayout;