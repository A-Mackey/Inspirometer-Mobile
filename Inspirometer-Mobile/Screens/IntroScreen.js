import React from 'react';
import {StyleSheet, Dimensions} from 'react-native'
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';
import { Container, Text, Content, Body, FooterTab, Left, Right } from 'native-base';

//Pages
import Chart from '../pages/Chart'
import NewReading from '../pages/NewReading'
import Settings from '../pages/Settings'
import User from '../pages/User'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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
    });
    this.setState({ isReady: true });
  };

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    let AppComponent = null;

    if (this.state.index == 0) {
        AppComponent = NewReading
    } else if (this.state.index == 1) {
        AppComponent = Chart
    } else if (this.state.index == 2) {
      AppComponent = Settings
    } else if (this.state.index == 3) {
      AppComponent = User
    }

    //VARIABLES

    const iconFooterSize = 26;

    //FUNCTIONS
  
    function testFunction(test) {
      console.log("Redoing Test...");
    }

    //STYLESHEET

    const styles = StyleSheet.create({
      
    });

    //MAIN BODY

    return (
      <Container>


        <Content>
          <Body>
            <Text>
              INTRO SCREEN
            </Text>
          </Body>
        </Content>

        
      </Container>
    );
  }

}