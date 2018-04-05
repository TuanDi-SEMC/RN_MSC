import { View, StyleSheet, ImageBackground, Text, TouchableOpacity, Image, ToastAndroid } from 'react-native';
import React, { Component } from 'react';
import HeaderBackground from '../../media/image/background/header_background.png'
import icKHLCNT from '../../media/image/icon/ic_kehoachluachonnhathau.png'
import icKQ from '../../media/image/icon/ic_resuft.png'
import icTBBKQ from '../../media/image/icon/thongbaomoithau.png'
import icTT from '../../media/image/icon/ic_nav_thong_tin.png'
import icTuyChinh from '../../media/image/icon/ic_nav_tuy_chinh.png'
import icHoTro from '../../media/image/icon/ic_nav_ho_tro.png'
import icTTCL from '../../media/image/icon/ic_nav_kinh_doanh.png'
import icTDD from '../../media/image/icon/ic_nav_tin_danh_dau.png'
import icDX from '../../media/image/icon/ic_nav_dang_xuat.png'

class Drawer extends Component {
    constructor(props) {
        super(props);
        this.state = { isLogged: true };
    }

    logout() {
        this.setState({
            isLogged: false,
        })
        ToastAndroid.showWithGravity(
            'Đăng xuất thành công!',
            ToastAndroid.LONG,
            ToastAndroid.CENTER
        );
    }

    goToThongTinChonLoc() {
        this.state.isLogged ? null : ToastAndroid.showWithGravity(
            'Hãy đăng nhập để sử dụng chức năng này!',
            ToastAndroid.LONG,
            ToastAndroid.CENTER
        );
    }
    goToTinDanhDau() {
        this.state.isLogged ? null : ToastAndroid.showWithGravity(
            'Hãy đăng nhập để sử dụng chức năng này!',
            ToastAndroid.LONG,
            ToastAndroid.CENTER
        );
    }

    render() {
        const { header, title, button, image, footer, footerContent, buttonText, avatar, content } = styles;

        const logoutJSX = (
            <View style={{ width: '100%', height: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ alignItems: 'center', marginRight: 20 }}>
                    <Image style={{
                        width: 50,
                        height: 50,
                        alignSelf: 'center',
                        borderRadius: 25,
                    }} source={{ uri: 'https://facebook.github.io/react/logo-og.png' }} />
                    <Text style={content}>Đăng ký</Text>
                </View>
                <View>
                    <Image style={{
                        width: 50,
                        height: 50,
                        alignSelf: 'center',
                        borderRadius: 25,
                    }} source={{ uri: 'https://facebook.github.io/react/logo-og.png' }} />
                    <Text style={content}>Đăng nhập</Text>
                </View>
            </View>);

        const loginJSX = (
            <View style={{ width: '100%', height: '100%', flexDirection: 'row' }}>
                <Image style={avatar} source={{ uri: 'https://facebook.github.io/react/logo-og.png' }} />
                <View style={content}>
                    <Text style={content}>Sign in</Text>
                    <Text style={content}>Sign in</Text>
                </View>
            </View>);

        const HeaderJSX = this.state.isLogged ? loginJSX : logoutJSX;

        const logutButtonJSX = (
            <TouchableOpacity style={button} onPress={this.logout.bind(this)}>
                <Image style={image} source={icDX} /><Text style={buttonText}>Đăng xuất</Text>
            </TouchableOpacity>
        );

        const ButtonJSX = this.state.isLogged ? logutButtonJSX : null;


        return (
            <View style={{ flex: 1, backgroundColor: '#b4b4b4' }} >
                <ImageBackground source={HeaderBackground} style={header}>
                    {HeaderJSX}
                </ImageBackground>
                <View style={{ backgroundColor: '#f0f0f0' }}>
                    <Text style={title}>Danh mục chức năng</Text>
                </View>
                <TouchableOpacity style={button}>
                    <Image style={image} source={icKHLCNT} /><Text style={buttonText}>Kế hoạch lựa chọn nhà thầu</Text>
                </TouchableOpacity>

                <TouchableOpacity style={button}>
                    <Image style={image} source={icTT} /><Text style={buttonText}>Thông tin đấu thầu</Text>
                </TouchableOpacity>

                <TouchableOpacity style={button}>
                    <Image style={image} source={icKQ} /><Text style={buttonText}>Kết quả</Text>
                </TouchableOpacity>

                <TouchableOpacity style={button} onPress={this.goToTinDanhDau.bind(this)}>
                    <Image style={image} source={icTDD} /><Text style={buttonText}>Tin đánh dấu</Text>
                </TouchableOpacity>

                <TouchableOpacity style={button} onPress={this.goToThongTinChonLoc.bind(this)}>
                    <Image style={image} source={icTTCL} /><Text style={buttonText}>Thông tin chọn lọc</Text>
                </TouchableOpacity>

                <TouchableOpacity style={button}>
                    <Image style={image} source={icTBBKQ} /><Text style={buttonText}>Thông báo từ Bộ KD-ĐT</Text>
                </TouchableOpacity>

                <TouchableOpacity style={button}>
                    <Image style={image} source={icTuyChinh} /><Text style={buttonText}>Tùy chỉnh</Text>
                </TouchableOpacity>

                <TouchableOpacity style={button}>
                    <Image style={image} source={icHoTro} /><Text style={buttonText}>Hỗ trợ</Text>
                </TouchableOpacity>
                {ButtonJSX}
                <View style={footer}>
                    <Text style={footerContent}>Phiên bản 1.0 Phát triển bởi MP Software</Text>
                    <Text style={footerContent}>Công ty TNHH Minh Phúc</Text>
                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 150,
    },
    title: {
        width: '100%',
        fontSize: 16,
        padding: 10,
        color: '#1e1e1e',
        fontWeight: 'bold',
        marginBottom: 1,
    },
    button: {
        padding: 10,
        height: 40,
        backgroundColor: '#ffffff',
        marginBottom: 1,
        alignItems: 'center',
        flexDirection: 'row',
    },
    image: {
        alignSelf: 'center',
        width: 24,
        height: 24,
        resizeMode: 'contain',
        marginRight: 10,
        tintColor: '#000'
    },
    footer: {
        paddingTop: 10,
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    footerContent: {
        fontSize: 12,
        color: '#9e9e9e'
    },
    buttonText: {
        fontSize: 13,
        color: '#000'
    },
    avatar: {
        marginLeft: 20,
        width: 50,
        height: 50,
        alignSelf: 'center',
        borderRadius: 25,
    },
    content: {
        alignSelf: 'center',
        paddingLeft: 5,
    }
})

export default Drawer;