import React, { Component } from 'react';
import { View, Text, Button, ImageBackground, StyleSheet, Dimensions, HtmlText } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import imgBackground from '../../../media/image/background/bg_main_2.jpg'
import { getBanner } from '../../../networking/Server'

class HomeView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bannerFromServer: []
        }
    }

    static navigationOptions = {
        header: null,
    };
    open = () => {
        const { openDrawer } = this.props;
        openDrawer();
    }

    componentDidMount() {
        getBanner().then((data) => {
            this.setState({
                bannerFromServer: data
            })
        }).catch((error) => {
            this.setState({
                bannerFromServer: []
            })
        });
    }

    toast() {

    }

    render() {
        const { backgroundStyle, footer } = styles;
        const { bannerFromServer } = this.state;
        var title = bannerFromServer.title;
        var content = bannerFromServer.content;
        return (
            <View>
                <ImageBackground source={imgBackground} style={backgroundStyle} >
                    <View style={footer}></View>
                </ImageBackground>
            </View >
        );
    }
}

var { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
    backgroundStyle: {
        width, height,
        justifyContent: 'flex-end',
    },
    footer: {
        width: '100%',
        height: 80,
        backgroundColor: 'black'
    }
})

export default HomeView;
