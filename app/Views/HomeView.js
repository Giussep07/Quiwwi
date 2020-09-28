import React from 'react';
import {BackHandler} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import WebView from 'react-native-webview';

export default class HomeView extends React.Component {

    constructor(props) {
        super(props);
        this.WEBVIEW_REF = React.createRef();
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    handleBackButton = () => {
        this.WEBVIEW_REF.current.goBack();
        return true;
    };

    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <WebView
                    ref={this.WEBVIEW_REF}
                    source={{
                        uri: 'https://www.quiwwi.com/',
                    }}
                    onLoadEnd={() => {
                        SplashScreen.hide();
                    }}
                />
            </SafeAreaView>
        );
    }

}
