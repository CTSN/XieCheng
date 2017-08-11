/**
 * Created by roy on 2017/8/11.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
} from 'react-native';

var Dimensions = require('Dimensions');
var windowWidth = Dimensions.get('window').width;

import TitleBar from '../components/TitleBar';

export default class HotContentBar extends Component {

    static defaultProps = {
        hotPalys: null,
    }

    render() {
        var data = this.props.hotPalys;
        var items = data.playItem;
        return (
            <View style={styles.container}>
                {/*标题*/}
                <TitleBar left_text={data.title} right_text={data.descrption}/>
                {/*上边*/}
                {this.renderTop(items)}
                {/*下边*/}
                {this.renderBottom(items)}
            </View>
        );
    }

    renderTop(items) {
        return <View style={styles.top}>
            {/*左边*/}
            <View style={{flex:1,marginRight:1}}>
                <Image style={{width:windowWidth/2,height:windowWidth/2}} source={{uri:items.imageUrl}}/>
            </View>
            {/*右边*/}
            <View style={{flex:1,}}>
                <Image style={[styles.top_img,{marginBottom:1}]} source={{uri:items.items[0].imageUrl}}/>
                <Image style={styles.top_img} source={{uri:items.items[1].imageUrl}}/>
            </View>
        </View>
    }

    renderBottom(items) {
        return <View style={styles.bottom}>
            <Image style={[styles.top_img,{marginRight:1}]} source={{uri:items.items[2].imageUrl}}/>
            <Image style={styles.top_img} source={{uri:items.items[3].imageUrl}}/>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f8f8f8',
        marginTop: 10,
        marginBottom: 10,
    },
    top: {
        flexDirection: 'row',
        marginBottom: 1,
    },
    top_img: {
        width: windowWidth / 2,
        height: windowWidth / 4
    },
    bottom: {
        flexDirection: 'row',
    },

});