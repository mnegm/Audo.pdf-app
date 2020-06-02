import React, { Component } from 'react';
import { View, ActivityIndicator, Image,Text } from 'react-native';
import Header from './src/components/header';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Card from './src/components/card';
import CardSection from './src/components/cardSection';
import Button from './src/components/button';
import Footer from './src/components/footer';
import Hpage from './src/components/h1page';
import Wpage from './src/components/h2page';
import Aud from './src/components/audio';
import Picks from './src/components/imagepicker';





class Home extends Component {
    static navigationOptions = {
        header: null
    }
    constructor() {
        super()
        this.state = {
            showMe: true
        }
    }


    componentWillMount() {
        setTimeout(() => {
            this.setState({
                showMe: false
            })
        }, 3000)
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                {
                    this.state.showMe ?
                        <Image source={require('./src/images/splash.png')} style={{ flex: 1, width: null, height: 500 }} />
                        :
                        <View>
                            
                                <CardSection style={{ flexDirection: 'row', backgroundColor: 'green' }}>
                                    <View style={styles.thumbnailContainerStyle}>
                                        <Image
                                            style={styles.thumbnailStyle}
                                            source={require('./src/images/head.jpg')}
                                        />
                                    </View>
                                    <View>
                                        <Text style={styles.headerTextStyle} onPress={() => this.props.navigation.navigate('testNav')} >add file</Text>
                                    </View>
                                </CardSection>
                                <CardSection>
                                    <Text>
                                        recent files
                                    </Text>

                                </CardSection>
                            
                        </View>
                }
            </View>
        );
    }
}

class Test extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
            <Picks />
            {/* <Aud /> */}
             {/* <Card>
                
                <Header headerText='page1' />
            <CardSection>
                <Image source={require('./src/images/sm3.png')} style={{flex: 1, width: null, height:500}} />
            </CardSection>
                <Footer />
        </Card> */}

                
            </View>
        );
    }
}


const rootStack = createStackNavigator({
    home: Home,
    testNav: Test
},
    { initialRouteName: 'home' }
);

const AppContainer = createAppContainer(rootStack);


export default class App extends Component {
    render() {
        return (
            <AppContainer />
        );
    }
}

const styles = {
    viewStyle: {
        justifyContent: 'center',
        backgroundColor: '#F8F8F8',
        alignItems: 'center',   
        height: 40,
        paddingTop: 15,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 1.0,
        shadowRadius: 2,
        elevation: 2,
        position: 'relative'
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    headerTextStyle: {
        fontSize: 20,
        alignItems:'center',
        justifyContent: 'center',
        paddingTop:20
    },
      thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 160,
        marginRight: 110
    }
};

