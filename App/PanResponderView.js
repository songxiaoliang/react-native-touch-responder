
/**
 * PanResponder 触摸事件
 * @export
 * @class PanResponderView
 * @extends {Component}
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    PanResponder,
} from 'react-native';

export default class PanResponderView extends Component {

    componentWillMount() {
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponderCapture: (evt, gestureState) => {
                console.log('onStartShouldSetPanResponderCapture')
                console.log(gestureState.dx)
                return false;
            },
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => {
                console.log('onMoveShouldSetPanResponderCapture')
                console.log(gestureState)
                return false;
            },
            onStartShouldSetPanResponder: (evt, gestureState) => {
                console.log('onStartShouldSetPanResponder')
                console.log(gestureState)
                return true;
            },
            onMoveShouldSetPanResponder: (evt, gestureState) => {
                console.log('onMoveShouldSetPanResponder')
                console.log(gestureState)
            },
            onPanResponderGrant: (evt, gestureState) => {
                console.log('onPanResponderGrant')
                console.log(gestureState)
            },
            onPanResponderReject: (evt, gestureState) => {
                console.log('onPanResponderReject')
            },
            onPanResponderStart:(evt, gestureState) => {
                console.log('onPanResponderStart')
                console.log(gestureState)
            },
            onPanResponderMove:(evt, gestureState) => {
                console.log('onPanResponderMove')
                console.log(gestureState)
            },
            onPanResponderEnd:(evt, gestureState) => {
                console.log('onPanResponderEnd')
                console.log(gestureState)
            },
            onPanResponderRelease:(evt, gestureState) => {
                console.log('onPanResponderRelease')
                console.log(gestureState)
            },

        });
    }

    render() {
        return (
            <View {...this.panResponder.panHandlers } style={ styles.container }>
               
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        width:  100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#87CEFA'
    },

    btn: {
        width: 100,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff5511'
    },

    btnText: {
        color: 'white'
    }
});