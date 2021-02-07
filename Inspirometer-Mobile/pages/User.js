import React, { Component } from 'react';
import { Dimensions, ColorPropType } from 'react-native';
import { Container, View, Content, Form, Item, Input, Label, Text, Button, Body, List, ListItem } from 'native-base';
import { AppLoading } from 'expo';

import globalDatabaseFunctions from './Functions/backendData';


export default class User extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  render() {
    if (!this.state.isReady) {
      getData()
        .catch(err => console.log("get Data error 1: " + err));
      return <AppLoading/>
    }
    
    const windowWidth = Dimensions.get('window').width;

    async function getData() {
      var d = await globalDatabaseFunctions.getAllData()
        .catch(err => console.log("get Data error 2: " + err));
      this.state.isReady = true;
      console.log("HERE");
      return d;
    }


    return (
      <Container>
        <View>
          <Content>



            <Text>TESTING</Text>



          </Content>
        </View>
      </Container>
    );
  }
}