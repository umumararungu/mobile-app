import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './src/style.js'
export default function Todo() {

  return (


    <View style={styles.container}>
      {/* <Text>Hello world !!!</Text> */}
      <View style={styles.nav}>
        <Text style={styles.nav_text}>Todo</Text>
      </View>
      <View style={styles.lists}>

        <Text style={styles.header}>Todo list items</Text>

        {/* <FlatList
      data={[
        {key:'1 cleaning'},
        {key:'2 cleaning'},
        {key:'3 cleaning'},
        {key:'4 cleaning'},
        ]} */}
        {/* renderItem={({item}) =><Text style={styles.item_list}>{item.key}</Text>
      }
        /> */}

        <TextInput value='1 clearning ' style={styles.item_list}></TextInput>
        <TextInput value='2 clearning ' style={styles.item_list}></TextInput>
        <TextInput value='3 clearning ' style={styles.item_list}></TextInput>
        <TextInput value='4 clearning ' style={styles.item_list}></TextInput>

      </View>

      <View style={styles.footer}>
        <TextInput style={styles.input} placeholder='enter to do item' />
        <TouchableOpacity>
          <Text style={styles.footerbtn}> Add Todo</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>

  );}