import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default class Header extends Component {

    render() {
        return (
            <View style={ styles.header }>
                <Text style={ styles.title }>
                    通讯录
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    header: {
        width:  width,
        height: 64,
        paddingTop: 30,
        alignItems: 'center',
        backgroundColor: 'rgba(34,34,34,1)'
    },

    title: {
        color: 'white',
        fontSize: 18,
    }
});