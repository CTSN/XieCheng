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
    ScrollView,
    Dimensions
} from 'react-native';
import  HomeTopBar from '../../components/HomeTopBar';
import  Banner from '../../components/Banner';
import  CenterBar from '../../components/CenterBar'
//导入数据
var homebean=require('../../date/homebean.json');

/**
 * 1.定义一个HomePage组件，并导出
 */
export  default  class HomePage extends  Component {
    /**
     * 2.渲染组件的页面
     * @returns {XML}
     */
    render() {

        return (
            <View style={styles.viewStyle}>
                {/*引入HomeTopBar组件*/}
                <HomeTopBar></HomeTopBar>
                <ScrollView>
                    {/*广告轮播图*/}
                    <Banner banners={homebean.banners}></Banner>
                    {/*内容栏*/}
                    {/*{this.renderItems(homebean.itemBeans)}*/}

                </ScrollView>
            </View>
        )
    }

    /**
     * 渲染内容栏
     * @param itemBeans
     */
    renderItems(itemBeans){
        //1.定义组件数组
        var Items=[];
        for(var i=0;i<itemBeans.length;i++){
            //2.获取每一个itemBean
            var itemBean=itemBeans[i];
            //3.添加组件
            Items.push(
                <View key={i}>
                    <CenterBar itemBean={itemBean}></CenterBar>
                </View>
            )
        }
        //4.返回组件数组
        return Items;
    }
}
/**
 * 3.页面的样式
 */
const  styles=StyleSheet.create({
    viewStyle:{
        flex:1,
        backgroundColor:'green'
    },
})