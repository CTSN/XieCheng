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
//引入TabNavigator库
import  TabNavigator from 'react-native-tab-navigator';
import HomePage from '../home/HomePage';

/**
 * 1.定义一个MainPage组件，并导出
 */
export  default  class MainPage extends  Component {
    /**
     * 状态机
     * @type {{}}
     */
    state={
        selected:'首页'
    }
    /**
     * 2.渲染组件的页面
     * @returns {XML}
     */
    render(){
        return (
            <TabNavigator
                tabBarStyle={{backgroundColor:'#e1e1e1',height:50}}
            >
                {/*首页*/}
                <TabNavigator.Item
                    renderIcon={ ()=> <Image style={styles.imageStyle}
                                        source={require('../../image/home_icon_nornol.png')}/>}
                    title="首页"

                    selected={this.state.selected=='首页'}
                    renderSelectedIcon={ ()=> <Image style={styles.imageStyle}
                                        source={require('../../image/home_icon_press.png')}/>}

                    onPress={ ()=> this.setState({
                        selected:'首页'
                    }) }
                >
                    {/*引入HomePage组件*/}
                    <HomePage/>
                </TabNavigator.Item>

                {/*行程*/}
                <TabNavigator.Item
                    renderIcon={ ()=> <Image style={styles.imageStyle}
                                        source={require('../../image/plan_icon_nornol.png')}/>}
                    title="行程"

                    selected={this.state.selected=='行程'}
                    renderSelectedIcon={ ()=> <Image style={styles.imageStyle}
                                        source={require('../../image/plan_icon_press.png')}/>}

                    onPress={ ()=> this.setState({
                        selected:'行程'
                    }) }

                >
                    <Text>plan</Text>

                </TabNavigator.Item>

                {/*客服*/}
                <TabNavigator.Item
                    renderIcon={ ()=> <Image style={styles.imageStyle}
                                        source={require('../../image/customer_icon_nornol.png')}/>}
                    title="客服"

                    selected={this.state.selected=='客服'}
                    renderSelectedIcon={ ()=> <Image style={styles.imageStyle}
                                        source={require('../../image/customer_icon_press.png')}/>}

                    onPress={ ()=> this.setState({
                        selected:'客服'
                    }) }
                >
                    <Text>customer</Text>
                </TabNavigator.Item>
                {/*我的*/}
                <TabNavigator.Item
                    renderIcon={ ()=> <Image style={styles.imageStyle}
                                        source={require('../../image/mine_icon_nornol.png')}/>}
                    title="我的"

                    selected={this.state.selected=='我的'}
                    renderSelectedIcon={ ()=> <Image style={styles.imageStyle}
                                        source={require('../../image/mine_icon_press.png')}/>}

                    onPress={ ()=> this.setState({
                        selected:'我的'
                    }) }
                >
                    <Text>mine</Text>

                </TabNavigator.Item>

            </TabNavigator>
        )
    }
}
/**
 * 3.页面的样式
 */
const  styles=StyleSheet.create({
    imageStyle:{
        width:24,
        height:24,
        marginTop:2,
    }
})