import React from 'react';
import {StyleSheet, Dimensions, Text} from 'react-native'
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';
import { Container, Header, View, Fab, Button, Footer, Content, FooterTab, Left, Right } from 'native-base';
import BleManager from 'react-native-ble-manager';

//Pages
import MainScreen from './Screens/MainScreen'
import IntroScreen from './Screens/IntroScreen';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      index: 0,
    };
  }

  switchScreen(index) {
    console.log("Switching from: " + this.state.index + " to " + index);
    this.setState({index: index})
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });

    console.log("Mounted");

    BleManager.start({ showAlert: false }).then(() => {
        // Success code
        console.log("Module initialized");
    })
    .catch(err => console.log("Ble Manager starting error: " + err));
  };

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    let AppComponent = null;

    if (this.state.index == 0) {
        AppComponent = IntroScreen
    } else if (this.state.index == 1) {
        AppComponent = MainScreen
    }

    const styles = StyleSheet.create({
      header: {
        backgroundColor: '#FFF',
      },

      headerText: {
        color: '#ADC5FF',
        fontSize: 20,
      },

      headerIcons: {
        color: '#ADC5FF',
      },  

      body: {
        backgroundColor: 'white',
      },

      footer: {
        //height: windowHeight * 0.05,
        backgroundColor: '#FFF',
      },

      footerTab: {
      },

      footerIconActive: {
        //paddingTop: windowHeight * 0.0125,
        //height: windowHeight * 0.05,
        color: 'black',
      },

      footerIconDeactive: {
        //paddingTop: windowHeight * 0.0125,
        //height: windowHeight * 0.05,
        color: '#ADC5FF',
      }
    });

    //MAIN BODY

    return (
      <Container>


        <AppComponent/>

          {
          
          this.state.index == 0 
          
          ? 
          
          <Footer active={this.state.index === 0}>
          <Button onPress={() => this.switchScreen(1)}>
            <Text>
              Go to main screen
            </Text>
          </Button>
        </Footer> 
        
        : 
        
        null
        }
        
      </Container>
    );
  }

}