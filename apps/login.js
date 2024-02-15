import { Image, StyleSheet, View, Text,KeyboardAvoidingView,ScrollView } from "react-native";
import { TextInput, Checkbox } from "react-native-paper";
import { Button, Icon } from "react-native-elements"
const images = require('../assets/login/backgound.jpg');
export default function Login() {

    return (
        <KeyboardAvoidingView
        style={{ flex: 1 }}
        enabled>
    <ScrollView>
        <View style={styles.container}>
            <View style={styles.images}>
                <Image source={images} style={{ width: "100%", borderRadius: 10 }} />

            </View>

            <Text style={styles.login}>Login</Text>
            <View style={styles.form}>

                <TextInput
                    style={{ width: "100%", backgroundColor: '#fff',borderRadius:30  }}
                    label='email'
                    mode='flat'
                    underlineColor='transparent'
                    left={<TextInput.Icon color="#ebae34" icon={"account-outline"} style={{ backgroundColor: '#e8dfcf' }}></TextInput.Icon>}
                    theme={{ roundness: 30 }}
                ></TextInput>

                <TextInput label='password'
                    secureTextEntry={true}
                    mode='flat'
                    underlineColor='transparent'
                    style={{ width: "100%", backgroundColor: '#fff',borderRadius:30 }}
                    left={<TextInput.Icon color="#727cc4" icon={"lock-outline"} style={{ backgroundColor: '#dae6e8' }}></TextInput.Icon>}
                    theme={{ roundness: 30 }}
                ></TextInput>
            </View>

            <View style={styles.links}>
                    <Text style={styles.text_left}>Forgot Password?</Text>
                    <Text style={styles.text_right}> Sign in</Text>
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
        </ScrollView>
    </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    login:{
        textAlign:'center',
        marginTop:10,
        fontWeight:'bold',
        fontSize:25,
        fontFamily:'serif',
    },
    text_right: {
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: '#000',
        padding: 10,
        borderRadius: 25,
        width:"30%",
        textAlign:'center',
        fontSize:16,
        // marginLeft:40,

    },
    text_left: {
        // padding: 6,
        fontWeight: 'bold',
        marginLeft:0,
        color:'#8377bf',
        fontSize:16,
    },
    links: {
        width: "100%",
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems:'center',
        gap:40
    },
    footer_icon: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        marginTop:30,

    },
    form:{
margin:20,
gap:10,
    },

    images: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
    },
    container: {
        width: "100%",
        backgroundColor: '#F5F5F5',
        height: "100%"
    },


});