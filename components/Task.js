import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props) => {

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <View>
          <Text style={styles.itemText}>{props.text}</Text>
          {props.description && <Text style={styles.description}>{props.description}</Text>}
        </View>
      </View>
      {/* Updated the circular view to show a cross mark */}
      <TouchableOpacity style={styles.circular}>
        <Text style={styles.crossMark}>X</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
  },
  description: {
    color: '#808080',
    fontSize: 12,
  },
  circular: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  crossMark: {
    color: '#55BCF6',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default Task;
