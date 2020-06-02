import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import CardSection from './cardSection';
import {rootStack, Home, Test} from '../../App';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Button from './button';
import 'react-navigation';

const Head = (pages) => {
    return (
        <CardSection style={{ flexDirection:'row',backgroundColor:'green'}}>
            <View style={styles.thumbnailContainerStyle}>
                <Image
                    style={styles.thumbnailStyle}
                    source={require('../images/sm3.png')}
                />
            </View>
            <View>
                <Button style={styles.headerTextStyle} onPress={() => this.props.navigation.navigate(rootStack.Home)} >add file</Button>
            </View>
        </CardSection>
    );
};

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

export default Head;