/**
 * Created by Administrator on 2017/8/8 0008.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

/**
 * 1.定义一个CenterBar组件，并导出
 */
export  default  class CenterBar extends Component {

    static  defaultProps = {
        itemBean: null,
    }

    /**
     * 2.渲染组件的页面
     * @returns {XML}
     */
    render() {

        // return (
        //     <Image style={{width:20,height:20,backgroundColor:'red'}} source={{uri:'http://dimg04.c-ctrip.com/images/700g0e0000007354qBE83_720_286_258.jpg'}}></Image>
        //
        // )


        //接收数据
        var itemBean = this.props.itemBean;
        return (
            <View style={styles.viewStyle}>
                {/*左边*/}
                <View style={styles.view1Style}>
                    {this.renderLeftItem(itemBean)}
                </View>
                {/*中边*/}
                {this.renderItem(itemBean, 0, 1)}
                {/*右边*/}
                {this.renderItem(itemBean, 2, 3)}
            </View>
        )
    }

    /**
     * 渲染每一个item
     * @param itemBean
     * @param index1
     * @param index2
     * @returns {XML}
     */
    renderItem(itemBean, index1, index2) {
        return (
            <View style={styles.view3Style}>
                {/*上*/}
                <View style={{flex:1,backgroundColor:itemBean.bgColor,justifyContent:'center',
                             borderRightWidth:1,borderRightColor:'white',
                             borderBottomWidth:1,borderBottomColor:'white'}}>
                    <Text
                        style={{textAlign:'center',color:'white',fontSize:16}}
                    >
                        {itemBean.items[index1].title}
                    </Text>
                    {this.renderTag(itemBean.items[index1])}
                </View>
                {/*下*/}
                <View style={{flex:1,backgroundColor:itemBean.bgColor,justifyContent:'center',
                             borderRightWidth:1,borderRightColor:'white',
                             borderBottomWidth:1,borderBottomColor:'white'}}>
                    <Text
                        style={{textAlign:'center',color:'white',fontSize:16}}
                    >
                        {itemBean.items[index2].title}
                    </Text>



                    {this.renderTag(itemBean.items[index2])}
                </View>
            </View>
        )
    }

    /**
     * 渲染左边item
     */
    renderLeftItem(itemBean) {
        if (itemBean.type == 0) {
            return (
                <View style={{flex:1,backgroundColor:itemBean.bgColor,
                                justifyContent:'center',alignItems: 'center',
                                borderBottomWidth:1,borderBottomColor:'white',
                                borderRightWidth:1,borderRightColor:'white' }}>
                    <Text
                        style={{textAlign:'center',color:'white',fontSize:16}}
                    >
                        {itemBean.title}
                    </Text>

                    <Image
                        style={{width:40,height:40,marginTop:10}}
                        source={{uri:itemBean.imageUrl}}
                    >

                    </Image>
                </View>
            )
        } else if (itemBean.type == 1) {
            return (
                this.renderItem(itemBean, 4, 5)
            )
        }
    }

    renderTag(item) {
        if (!(item.tagUrl == "")) {
            console.log(item.tagUrl);
            let url = item.tagUrl;
            return <Image style={{position:'absolute',
                                bottom:0,
                                right:0,
                                width:129,
                                height:56}}
                          source={{uri:url}}
                    />
        }
    }

}

/**
 * 3.页面的样式
 */
const styles = StyleSheet.create({
    viewStyle: {
        height: 100,
        backgroundColor: 'white',
        borderTopWidth: 5,
        borderTopColor: 'white',

        flexDirection: 'row',

    },
    view1Style: {
        flex: 1,
    },
    view2Style: {
        flex: 1,
        backgroundColor: 'pink'
    },
    view3Style: {
        flex: 1,
    }
});