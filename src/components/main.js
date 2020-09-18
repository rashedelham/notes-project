import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { keys, setAsyncItem, getAsyncItem} from '../../services/storage';

import Style from './style';
import Row from './row';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: []
    }
  }

  componentDidMount() {
    getAsyncItem(keys.notes).then(showNote => {
      if (showNote) {
        this.setState({notes: showNote});
      }
    });
  }

  renderRow() {
    return this.state.notes.map((item, index) => {
    
      return(
         <Row key={`list_notes_${index}`} item={item} index={index} />
      );
    });
  }
  render() {
    return(
      <View style={Style.main}>

          <View style={{flex:1}}>
            <ScrollView>
              {this.renderRow()}
            </ScrollView>
          </View>

          <View style={Style.footer}>
            <TouchableOpacity
            onPress={() => this.props.history.push('/addnote')}>
            <Image
               style={Style.image}
               source={require('../assets/images/add_icon.png')} />
             </TouchableOpacity>
          </View>
     </View>
    );
  }
}


export default Main;
