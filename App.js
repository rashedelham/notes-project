import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter } from 'react-router-native';

import Header from './src/components/header';
import Style from './src/components/style';
import Routes from './src/components/route';





export default class App extends React.Component {

  render() {
    return (
     <NativeRouter>
        <View style={Style.container}>
            <Header />
            <Routes />
         </View>
      </NativeRouter>
    );
  }
}
