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
  StyleSheet,
  SectionList
} from 'react-native';
import Header from './App/Header';
import WordSearchSuspension from './App/WordSearchSuspension';

const { width, height } = Dimensions.get('window');

const LIST_DATA = [
  { key: '↑', data: [{name: '月明'},{name: '阿黄'}] },
  { key: '✩', data: [{name: '小紫'},{name: '阿珂'}] },
  { key: 'A', data: [{name: '阿黄'},{name: '阿珂'}] },
  { key: 'B', data: [{name: '奔波霸'},{name: '巴博'}] },
  { key: 'C', data: [{name: '聪聪'},{name: '葱❤️'}] },
  { key: 'D', data: [{name: '等待到来'},{name: '灯火阑珊'}] },
  { key: 'E', data: [{name: '饿了么'},{name: '饿死啦'}] },
  { key: 'F', data: [{name: '菲菲'},{name: '肥聪'}] },
  { key: 'G', data: [{name: '工棚'},{name: '汞灯'}] },
  { key: 'H', data: [{name: '🌈'},{name: '轰炸机'}] },
  { key: 'I', data: [{name: 'ila'},{name: 'ingcong'}] },
  { key: 'J', data: [{name: 'jira'},{name: '劲松'}] },
  { key: 'K', data: [{name: '康熙来了'},{name: '康佳'}] },
  { key: 'L', data: [{name: '龙飞风舞'},{name: '🐲大吉大利'}] },
  { key: 'M', data: [{name: '梦🆚'},{name: '朦胧'}] },
  { key: 'N', data: [{name: 'NBility'},{name: '🐂'}] },
  { key: 'O', data: [{name: 'omging'},{name: 'omyga'}] },
  { key: 'P', data: [{name: 'Polo'},{name: '婆娑起舞'}] },
  { key: 'Q', data: [{name: '去哪儿'},{name: '求之不得'}] },
  { key: 'R', data: [{name: '日升东方'},{name: '日行千里'}] },
  { key: 'S', data: [{name: '随心所欲'},{name: '随萌'}] },
  { key: 'T', data: [{name: '⚽踢️'},{name: 'TTTTT'}] },
  { key: 'U', data: [{name: 'UU妹儿'},{name: 'U梦溪'}] },
  { key: 'V', data: [{name: 'Viuc'},{name: 'vaiwo'}] },
  { key: 'W', data: [{name: '魍'},{name: '未来'}] },
  { key: 'X', data: [{name: '戏水'},{name: '嘻嘻😁'}] },
  { key: 'Y', data: [{name: '迎面而来'},{name: '嘤嘤🎵'}] },
  { key: 'Z', data: [{name: '自来水'},{name: '自我陶醉'}] },
  { key: '#', data: [{name: '哈哈哈😄'},{name: '嚒嚒'}] },
]


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      word: null,
      data: LIST_DATA
    }
  }

  /**
   * 显示字母Dialog提示
   */
  showWordDialog(index, word) {
    this.setState({
      word
    });
    this.scrollSectionList(index)
  }

  /**
   * 隐藏字母Dialog提示
   */
  hideWordDialog() {
    this.setState({ word: null });
  }


  /*手指滑动，触发事件*/
  scrollSectionList(index) {
    this.refs.sectionList.scrollToLocation({animated: false, itemIndex: 0, sectionIndex: index, viewOffset: 26});
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content' />
        <Header />
        <View style={ styles.content}>
           <SectionList
            ref="sectionList"
            renderSectionHeader={this.renderSectionHeader}
            renderItem={this.renderItem}
            sections={this.state.data}
            keyExtractor={(item, index)=> index}
            ItemSeparatorComponent={this.itemSeparator} 
          />
          <WordSearchSuspension 
            showWordDialog={(index, word)=>this.showWordDialog(index, word)}
            hideWordDialog={()=>this.hideWordDialog()}
          />
        </View>
        {this.renderWordDialog()}
      </View>
    );
  }

  renderSectionHeader = (info) => (
    <Text style={ styles.sectionHeader }>
      {info.section.key}
    </Text>
  )
     

  renderItem = (info) => (
    <Text style={ styles.listItem }>
      {info.item.name}
    </Text>
  )

  itemSeparator = () => <View style={ styles.separtor }/>;

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
  },

  sectionHeader: {
    color: 'black',
    backgroundColor: '#f5f5f5',
    paddingLeft: 20,
    height: 26,
    lineHeight: 26,
  },

  listItem:{
    height: 30,
    lineHeight: 30,
    width: width,
    marginLeft: 10,
    color: 'black',
  },

  itemSeparator:{
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#f5f5f5'
  },

});
