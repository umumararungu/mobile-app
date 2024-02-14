import { StatusBar } from 'expo-status-bar';
// import Icon from 'react-native-vector-icons/FontAwesome'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Button, CheckBox, Icon } from "react-native-elements"
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View, FontAwesomeIcon } from 'react-native';
export default function Shiping() {

    return (

        <View>
            <View style={styles.header}>
                <View style={styles.header1}>
                    <Icon
                        name="home"
                        type="font-awesome"
                        color="#cc9618"
                        size={25}
                        iconStyle={{}}
                    />
                    <Text>Home</Text>
                    <Icon
                        name="home"
                        type="font-awesome"
                        color="#34b8c7"
                        size={25}
                        iconStyle={{ textAlign: 'right' }}
                    />
                </View>
                <View style={styles.user}>
                    <Text>Username</Text>
                    <Text>phone</Text>
                </View>
                <View>
                    <Text>contact contact contact contact </Text>
                    <Text>contact contact contact contact </Text>
                </View>
            </View>

            <View style={styles.header2}>
                <View style={styles.header1}>
                    <Icon
                        name="home"
                        type="font-awesome"
                        color="#cc9618"
                        size={25}
                        iconStyle={{}}
                    />
                    <Text>Office</Text>
                    <Icon
                        name="home"
                        type="font-awesome"
                        color="#5c5e5e"
                        size={25}
                        iconStyle={{ textAlign: 'right' }}
                    />
                </View>
                <View style={styles.user}>
                    <Text>Username</Text>
                    <Text>phone</Text>
                </View>
                <View>
                    <Text>contact contact contact contact </Text>
                    <Text>contact contact contact contact </Text>
                </View>
            </View>

            <View style={styles.header3}>
                <View style={styles.header13}>

                    <Text style={styles.header_text1}>Add new shipping address</Text>
                    <Icon
                        name="home"
                        type="font-awesome"
                        color="#5c5e5e"
                        size={25}
                        iconStyle={{ textAlign: 'right' }}
                    />
                </View>

                <View style={styles.contact_part}>
                <Icon
                        name="phone"
                        type="font-awesome"
                        color="#5c5e5e"
                        size={25}
                        iconStyle={{ textAlign: 'right' }}
                    /> <Text style={styles.h1_contact}>Personal Info </Text>
                    <Text style={styles.h2_contact}>Bill to the home address</Text>
                    <Text style={styles.h2_contact}>+250 785 789 536 </Text>
                    <Text style={styles.h2_contact}>newemail@gmail.com </Text>


                </View>
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    h2_contact:{
        color:'#818182',
        fontFamily:'serif',
        fontSize:16,
    },
    h1_contact:{
        fontSize:20,
        fontFamily:'serif',
        fontWeight:"900",
    },
    header: {
        height: 200,
        width: "83%",
        backgroundColor: '#e6f1f5',
        margin: 30,
        marginTop: 50,
        borderRadius: 10,
        borderColor: '#34b8c7',
        borderWidth: 2,
        gap: 20,

        // justifyContent:'space-between',
        padding: 10,
    },
    header2: {
        height: 200,
        width: "83%",
        backgroundColor: '#e3e5e6',
        margin: 30,
        marginTop: 5,
        borderRadius: 10,
        borderColor: '#c5c6c7',
        borderWidth: 1,
        gap: 20,

        // justifyContent:'space-between',
        padding: 10,
    },
    header3: {
        height: 200,
        width: "83%",
        margin: 30,
        marginTop: 5,

        gap: 20,

        // justifyContent:'space-between',
        padding: 10,
    },
    header1: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        justifyContent: '',
        alignItems: 'center',
    },
    header13: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: 'serif',
        fontSize: 10,
    },
    header_text1: {
        fontFamily: 'serif',
        fontSize: 15,
        fontWeight: 'bold',
    },
    user: {
        borderBottomWidth: 1,
        borderColor: '#b8bebf',
        padding: 10,
        borderRadius: 15,

    },
    contact_part:{
        display:'flex',
        gap:10,
    },


});