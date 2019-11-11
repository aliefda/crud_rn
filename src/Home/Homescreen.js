import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import {ListItem } from 'react-native-elements'
import axios from 'axios';
 
export default class Category extends Component {
  constructor(props) {
    super(props)
    this.state = {
        materi: []
    };
  }
  componentDidMount() {
    axios.get(`http://ec2-3-81-168-96.compute-1.amazonaws.com/api/materi`)
      .then(res => {
        const materi = res.data.data;
        console.log(materi);
        this.setState({ materi });
      })
  }
 
  keyExtractor = (item, index) => index.toString()
  renderItem = ({ item }) => (
  <ListItem
    title={item.title}
    subtitle={item.content}
    leftAvatar={{ source: { uri: item.thumbnail } }}
  />
)
  render() {
    return (
        <View style={styles.container} >
          <View style={styles.header}>
            <Text style={styles.txtHeader}> MATERI </Text>
          </View>
            <FlatList
               keyExtractor={this.keyExtractor}
               data={this.state.materi}
               renderItem={this.renderItem}
             />
       </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
       flex: 1,
  },
  txtHeader: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:'#fff'
  },
  header: {
    height:70,
    backgroundColor:'brown',
    justifyContent:'center',
    alignItems:'center'
  },
});