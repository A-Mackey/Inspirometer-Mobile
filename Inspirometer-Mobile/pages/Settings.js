import React, { Component, useState } from 'react';
import { Left, Right, Card, CardItem, List, ListItem, Container, Body, Header, Content, Button, Text } from 'native-base';
import { Image, Switch, StyleSheet, Dimensions, View } from 'react-native';

import { AppLoading } from 'expo';
import backendDatabaseFunctions from './Functions/backendData';


//Setting Variables
var darkMode = false;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  bodyPicture: {
    marginTop: 15,
    width: 300,
    height: 300,
  },

  settingsContainer: {
    marginTop: 30,
  },

  settingsButtonOn: {
    backgroundColor: '#adc5ff',
  },

  settingsButtonOff: {
    backgroundColor: '#FFF',
  },

  settingTextOn: {
    color: 'white'
  },

  settingTextOff: {
    color: '#adc5ff'
  },
});


export default class Settings extends Component {

  //THESE SETTINGS ARE NOT GLOBAL, AND THEY NEED TO BE

  constructor(props) {
    super(props);
    this.state = {

      darkMode: false,
      setting2: false,

    };
  }

  toggleDarkMode() {
    this.setState({darkMode: !this.state.darkMode});
  }

  toggleSetting2() {
    this.setState({setting2: !this.state.setting2});
  }

  getStateText(setting) {
    if (setting) {
      return "On";
    } else {
      return "Off";
    }
  }

  render() {
    return (
        <Content>
            <Body>
              <Image style={styles.bodyPicture} source={require('../Pictures/Settings/Gears.png')}/>
            </Body>

              <List style={styles.settingsContainer}>
                <ListItem>
                  <Left><Text>Dark Mode</Text></Left>
                  <Right>
                    <Button
                      style={this.state.darkMode ? styles.settingsButtonOn : styles.settingsButtonOff}
                      onPress={() => this.toggleDarkMode()}
                      >
                      <View>
                      {this.state.darkMode && <Text style={styles.settingTextOn}>On</Text>}
                      {!this.state.darkMode && <Text style={styles.settingTextOff}>Off</Text>}
                      </View>
                    </Button>
                  </Right>
                </ListItem>

                <ListItem>
                  <Left><Text>Setting 2</Text></Left>
                  <Right>
                    <Button
                      style={this.state.setting2 ? styles.settingsButtonOn : styles.settingsButtonOff}
                      onPress={() => this.toggleSetting2()}
                      >
                      <View>
                      {this.state.setting2 && <Text style={styles.settingTextOn}>On</Text>}
                      {!this.state.setting2 && <Text style={styles.settingTextOff}>Off</Text>}
                      </View>
                    </Button>
                  </Right>
                </ListItem>

                <ListItem>
                  <Left><Text>Clear All Data</Text></Left>
                  <Right>
                    <Button
                      style={{backgroundColor: 'red'}}
                      onPress={() => backendDatabaseFunctions.clearData()}
                      >
                      <View>
                      {<Text style={{color: 'white'}}>Clear</Text>}
                      </View>
                    </Button>
                  </Right>
                </ListItem>

              </List>

        </Content>
    );
  }
}
