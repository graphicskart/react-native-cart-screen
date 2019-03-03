import React from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { Container, Content } from 'native-base';
import Icons from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/AntDesign'
import Iconss from 'react-native-vector-icons/Entypo'
let { height, width } = Dimensions.get('window');

class Home extends React.Component {
    static navigationOptions = {
        header: null
    }
    constructor() {
        super()
        this.state = {
            popularData: [
                {
                    img: require('../img/shoes.jpg'),
                    heading: 'BOOKMARKS'
                },
                {
                    img: require('../img/earphone.jpg'),
                    heading: 'BOWL'
                },
                {
                    img: require('../img/earphone.jpg'),
                    heading: 'CALCULATOR'
                },
                {
                    img: require('../img/earphone.jpg'),
                    heading: 'BOX'
                },
                {
                    img: require('../img/earphone.jpg'),
                    heading: 'CAMERA'
                },
                {
                    img: require('../img/earphone.jpg'),
                    heading: 'BROWSER'
                },
                {
                    img: require('../img/earphone.jpg'),
                    heading: 'COLOURS'
                },
                {
                    img: require('../img/earphone.jpg'),
                    heading: 'CLIPBOARD'
                },
                {
                    img: require('../img/earphone.jpg'),
                    heading: 'CLOCK'
                }
            ],
            starCount: 3.5
        }
    }
    render() {
        console.log(this.props,"props")
        let { popularData } = this.state
        return (
            <Container>
                <Content>
                    <View style={{marginTop: 30}}>
                        <Text style={styles.headingText}>My Cart</Text>
                        {popularData.map((item, key) =>{
                            return(
                                <View style={styles.mainCon} key={key}>
                                    <View>
                                        <View style={{position: 'absolute',right: 5,top: -5}}>
                                            <TouchableOpacity><Iconss name="cross" size={25} color="#cbcbcd"/></TouchableOpacity>
                                        </View>
                                        <View style={styles.mainViewCon}>
                                            <Image source={require('../img/watch.png')} style={{height: '100%',width: '100%'}}/>
                                        </View>
                                        <View style={styles.textView}>
                                            <Text style={styles.mainText}>Bose Quiet Comfort</Text>
                                            <Text style={[styles.mainText,{fontSize: 12,marginBottom: 6}]}>Black</Text>
                                            <View>
                                                <Text style={{color: '#000',fontSize: 13,fontWeight: 'bold'}}>$520</Text>
                                                <View style={styles.absView}>
                                                    <TouchableOpacity><Icon name="minus" size={25} style={{marginRight: 10}} color="#cbcbcd"/></TouchableOpacity>
                                                    <View style={{backgroundColor: '#fff',height: 30,width: 30,borderWidth: 0.5,borderColor: '#eee',marginRight: 12,justifyContent: 'center',alignItems: 'center'}}><Text style={{color: '#cbcbcd'}}>1</Text></View>
                                                    <TouchableOpacity><Icons name="md-add" size={25} color="#cbcbcd"/></TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            )
                            })}
                        
                    </View>
                </Content>
            </Container>
        )
    }
}
export default Home;

const styles = StyleSheet.create({
    headingText: {
        fontSize: 22,
        color: '#000',
        textAlign: 'center',
        marginBottom: 20
    },
    mainCon: {
        padding: 10,
        backgroundColor: '#f9f6fd',
        height: 90,
        marginLeft: 10,
        marginRight: 10,borderRadius: 5,
        marginBottom: 5
    },
    mainViewCon: {
        height: 70,
        width: 60,
        position: 'absolute',
        left: 10
    },
    textView: {
        marginLeft: 90,
        height: 70,
        justifyContent: 'center'
    },
    mainText: {
        color: '#a9a6ad',
        fontSize: 14,
        marginBottom: 1
    },
    absView: {
        position: 'absolute',
        right: 15,
        flexDirection: 'row',
        height: 30,
        alignItems: 'center',
        bottom: -7
    }
});
