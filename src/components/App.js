import React, { Component } from 'react';
import { View } from 'react-native';
import Drawer from 'react-native-drawer';

import DrawerView from './drawer/Drawer';
import Main from './main/Main'

class App extends Component {
    closeControlPanel = () => {
        this.drawer.close()
    };
    openControlPanel = () => {
        this.drawer.open()
    };
    render() {
        return (
            <Drawer
                ref={(ref) => (this.drawer = ref)}
                content={<DrawerView />}
                tapToClose={true}
                negotiatePan={true}
                panOpenMask={0.2}
                elevation={10}
                openDrawerOffset={0.35} // 20% gap on the right side of drawer
            >
                <Main openDrawer={this.openControlPanel.bind(this)} />
            </Drawer>
        );
    }
}

export default App;