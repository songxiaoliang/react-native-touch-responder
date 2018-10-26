/**
 * 高仿微信通讯录字母索引导航栏
 * @export
 * @class WordSearchSuspension
 * @extends {Component}
 */
import React, { PureComponent } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    PanResponder
} from 'react-native';

const { height } = Dimensions.get('window');
// 标题栏高度
const HEADER_HEIGHT = 64; 
// 字母搜索容器高度
const WORD_SEARCH_CONTAINER_HEIGHT = height - HEADER_HEIGHT; 
// 字母搜索容器纵向 padding 
const WORD_SEARCH_CONTAINER_V_PADDING = 8; 
// 字母触摸区域之外的高度（标题栏，padding，margin等）
const WORD_TOUCH_OUTSIDE_HEIGHT = HEADER_HEIGHT + WORD_SEARCH_CONTAINER_V_PADDING * 2
// 单个字母高度
const WORD_HEIGHT = Math.floor((WORD_SEARCH_CONTAINER_HEIGHT - WORD_SEARCH_CONTAINER_V_PADDING * 2) / 28);
// 搜索字母，长度: 28
const WORDS = ['↑', '✩' ,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W', 'X', 'Y', 'Z', '#'];

export default class WordSearchSuspension extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            bg: 'transparent'
        }
    }
    
    componentWillMount() {
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponderCapture: (evt, gestureState) => {
                return true;
            },
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => {
            },
            onStartShouldSetPanResponder: (evt, gestureState) => {
                return true;
            },
            onMoveShouldSetPanResponder: (evt, gestureState) => {
            },
            onPanResponderReject: (evt, gestureState) => {
            },
            onPanResponderGrant: (evt, gestureState) => {
                const { index, word }  = this.getWord(gestureState.y0);
                this.props.showWordDialog && this.props.showWordDialog(index, word);
                this.changeBgColor(this.refs.wordContainer, 'rgba(0,0,0,0.3)');
            },
            onPanResponderStart:(evt, gestureState) => {
            },
            onPanResponderMove:(evt, gestureState) => {
                // 获取当前滑动到的位置，根据当前位置，取出index 对应 word
                const { index, word } = this.getWord(gestureState.moveY);
                this.props.showWordDialog && this.props.showWordDialog(index, word);
            },
            onPanResponderEnd:(evt, gestureState) => {
            },
            onPanResponderRelease:(evt, gestureState) => {
                //  隐藏dialog
                this.props.hideWordDialog && this.props.hideWordDialog();
                this.changeBgColor(this.refs.wordContainer, 'transparent');
            },
        });
    }

    /**
     * 获取当前点击位置，判断当前位置所处哪个index区域，显示当前index对应值
     * @memberof WordSearchSuspension
     */
    getWord(touchY) {
        const wordAreaTouchY = (touchY - WORD_TOUCH_OUTSIDE_HEIGHT);
        let pressIndex = parseInt(wordAreaTouchY / WORD_HEIGHT);
        if (pressIndex < 0) {
            pressIndex = 0;
        } else if (pressIndex >= WORDS.length) {
            pressIndex = WORDS.length - 1;
        }
        return { index: pressIndex, word: WORDS[pressIndex] };
    }

    /**
     * 切换背景色
     * @memberof SearchSuspension
     */
    changeBgColor(componentRef, bgColor) {
        componentRef.setNativeProps({
            style: {
                backgroundColor: bgColor
            }
        })
    }

    render() {
        return (
            <View ref='wordContainer' {...this.panResponder.panHandlers } style={ styles.container }>
               {this.renderWord()}
            </View>
        )
    }

    /**
     * 渲染
     */
    renderWord() {
        return WORDS.map((item, index) => {
            return (
                <View key={ index } style={ styles.wordContainer }>
                    <Text style={ styles.word }>
                        {item}
                    </Text>
                </View>
            )
        })
    }
}

const styles = StyleSheet.create({

    container: {
        width:  30,
        height: WORD_SEARCH_CONTAINER_HEIGHT,
        borderRadius: 50,
        position: 'absolute',
        right: 0,
        paddingVertical: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },

    wordContainer: {
        width: 30,
        height: WORD_HEIGHT,
        alignItems:  'center',
        justifyContent: 'center',
    },

    word: {
        fontSize: 15,
        color: '#3a3a3a',
        fontFamily: 'PingFangSC-Regular'
    }
});
