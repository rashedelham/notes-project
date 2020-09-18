import { StyleSheet } from 'react-native';

const Style = StyleSheet.create({
  //App
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  //Header
  header: {
    flexDirection: 'row',
    backgroundColor: 'orange',
    padding: 20,
    borderRadius: 2,
    //alignItems: 'center',
    // justifyContent: 'space-between'
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff'
  },
  headerButton: {
    padding: 5,
    borderRadius: 2,
    margin: 10,
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: 'green'
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },


  //main
  main: {
   flex: 1
  },

 //Footer
 footer: {
   flexDirection: 'row',
   padding: 10,
   borderRadius: 2,
   justifyContent: 'flex-end'

 },
 image: {
   width: 40,
   height: 40,
  // position: 'absolute',
  // right: 0,
   // margin: 10

   //flexDirection: 'row'
 },

 //AddNote
 addPage: {
  flex: 1,
   backgroundColor: '#fff'
 },
 titleInput: {
    padding: 5,
    borderRadius: 5,
    fontWeight: 'bold',
    fontSize: 20,
    borderWidth: 1,
    margin: 5
},
noteInput: {
   flex:1,
   padding: 5,
   textAlignVertical: 'top',
   fontSize: 20,
   fontWeight: 'bold',
   margin: 5,
   borderWidth: 1,
   borderRadius: 5

},
 addButton: {
   padding: 5,
   borderRadius: 2,
   margin: 10,
   position: 'absolute',
   right: 0,
   bottom: 0,
   backgroundColor: 'blue'
   // alignItems: 'center',
   // justifyContent: 'center',
 },
 addBTNText: {
   fontSize: 15,
   fontWeight: 'bold',
   color: '#fff',
 },

 //row
 rowClm: {
  flexDirection: 'row',
  backgroundColor: 'orange',
  margin: 2,
  padding: 2,
  alignItems: 'center',
  borderWidth: 1,
  borderRadius: 20,
  borderColor: 'blue',
},
rowText: {
  backgroundColor: 'brown',
  fontSize: 18,
  color: 'whitesmoke',
  margin: 5,
  paddingHorizontal: 5,
  borderRadius: 10,
},

});

export default Style;
