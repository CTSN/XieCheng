/**
 * Created by Administrator on 2017/8/8 0008.
 */
import React, {Component} from 'react';
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
import  CenterBar from '../../components/CenterBar';
import CategroyBar from  '../../components/CategroyBar';
import SaleBar from '../../components/SaleBar';
import HotContentBar from '../../components/HotContentBar';
//导入数据
var homebean = require('../../date/homebean.json');

/**
 * 1.定义一个HomePage组件，并导出
 */
export  default  class HomePage extends Component {
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
                    {this.renderItems(homebean.itemBeans)}
                    {/*分类布局*/}
                    <View style={styles.categroys}>
                        {this.renderCategroys(homebean.categroys)}
                    </View>
                    {/*特卖汇*/}
                    <SaleBar benefit={homebean.benefit}/>
                    {/*热门活动*/}
                    <HotContentBar hotPalys={homebean.hotPalys}/>
                </ScrollView>
            </View>
        )
    }

    /**
     * 渲染内容栏
     * @param itemBeans
     */
    renderItems(itemBeans) {
        //1.定义组件数组
        var Items = [];
        for (var i = 0; i < itemBeans.length; i++) {
            //2.获取每一个itemBean
            var itemBean = itemBeans[i];
            //3.添加组件
            Items.push(
                <CenterBar itemBean={itemBean}/>
            )
        }
        //4.返回组件数组
        return Items;
    }

    /**
     * 渲染分类栏
     * @param categroys
     */
    renderCategroys(categroys) {
        //1.定义组件数组
        var Categroys = [];
        for (var i = 0; i < categroys.length / 4; i++) {
            //
            var newCategroys = categroys.slice(4 * i, 4 * (i + 1));
            //3.添加组件
            Categroys.push(
                <CategroyBar key={i} categroys={newCategroys}/>
            )
        }
        //4.返回组件数组
        return Categroys;
    }
}
/**
 * 3.页面的样式
 */
const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        backgroundColor: '#f8f8f8'
    },
    categroys: {
        backgroundColor: 'white',
        borderRadius: 5,
        margin: 5,
    },
})