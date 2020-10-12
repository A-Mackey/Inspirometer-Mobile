import React from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';
import { Container, Header, View, Fab, Button, Icon, Body, Title, Tabs, Tab, ScrollableTab, Footer, Content, FooterTab } from 'native-base';
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
  }

  testMethod() {
    console.log("test");
  }

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

    return (
      <Container>
        <Header>
          <Body>
              <Title>Inspirometer</Title>
          </Body>
        </Header>
        <Content>
          <AppComponent/>
        </Content>
        <Footer>
          <FooterTab>
            <Button active={this.state.index === 0} onPress={() => this.switchScreen(0)}>
              <AntDesign name="edit" size={28} />
            </Button>
            <Button active={this.state.index === 1} onPress={() => this.switchScreen(1)}>
              <AntDesign name="linechart" size={28} />
            </Button>
            <Button active={this.state.index === 2} onPress={() => this.switchScreen(2)}>
              <FontAwesome name="gear" size={28} />
            </Button>
            <Button active={this.state.index === 3} onPress={() => this.switchScreen(3)}>
              <FontAwesome name="user" size={28} />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}