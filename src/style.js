import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'top',
    },
    nav: {
      backgroundColor: '#F34D0B',
      height: "10%",
      width: "100%",
      padding: 25,
      marginTop: 30,
      justifyContent:'center',
  
    },
    nav_text: {
      fontSize: 20,
      color: '#fff',
      textAlign:'right',
      fontWeight:"bold",
      fontFamily:'serif',
      fontSize:20,
    },
    lists:{
      width:"100%",
      textAlign:'center',
      justifyContent:'center',
      marginLeft:"20%",
    },
    item_list: {
      padding:10,
      fontSize:20,
      borderStyle:'dotted',
      borderWidth:1,
      marginTop:20,
      width:"80%",
      textAlign:'center',
      borderRadius:10,
      backgroundColor:'#e8e8e8',
    },
    footer:{
  justifyContent:'bottom',
  textAlign:'stretch',
  marginTop:"60%",
  marginLeft:"20%",
  width:"100%",
    },
    input: {
  borderBottomWidth:3,
  borderRadius:10,
  padding:10,
  fontSize:18,
  width:"60%",
  textAlign:'center',
    },
    footerbtn: {
  backgroundColor:'#F34D0B',
  color:'#fff',
  width:"20%",
  padding:10,
  fontSize:11,
  borderRadius:3,
  marginTop:"-10%",
  marginLeft:"60%"
    },
    header: {
  fontSize:20,
  fontFamily:'serif',
  fontWeight:"bold",
  marginTop:20,
    },
  });
  