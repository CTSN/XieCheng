/**
 * Created by roy on 2017/8/10.
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

/**
 * 定义分类栏组件
 */
export default class CategroyBar extends Component {

    /**
     *
     * @type {{categroys: null}}
     */
    static defaultProps = {
        categroys: null,
    }

    /**
     * 渲染组件
     * @returns {XML}
     */
    render() {
        var categroyItems = this.props.categroys;
        return (
            <View style={styles.view1Style}>
                {this.renderCategroys(categroyItems)}
            </View>
        );

    }
    /**
     * 遍历创建每个item
     * @param categroyItems
     * @returns {Array} 返回item数据
     */
    renderCategroys(categroyItems) {
        //1.定义组件数组
        var Items = [];
        for (var i = 0; i < categroyItems.length; i++) {
            //2.获取每一个itemBean
            var itemBean = categroyItems[i];
            //3.添加组件
            Items.push(
                <View style={styles.view2Style}>
                    <Image source={{uri:itemBean.icon}} style={styles.img}/>
                    <Text>{itemBean.title}</Text>
                </View>
            )
        }
        //4.返回组件数组
        return Items;
    }
}

const styles = StyleSheet.create({
    view1Style: {flexDirection: 'row'},
    view2Style: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding:10,
        borderBottomColor:'#f8f8f8',
        borderBottomWidth:1,
        borderRightWidth:1,
        borderRightColor:'#f8f8f8'
    },
    img: {width: 20, height: 20,marginBottom:5}
});