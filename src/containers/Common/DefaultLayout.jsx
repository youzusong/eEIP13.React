import React from 'react';
import PropTypes from 'prop-types';
import RootLayout from './RootLayout';
import NavBarPanel from './Partial/NavBarPanel';

class DefaultLayout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <RootLayout>
                <header>
                    <NavBarPanel title={this.props.pageTitle} />
                </header>
                <main>
                    {this.props.children}
                </main>
                <footer>

                </footer>
            </RootLayout>
        );
    }
}

RootLayout.propTypes = {
    pageTitle: PropTypes.string //頁面標題
};

export default DefaultLayout;
