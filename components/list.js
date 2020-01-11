import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export class FlatListBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Jacks'},
            {key: 'Frogs'},
            {key: 'Ceeps'},
            {key: 'Belfort'},
           
        
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}
export default FlatListBasics;

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 25
  
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
