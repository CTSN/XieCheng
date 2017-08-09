/**
 * Created by Administrator on 2017/8/8 0008.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput
} from 'react-native';

/**
 * 1.定义一个HomeTopBar组件，并导出
 */
export  default  class HomeTopBar extends  Component {
    /**
     * 2.渲染组件的页面
     * @returns {XML}
     */
    render() {
        return (
            <View style={styles.viewStyle}>
                {/*左*/}
                <View style={styles.view1Style}>
                    <Image style={styles.imageStyle} source={require('../image/scan_icon.png')}></Image>
                </View>

                {/*中*/}
                <View style={styles.view2Style}>
                    <TextInput
                      placeholder={'目的地/酒店/景点'}
                      underlineColorAndroid={'transparent'}
                      style={styles.textInputStyle}

                    >
                    </TextInput>

                    <Image style={styles.searchStyle} source={require('../image/search_icon.png')}></Image>

                </View>

                {/*右*/}
                <View style={styles.view3Style}>
                    <Image style={{width:27,height:27}} source={require('../image/message_icon.png')}></Image>
                </View>
            </View>
        )
    }
}

/**
 * 3.页面的样式
 */
const  styles=StyleSheet.create({
    viewStyle:{
        backgroundColor:'white',
        height:40,
        flexDirection:'row',
        alignItems:'center'
    },
    view1Style:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',

    },
    imageStyle:{
        width:23,
        height:23,
    },
    view2Style:{
        flex:6,
        backgroundColor:'#e1e1e1',
        height:30,
        borderRadius:3,
    },
    textInputStyle:{
        padding:0,
        paddingTop:4,
        paddingLeft:30,
    },
    searchStyle:{
        width:23,
        height:23,

        /*定位*/
        position:'absolute',
        top:4,
        left:4,
    },
    view3Style:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})