import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Style from './style';

const Header = function() {
  return(
    <View style={Style.header}>
      <Text style={Style.headerText} >Notes</Text>
      <TouchableOpacity
        style={Style.headerButton}
      >
        <Text style={Style.buttonText}>ClearAll</Text>
      </TouchableOpacity>
    </View>

  );
}

export default Header;
