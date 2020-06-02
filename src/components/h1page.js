import React, { Component } from 'react';
import { View, Text, Image, Button} from 'react-native';
import Footer from './footer';
import Header from './header';
import Card from './card';
import CardSection from './cardSection';

class Hpage extends Component{
    render(){
        return(
            <Card>
                
                    <Header headerText='page1' />
                <CardSection>
                    <Image source={require('../images/sm3.png')} style={{flex: 1, width: null, height:500}} />
                </CardSection>
                    <Footer />
            </Card>
        );
    }
}

export default Hpage;
