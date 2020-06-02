
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
var Sound = require('react-native-sound');


var RNFS = require('react-native-fs');


export default class Aud extends Component{
  constructor(props) {
    super(props)

    this.state = {
      pause: false,
      testaudio: ''
    };
  }
  path = RNFS.DocumentDirectoryPath +'/tshrt.mp3';

  componentWillMount() {
    
    
    
    // this.base64toaudio(this.state.testaudio,path);
    // this.loadSoundFile('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
    // song = new SoundPlayer('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', SoundPlayer.MAIN_BUNDLE, (error) => {
    //   if(error)  
    //     ToastAndroid.show('Error when init SoundPlayer :(((', ToastAndroid.SHORT);
    // });
  }
pressToPlay = function(){
  this.tts("Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with");
    path = RNFS.DocumentDirectoryPath +'/tsldiut.mp3';
}

tts= function(texts){
 return fetch('https://texttospeech.googleapis.com/v1/text:synthesize?key=AIzaSyCRJ5NgvYsrp7UVAdFRdoE0EWkLlZzPvXs', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    input: 
    {
    text: texts  },
  
    voice: {
    languageCode: "en-US"
  }
  ,
    audioConfig: {
    audioEncoding: "MP3",
    speakingRate: 1.0,
  
    effectsProfileId: [
  "handset-class-device"  
  ]
  }
  
  }),
})
.then((response) =>  response.json())
.then((responseJson) => {
  this.setState({ testaudio: responseJson.audioContent }) ;
  console.log(this.state.testaudio);

  this.base64toaudio(responseJson.audioContent,path);

})
.catch((error) => {
  ToastAndroid.show('Error when init SoundPlayer :(((', ToastAndroid.SHORT);

});}


base64toaudio= function (base64,path){

  RNFS.writeFile(path, base64, 'base64')
  .then((success) => {
    console.log('FILE WRITTEN!');
   })
   .catch((err) => {
    console.log(err.message);
   })
   .then(() =>  sound = new Sound(path, '', () => sound.play())
   );
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