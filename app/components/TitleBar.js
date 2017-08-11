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
    Dimensions
} from 'react-native';
export default class TitleBar extends Component{

    static defaultProps = {
        left_text:null,
        right_text:null,
    }

    render(){
        return(
            <View style={styles.top}>
                <Text style={{fontStyle:'bold',fontSize:16,}}>{this.props.left_text}</Text>
                <Text>{this.props.right_text}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    top: {
        backgroundColor:'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f8f8f8',
    },
});