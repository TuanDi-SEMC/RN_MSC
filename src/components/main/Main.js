import React, { Component } from 'react';

import {
    StackNavigator,
} from 'react-navigation';
import HomeView from './home/HomeView'
import KHLCNTView from './khlcnt/KHLCNTView'

const RootStack = StackNavigator({
    Home: {
        screen: HomeView,
    },
    KHLCNT: {
        screen: KHLCNTView,
    }
});

class Main extends Component {
    open = () => {
        const { openDrawer } = this.props;
        openDrawer();
    }
    render() {
        return (
            <RootStack />
        );
    }
}

export default Main;
