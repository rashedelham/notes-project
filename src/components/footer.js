import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { withRouter } from 'react-router-native';


import Style from './style';


const Footer = function(props) {
  return(
    <View style={Style.footer}>
      <TouchableOpacity
      onPress={() => props.history.push('/addnote')}>
      <Image
         style={Style.image}
         source={require('../assets/images/add_icon.png')} />
       </TouchableOpacity>
    </View>
  );
}

export default withRouter(Footer);


// <TouchableOpacity
//   style={Style.footerButton}
//   //onPress={() => props.history.push('/addNote')}
// >
// </TouchableOpacity>

// <Link to="/">
//
//     <Image
//        style={Style.image}
//        source={require('../assets/images/add_icon.png')}
//     />
//
//   </Link>
// </View>
