import React, { Component } from 'react';
import { Dimensions, ColorPropType } from 'react-native';
import { Container, View, Content, Form, Item, Input, Label, Text, Button, Body, List, ListItem } from 'native-base';

import globalDatabaseFunctions from './Functions/backendData';


export default class User extends Component {
  async render() {
    
    const windowWidth = Dimensions.get('window').width;

    async function getData() {
      return await Promise.all(globalDatabaseFunctions.getAllData());e
    }

    var data = await globalDatabaseFunctions.getAllData();

    return (
      <Container>
        <View>
          <Content>



            <List>
              {data.map((d) =>(
                <ListItem>
                  <Text>{d.key}</Text>
                </ListItem>
              ))}
            </List>



          </Content>
        </View>
      </Container>
    );
  }
}