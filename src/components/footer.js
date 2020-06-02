import React from 'react';
import { View, Text, Image, Button, ImageBackground, TouchableOpacity, ToastAndroid } from 'react-native';

var SoundPlayer = require('react-native-sound');

var song = null;

class Footer extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            pause: false,
        };
    }

    componentWillMount() {
        song = new SoundPlayer('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', SoundPlayer.MAIN_BUNDLE, (error) => {
            if (error)
                ToastAndroid.show('Error when init SoundPlayer :(((', ToastAndroid.SHORT);
        });
    }





//play music press button
    onPressButtonPlay() {

        if (song != null) {//جرب شيل السطر ده الصبح يمكن ال pause تتحل
            if (this.state.pause) // play resume
                song.play((success) => {
                    if (!success)
                        ToastAndroid.show('Error when play SoundPlayer :(((', ToastAndroid.SHORT);
                });
            else song.pause();

            this.setState({ pause: !this.state.pause });
        }
    }

    //image to base64 
    toDAtaURL(src, callback) {
        var xhttp = new XMLHttpRequest();

        xhttp.onload = function () {
            var fileReader = new FileReader();
            fileReader.onloadend = function () {
                callback(fileReader.result);
            };
            fileReader.readAsDataURL(xhttp.response);
        };
        xhttp.responseType = 'blob';
        xhttp.open('GET', src, true);
        xhttp.send();

    }
    render() {

        return (
            <View style={styles.viewStyle}>

                <Image source={require('../images/Sound.png')} style={{ height: 35, width: 35 }} />

                <TouchableOpacity onPress={this.onPressButtonPlay.bind(this)}>
                    <ImageBackground
                        source={require('../images/play.jpg')}
                        style={{ width: 55, height: 55 }}
                    >
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.toDAtaURL('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', function (dataURL) {
                    console.log(dataURL);
                })}>
                    <ImageBackground
                        source={require('../images/next.png')}
                        style={{ width: 30, height: 30 }}
                    >
                    </ImageBackground>
                </TouchableOpacity>

            </View>

        );
    }
}


const styles = {
    viewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#F8F8F8',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        paddingBottom: 15,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 1.0,
        shadowRadius: 2,
        elevation: 2,
        position: 'relative'
    }


};

export default Footer;