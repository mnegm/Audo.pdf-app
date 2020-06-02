import React, {Component} from 'react';
import { View, Text, Button, Image, ToastAndroid } from 'react-native';
import ImagePicker from 'react-native-image-picker';

const options={
    title:'my pic app',
    takePhotoButtonTitle: 'take photo',
    chooseFormLibraryButtonTitle: 'choose photo ',

}

class Picks extends Component{
    constructor(props){
        super(props);
        this.state={
            avatarSource:null
        }
    }

    handlephoto = () => {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else {
              const source = { uri: response.data };
          
              // You can also display the image using data:
              // const source = { uri: 'data:image/jpeg;base64,' + response.data };
          
              this.setState({
                avatarSource: response.uri,
              });
              return fetch('https://vision.googleapis.com/v1p4beta1/images:annotate?key=AIzaSyCRJ5NgvYsrp7UVAdFRdoE0EWkLlZzPvXs', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(
    {
        requests: [
            {
                image: {
                    content: response.data
                },
                features: [
                    {
                        type: "TEXT_DETECTION"
                    }
                ]
            }
        ]
    }),
})
.then((response) =>  response.json())
.then((responseJson) => {
  console.log(responseJson.responses[0].fullTextAnnotation.text);
})
.catch((error) => {
  ToastAndroid.show('Cant return DAta from API', ToastAndroid.SHORT);

});}
            }
        );       
    };



    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button title="choose photo " onPress={this.handlephoto} />
            </View>
        );
    }
}


export default Picks;