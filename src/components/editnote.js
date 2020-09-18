import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
  goBacK
} from 'react-native';
import {keys, setAsyncItem, getAsyncItem} from '../../services/storage';

import Style from './style';

class EditNote extends Component {
  constructor(props) {
    super(props);


    this.state= {
      titleInput: '',
      noteInput: '',
      notes: [],
      selectedRow: props.location.state.index
    }
  }
  componentDidMount() {
    getAsyncItem(keys.notes).then(showNote => {
      if (showNote) {
        //console.log('the:' + JSON.stringify(keys.notes));
        this.setState({
        titleInput: showNote[this.state.selectedRow].titleInput,
        noteInput: showNote[this.state.selectedRow].noteInput,
        notes: showNote

        });
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
    let editNote = this.state.notes
      editNote[this.state.selectedRow].titleInput = this.state.titleInput;
      editNote[this.state.selectedRow].noteInput = this.state.noteInput;

    setAsyncItem(keys.notes, editNote);

    this.props.history.goBack();

  }

  // deleteNoteInput() {
  //   let selcNote = this.state.notes;
  //   var index = selcNote.indexOf(this.state.titleInput);
  //   selcNote.splice(index);
  //
  //
  //   removeAsyncItem(keys.notes);
  //   this.props.history.goBack();
  //
  // }



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


export default EditNote;
