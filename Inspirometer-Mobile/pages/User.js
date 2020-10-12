import React, { Component } from 'react';
import { Dimensions, ColorPropType } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Text, Button, Body } from 'native-base';
export default class FloatingLabelExample extends Component {
  render() {
    
    const windowWidth = Dimensions.get('window').width;

    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
          <Body>
            <Button style={{marginTop: 30, width: windowWidth*.8, backgroundColor: "#adc5ff"}}>
                <Body>
                    <Text style={{color: "white"}}>Sign In</Text>
                </Body>
            </Button>
        </Body>
        </Content>
      </Container>
    );
  }
}