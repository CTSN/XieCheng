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
    Dimensions
} from 'react-native';

//获取手机屏幕的宽
var {width} =Dimensions.get('window');
//导入第三方库
import Swiper from 'react-native-swiper';
/**
 * 1.定义一个Banner组件，并导出
 */
export  default  class Banner extends  Component {

    /**
     * 定义接收数据
     * @type {{banners: null}}
     */
    static defaultProps={
        banners:null,
    }

    /**
     * 2.渲染组件的页面
     * @returns {XML}
     */
    render() {
        //接收数据
        var banners=this.props.banners;
        return (
            <View >
                <Swiper height={150}

                        dot={<View style={{backgroundColor: 'rgba(0,0,0,0.6)', width: 5,
                                height: 5, borderRadius: 4, marginLeft: 3,
                                marginRight: 3, marginTop: 3, marginBottom: 3}} />}

                        activeDot={<View style={{backgroundColor: 'white', width: 8,
                                height: 8, borderRadius: 4, marginLeft: 3,
                                marginRight: 3, marginTop: 3, marginBottom: 3}} />}

                        paginationStyle={{
                                bottom: 0,
                                right: 10,
                                justifyContent:'flex-end'
                         }}

                        loop={true}

                        autoplay={true}


                >
                    {/*渲染banners的函数*/}
                    {this.renderBanners(banners)}
                </Swiper>

            </View>
        )
    }

    /***
     *  渲染banners的函数
     */
    renderBanners(banners){
        //1.定义组件数组
        var Banners=[];
        for(var i=0;i<banners.length;i++){
            //2.获取每一个banner
            var banner=banners[i];
            //3.添加组件
            Banners.push(
                <View key={i} >
                    <Image source={{uri:banner.imgUrl}}
                           style={{width:width,height:150}}></Image>
                </View>
            )
        }
        //4.返回组件数组
        return Banners;
    }

}

/**
 * 3.页面的样式
 */
const  styles=StyleSheet.create({

})