import React, { Component } from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import { Container, Content, Button, Text, Body, Card, CardItem} from 'native-base';
export default class ButtonExample extends Component {

  

  render() {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const styles = StyleSheet.create({
      contentButton: {
        backgroundColor: '#ADC5FF',
        width: windowWidth * 0.6,
        marginTop: 15,
        marginBottom: 15,
      },

      text: {
        color: 'white',
      },

      bodyCard: {
        width: windowWidth * 0.8,
      },
    });

    function testFunction() {
      console.log(windowWidth + "x" + windowHeight);
    }

    return (
        <Content>

          {/* Start new test button */}

          <Body>

            <Button style={styles.contentButton} onPress={testFunction}>
              <Body>
                <Text style={styles.text}>Start new test</Text>
              </Body>
            </Button>

          </Body>

          {/* Instructions Card */}
          <Body>

          <Card style={styles.bodyCard}>
              <Body>
                <CardItem>
                  <Text>Instructions</Text>
                </CardItem>
              </Body>
                <CardItem>
                  <Text>Turn on the device</Text>
                </CardItem>

                <CardItem>
                  <Text>Connect device to phone via bluetooth</Text>
                </CardItem>

                <CardItem>
                  <Text>Click "Start new test" and blow into the tube until beep</Text>
                </CardItem>
            </Card>

          </Body>
          
        </Content>
    );
  }
}