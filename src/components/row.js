import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { withRouter } from 'react-router-native';

import Style from './style';

const Row = function(props) {
  //console.log('row indix is:' + props.index.toString());
  return (
    <View >
      <TouchableOpacity onPress={() => props.history.push({
          pathname: '/editnote',
          state: {
            index: props.index
          }
      })}>
      <View style={Style.rowClm}>
        <Text style={Style.rowText}>{props.index+1}</Text>
        <Text style={Style.rowText}>{props.item.titleInput}</Text>
        <Text style={Style.rowText}>{props.item.noteInput}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default withRouter(Row);
