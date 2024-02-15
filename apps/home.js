import { Image, StyleSheet, View,Text, ScrollView } from "react-native";
import { Icon } from "react-native-elements";
export default function Home() {

    return (
        <View style={styles.container}>

            <View style={styles.header}>
            <Icon
                    name="arrow-left"
                    type="font-awesome"
                    color="#000"
                    size={25}
                    iconStyle={{ marginRight: 10, padding: 10, borderRadius: 150,opacity:0.4 }}
                />
                <Text style={{fontWeight:'bold',fontSize:19,fontFamily:'serif'}}>
                    Text to Image
                </Text>
                <Icon
                    name="bars"
                    type="font-awesome"
                    color="#000"
                    size={25}
                    iconStyle={{ marginRight: 10, padding: 10, borderRadius: 150,opacity:0.6  }}
                />
            </View>
            <ScrollView horizontal='true' scrollTo>
            <View style={styles.images}>
                <Image source={require('../assets/images/image1.jpg')} style={{ width: "48%", borderRadius: 10 }} />
                <Image source={require('../assets/images/image3.jpg')} style={{ width: "48%", borderRadius: 10 }} />
                <Image source={require('../assets/images/image5.jpg')} style={{ width: "48%", borderRadius: 10 }} />
                <Image source={require('../assets/images/image3.jpg')} style={{ width: "48%", borderRadius: 10 }} />
            </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width:"100%",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginLeft:"-2%",
        alignItems:'center',
    },
    images: {
        display: 'flex',
        flexDirection: 'row',
        // flexWrap: 'wrap',
        gap: 10,
        // justifyContent:'space-evenly',
        marginTop: 10,
    },
    container: {
        marginTop: 30,
        marginLeft: 17,
        width: "90%",
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },


});