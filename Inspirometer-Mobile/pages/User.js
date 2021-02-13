import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { Container, View, Content, Text, } from 'native-base';
import { AppLoading } from 'expo';

import globalDatabaseFunctions from './Functions/backendData';
    
const windowWidth = Dimensions.get('window').width;

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
        .catch(err => console.log("getData error 1: " + err));
      return <AppLoading/>
    }

    async function getData() {
      var d = await globalDatabaseFunctions.getAllData()
      .then(
        this.state.isReady = true,
        console.log("HERE"),
      )
        .catch(err => console.log("getData error 2: " + err));
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