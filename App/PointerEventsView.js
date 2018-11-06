/**
 * PointerEvents 实例
 */

import React, {Component} from 'react';
import { Dimensions, StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';

const { width, height } = Dimensions.get('window');

export default class PointerEventsView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      listData: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','#','$','%','~','&','*']
    }
  }

  render() {

    const { listData } = this.state;

    return (
      <View style={styles.container}>
        <FlatList 
          data={listData}
          renderItem={this.renderItem}
        />
       {this.renderModalView()}
      </View>
    );
  }

  renderItem = ({ item,index }) => {
    return (
      <Text style={ styles.itemText } onPress={() => this.showModalView()}>
        {item}
      </Text>
    )
  }

  showModalView() {
    this.setState({ showModal: !this.state.showModal });
  }

  renderModalView() {
    return this.state.showModal ? (
      <View style={ styles.secondView }>
        <TouchableOpacity onPress={() => this.showModalView()}>
          <Text style={ styles.text }>我是遮罩层视图</Text>
        </TouchableOpacity>
      </View>
    ) : null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  itemText: {
    width: width,
    color: '#202020',
    fontSize: 18,
    marginVertical: 10,
  },

  secondView: {
    position: 'absolute',
    top: (height - 300) / 2,
    left: (width - 300) / 2,
    width: 300,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#255555'
  },

  text: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'PingFang-SC-Regular'
  }
});
