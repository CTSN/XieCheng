/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
//导入组件
import MainPage from  './App/page/main/MainPage';

export default class XieCheng extends Component {
    render() {
        return (
            <MainPage></MainPage>
        );
    }
}

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('XieCheng', () => XieCheng);
