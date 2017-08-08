/**
 * Created by Administrator on 2017/8/8 0008.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

/**
 * 1.定义一个MinePage组件，并导出
 */
export  default  class MinePage extends  Component {


    /**
     * 2.渲染组件的页面
     * @returns {XML}
     */
    render() {
        return (
            <View style={styles.viewStyle}>
                <Text>MinePage</Text>
            </View>
        )
    }

}

/**
 * 3.页面的样式
 */
const  styles=StyleSheet.create({
    viewStyle:{
        flex:1,
        backgroundColor:'green'
    }
})