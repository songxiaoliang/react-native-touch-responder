/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { 
  View,
  Text,
  StatusBar,
  Dimensions,
  StyleSheet
} from 'react-native';
import Header from './App/Header';
import WordSearchSuspension from './App/WordSearchSuspension';

const { width, height } = Dimensions.get('window');

export default class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      word: null,
    }
  }


  /**
   * 显示字母Dialog提示
   */
  showWordDialog(word) {
    this.setState({
      word
    })
  }

  /**
   * 隐藏字母Dialog提示
   */
  hideWordDialog() {
    this.setState({ word: null });
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content' />
        <Header />
        <View style={ styles.content}>
          <WordSearchSuspension 
            showWordDialog={(word)=>this.showWordDialog(word)}
            hideWordDialog={()=>this.hideWordDialog()}
          />
        </View>
        {this.renderWordDialog()}
      </View>
    );
  }

  /**
   * 字母提示 Dialog
   */
  renderWordDialog() {
    return this.state.word ? 
    <View style={ styles.wordDialog }>
      <Text style={ styles.wordDialogText }>
        { this.state.word }
      </Text>
    </View>
    :
    null
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  content: {
    flex: 1,
    alignItems: 'flex-end'
  },

  wordDialog: {
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    backgroundColor: 'rgba(0,0,0,0.6)',
    position: 'absolute',
    left: (width - 80) / 2,
    top: (height - 80) / 2,
  },

  wordDialogText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'PingFangSC-Regular'
  }
});
