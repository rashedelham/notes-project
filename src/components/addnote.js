import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button
} from 'react-native';
import {keys, setAsyncItem, getAsyncItem} from '../../services/storage';

import Style from './style';

class AddNote extends Component {
  constructor(props) {
    super(props);


    this.state= {
      titleInput: '',
      noteInput: '',
      notes: []
    }
  }
  componentDidMount() {
    getAsyncItem(keys.notes).then(showNote => {
      if (showNote) {
        this.setState({notes: showNote});
        console.log(JSON.stringify(showNote));
      }

    });
  }

  onTitleChange(value) {
    this.setState({titleInput: value});
  }
  onNoteChange(value) {
    this.setState({noteInput: value});
  }

  saveNoteInput() {
    const wholeNote = {
      titleInput: this.state.titleInput,
      noteInput: this.state.noteInput
    }
    let newNote = this.state.notes;
    newNote.push(wholeNote);

    setAsyncItem(keys.notes,newNote);
    this.props.history.push("/");

  }



  render() {

    return(
      <View style={Style.addPage}>
        <TextInput
          style={Style.titleInput}
          placeholder="title"
          underlineColorAndroid='rgba(0,0,0,0)'
          onChangeText={this.onTitleChange.bind(this)}
          value={this.state.titleInput}
        />
        <TextInput
            style={Style.noteInput}
            placeholder="type your note here..."
            multiline ={true}
            underlineColorAndroid='rgba(0,0,0,0)'
            onChangeText={this.onNoteChange.bind(this)}
            value={this.state.noteInput}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}>
          <Button
            title="Save"
            onPress={this.saveNoteInput.bind(this)}
          />
          <Button
            title="back"
            onPress={() => this.props.history.push("/") }
           />
        </View>

      </View>
    );
  }
}


export default AddNote;
