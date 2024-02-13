import { StatusBar } from 'expo-status-bar';
// import Icon from 'react-native-vector-icons/FontAwesome'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Button, CheckBox, Icon } from "react-native-elements"
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View, FontAwesomeIcon } from 'react-native';
export default function Sign() {

    return (

        <View>
            <View style={styles.header}>
                <Text style={styles.h1}>Sign In</Text>
                <Text style={styles.h2}>Welcome back! Please eneter your details</Text>
            </View>

            <View style={styles.form}>


                <View style={styles.input_div}>
                    <Icon
                        name="mail"
                        type="material"
                        color="#ed8aed"
                        size={25}
                        iconStyle={{ marginRight: 10, padding: 10, backgroundColor: '#f5d0f5', borderRadius: 150 }}
                    />
                    <TextInput value='newemail@gmail.com' style={styles.inputs}></TextInput>
                </View>

                <View style={styles.input_div}>

                    <Icon
                        name="lock"
                        type="material"
                        color="#7893f5"
                        size={25}
                        iconStyle={{ marginRight: 10, padding: 10, backgroundColor: '#d0d8f5', borderRadius: 150 }}
                    />
                    <TextInput value='newemail@gmail.com' secureTextEntry={true} style={styles.inputs}  ></TextInput>
                </View>
                <CheckBox title="Remember me" style={styles.checkbox} />
            </View>

            <View style={styles.form2}>
                <Text style={styles.forgot}>
                    Forgot Password
                </Text>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btn_text}>Sign In</Text>
                </TouchableOpacity>
                <View style={styles.links}>
                    <Text style={styles.text_left}>Create account</Text>
                    <Text style={styles.text_right}> Sign in</Text></View>
            </View>

            <View style={styles.footer_icon}>
                <Icon
                    name="facebook"
                    type="material"
                    color="#2863f7"
                    size={25}
                    iconStyle={{ marginRight: 10, padding: 10, backgroundColor: '#f5d0f5', borderRadius: 150 }}
                />
                <Icon
                    name="google"
                    type="material"
                    color="#ed8aed"
                    size={25}
                    iconStyle={{ marginRight: 10, padding: 10, backgroundColor: '#f5d0f5', borderRadius: 150 }}
                />
                <Icon
                    name="apple"
                    type="material"
                    color="#ed8aed"
                    size={25}
                    iconStyle={{ marginRight: 10, padding: 10, backgroundColor: '#f5d0f5', borderRadius: 150 }}
                />
            </View>
        </View>

    );
}

const styles = StyleSheet.create({

    h1: {
        fontSize: 30,
        fontFamily: 'serif',
    },
    header: {
        marginTop: "20%",
        textAlign: 'center',
        alignItems: 'center',
        gap: 10,
    },
    h2: {
        fontFamily: 'serif',
        color: '#6E756D',
        gap: 10,
    },
    form: {
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        gap: 10,
        margin: 30,
        alignItems: 'flex-start',
    },
    inputs: {
        padding: 10,
        borderRadius: 5,
        // textAlign: 'center',
        width: "80%"


    },
    form2: {
        // alignItems: 'center',
        width: "100%",
        gap: 15,
        marginTop: 100,
        margin: 40,
        flexDirection: 'column',
        display: 'flex',
        justifyContent: 'center',

    },
    forgot: {
        marginLeft: "25%",
        color: '#2DB0DF',
        fontWeight: 'bold',
        fontSize: 16,
    },
    btn: {
        width: "80%",
        padding: 10,
        borderRadius: 35,
        backgroundColor: '#2DB0DF',

    },
    btn_text: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: 'serif',
    },
    text_right: {
        textAlign: 'center',
        width: "20%",
        fontWeight: 'bold',
        color: '#EC9520',
        backgroundColor: '#FBE9D1',
        padding: 6,
        borderRadius: 5,

    },
    text_left: {
        width: "50%",
        padding: 6,

        fontWeight: 'bold',
    },

    links: {
        width: "100%",
        display: 'flex',
        flexDirection: 'row',
        gap: 0,
        justifyContent: 'flex-start',
        margin: 10,
    },
    input_div: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#e6e8ed',
        alignItems: 'center',
        padding: 6,
        borderRadius: 15,
    },
    footer_icon: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,

    },

});