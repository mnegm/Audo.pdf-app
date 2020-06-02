import React, { Component } from 'react';
import { View, Text, Image, Button} from 'react-native';
import Footer from './footer';
import Header from './header';
import Card from './card';
import CardSection from './cardSection';
import Head from './head';

class Wpage extends Component{
    render(){
        return(
            <Card>
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
            </Card>
        );
    }
}

export default Wpage;
