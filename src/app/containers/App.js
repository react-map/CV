import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { deepOrange500 } from 'material-ui/styles/colors';

import Layout from '../components/layout/Layout';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500
    }
});

class App extends Component {
    render() {
        const {children} = this.props;
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <Layout>
                    {children}
                </Layout>
            </MuiThemeProvider>
        );
    }
}

export default App;