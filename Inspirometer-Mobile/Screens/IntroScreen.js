import React from 'react';
import {StyleSheet, Dimensions} from 'react-native'
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';
import { Container, Text, View, Content, Body, FooterTab, Left, Right } from 'native-base';
import { SliderBox } from "react-native-image-slider-box";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

var backgrounds = [
  require("../assets/IntroScreenPics/women1.jpeg"),
  require("../assets/IntroScreenPics/man1.jpeg"),
  require("../assets/IntroScreenPics/man2.jpg"),
  require("../assets/IntroScreenPics/man3.jpg"),
];

export default class IntroScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      index: 0,
    };
  }

  switchScreen(index) {
    this.setState({index: index})
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    })
    .catch(err => console.log("loadAsync error: " + err));
    this.setState({ isReady: true });
  };

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    //STYLESHEET

    const styles = StyleSheet.create({
      content: {
        flex: 1,
        position: 'absolute',
        
      },

      title: {
        position: 'absolute',
        zIndex: 1,
        top: 100,
        backgroundColor: 'rgba(0,0,0,0.7)',
        padding: 10,
      }, 

      titleText: {
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        fontSize: windowWidth * 0.1,
        paddingTop: 0 * windowHeight,
        paddingLeft: 0.04 * windowWidth,
        color: '#ADC5FF',
        backgroundColor: 'rgba(0,0,0,0)'
      },

      sliderBox: {
        height: windowHeight,
        width: windowWidth,
        top: 0,
        left: 0,
        zIndex: 0,
      },
    });

    //MAIN BODY

    return (
      <Container >


        <Content style={styles.content}>
          <Body>
            <View style={styles.title}>
              <Text style={styles.titleText}>Inspirometer</Text>
            </View>

            <SliderBox 
              pointerEvents="none"

              images={backgrounds} 
              style={styles.sliderBox}

              imageLoadingColor="#000"

              autoplay
              circleLoop

              resizeMethod={'resize'}
              resizeMode={'cover'}
              sliderBoxHeight={windowHeight * 1.2}
              
              dotColor="transparent"
              inactiveDotColor="transparent"
            />
          </Body>
        </Content>

        
      </Container>
    );
  }

}