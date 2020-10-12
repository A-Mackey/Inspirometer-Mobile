import React from 'react';
import {StyleSheet} from 'react-native'
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';
import { Container, Header, View, Fab, Button, Icon, Body, Title, Tabs, Tab, ScrollableTab, Footer, Content, FooterTab, Left, Right } from 'native-base';
import Chart from './pages/Chart'
import NewReading from './pages/NewReading'
import Settings from './pages/Settings'
import User from './pages/User'

export default class App extends React.Component {
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
        AppComponent = Chart
    } else if (this.state.index == 1) {
        AppComponent = NewReading
    } else if (this.state.index == 2) {
      AppComponent = Settings
    } else if (this.state.index == 3) {
      AppComponent = User
    }

    const iconFooterSize = 28;

    //FUNCTIONS
  
    function testFunction(test) {
      console.log("Redoing Test...");
    }

    //STYLESHEET

    const styles = StyleSheet.create({
      header: {
        backgroundColor: '#1D3461',
        textShadowColor: 'white',
      },

      headerText: {
        color: '#FFF',
      },

      headerIcons: {
        color: '#FFF',
      },  

      body: {
        backgroundColor: 'white',
      },

      footer: {
        backgroundColor: '#1D3461',
      },

      footerIconActive: {
        color: '#000',
      },

      footerIconDeactive: {
        color: '#FFF',
      }
    });

    //MAIN BODY

    return (
      <Container>
        <Header style={styles.header}>
          <Left>

          </Left>

          <Body>
              <Title style={styles.headerText}>Inspirometer</Title>
          </Body>

          <Right>
            <Button transparent onPress={testFunction}>
              <Icon name='refresh' style={styles.headerIcons}></Icon>
            </Button>
          </Right>
        </Header>


        <Content>
          <AppComponent/>
        </Content>


        <Footer style={styles.footer}>
          <FooterTab>
            <Button active={this.state.index === 0} onPress={() => this.switchScreen(0)}>
              <AntDesign style={this.state.index == 0 ? styles.footerIconActive : styles.footerIconDeactive} name="edit" size={iconFooterSize} />
            </Button>
            </FooterTab>

            <FooterTab>
            <Button active={this.state.index === 1} onPress={() => this.switchScreen(1)}>
              <AntDesign style={this.state.index == 1 ? styles.footerIconActive : styles.footerIconDeactive} name="linechart" size={iconFooterSize} />
            </Button>
            </FooterTab>

            <FooterTab>
            <Button active={this.state.index === 2} onPress={() => this.switchScreen(2)}>
              <FontAwesome style={this.state.index == 2 ? styles.footerIconActive : styles.footerIconDeactive} name="gear" size={iconFooterSize} />
            </Button>
            </FooterTab>

            <FooterTab>
            <Button active={this.state.index === 3} onPress={() => this.switchScreen(3)}>
              <FontAwesome style={this.state.index == 3 ? styles.footerIconActive : styles.footerIconDeactive} name="user" size={iconFooterSize} />
            </Button>
          </FooterTab>

        </Footer>

        
      </Container>
    );
  }

}