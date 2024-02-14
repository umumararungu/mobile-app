import { StatusBar } from 'expo-status-bar';
// import Icon from 'react-native-vector-icons/FontAwesome'
import { TextInput, Checkbox } from 'react-native-paper'
import { Button, Icon } from "react-native-elements"
import { FlatList, StyleSheet, Text, TouchableOpacity, View, FontAwesomeIcon } from 'react-native';
export default function Sign() {

    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.h1}>Sign In</Text>
                <Text style={styles.h2}>Welcome back! Please eneter your details</Text>
            </View>

            <View style={styles.form}>

                <TextInput
                    style={{ width: "100%", backgroundColor: '#f2f4f5' }}
                    label='email'
                    mode='outline'
                    left={<TextInput.Icon color="#c472b1" icon={"email-outline"} style={{ backgroundColor: '#dbc3d0' }}></TextInput.Icon>}

                ></TextInput>

                <TextInput label='password'
                    secureTextEntry={true}
                    mode='outline'
                    style={{ width: "100%", backgroundColor: '#f2f4f5' }}
                    left={<TextInput.Icon color="#727cc4" icon={"lock-outline"} style={{ backgroundColor: '#c8d1db' }}></TextInput.Icon>}

                ></TextInput>
                <Checkbox.Item label="Remember me"

                />
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
                    <Text style={styles.text_right}> Sign in</Text>
                </View>
            </View>

            <View style={styles.footer_icon}>
                <Icon
                    name="facebook"
                    type="material"
                    color="#2863f7"
                    size={25}
                    iconStyle={{ marginRight: 10, padding: 10, borderRadius: 150 }}
                />
                <Icon
                    name="google"
                    type="font-awesome"
                    color='#d95e11'
                    size={25}
                    iconStyle={{ marginRight: 10, borderRadius: 10 }}
                />
                <Icon
                    name="apple"
                    type="material"
                    color="#000"
                    size={25}
                    iconStyle={{ marginRight: 10, padding: 10, borderRadius: 150 }}
                />
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 5,
        marginRight: 5,
        width: "100%",
    },

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
    form2: {
        gap: 15,
        marginTop: 100,
        marginLeft:30,


    },
    forgot: {
        marginLeft: "25%",
        color: '#2DB0DF',
        fontWeight: 'bold',
        fontSize: 16,
    },
    btn: {
        width: "90%",
        padding: 11,
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
        fontWeight: 'bold',
        color: '#EC9520',
        backgroundColor: '#FBE9D1',
        padding: 7,
        borderRadius: 5,
        marginLeft:40,

    },
    text_left: {
        padding: 6,
        fontWeight: 'bold',
        marginLeft:20,
    },

    links: {
        width: "100%",
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-around',
        marginLeft:"-10%",
        gap:40
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
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        marginTop:30,

    },

});