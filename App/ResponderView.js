
/**
 * 自定义触摸事件
 * @export
 * @class ResponderView
 * @extends {Component}
 */
import React, { Component } from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';

export default class ResponderView extends Component {

    componentWillMount() {
        this.responder = {
            onStartShouldSetOnResponderCapture: (evt, gestureState) => {
                console.log('onStartShouldSetPanResponderCapture')
                console.log(gestureState.dx)
                return false;
            },
            onMoveShouldSetOnResponderCapture: (evt, gestureState) => {
                console.log('onMoveShouldSetPanResponderCapture')
                console.log(gestureState)
                return false;
            },
            onStartShouldSetOnResponder: (evt, gestureState) => {
                console.log('onStartShouldSetPanResponder')
                console.log(gestureState)
                return true;
            },
            onMoveShouldSetOnResponder: (evt, gestureState) => {
                console.log('onMoveShouldSetPanResponder')
                console.log(gestureState)
            },
            onResponderGrant: (evt, gestureState) => {
                console.log('onPanResponderGrant')
                console.log(gestureState)
            },
            onResponderReject: (evt, gestureState) => {
                console.log('onPanResponderReject')
            },
            onPanResponderStart:(evt, gestureState) => {
                console.log('onPanResponderStart')
                console.log(gestureState)
            },
            onResponderMove:(evt, gestureState) => {
                console.log('onPanResponderMove')
                console.log(gestureState)
            },
            onResponderEnd:(evt, gestureState) => {
                console.log('onPanResponderEnd')
                console.log(gestureState)
            },
            onResponderRelease:(evt, gestureState) => {
                console.log('onPanResponderRelease')
                console.log(gestureState)
            },

        };
    }

    render() {
        return (
            <View {...this.responder } style={ styles.container } />
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