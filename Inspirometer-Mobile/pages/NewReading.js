import React, { Component } from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import { Container, Content, Button, Text, Body, Card, CardItem} from 'native-base';

import backendDatabaseFunctions from './Functions/backendData';

export default class NewReading extends Component {
  render() {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    var testValue = 10;

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

      testResultContainer: {
        marginTop: 15,
        backgroundColor: '#ADC5FF',

        width: windowWidth * 0.8,
        height: 200,

        borderWidth: 2,
        borderColor: '#8294bf',

        borderRadius: 20,
      },

      testRestultLabel: {
        marginTop: 15,
        fontWeight: 'bold',
        fontSize: 15,
      },

      testResultText: {
        color: 'white',
        fontSize: 150,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },

      testResultTextAfter: {
        color: 'white',
        fontSize: 25,
      }
    });

    return (
        <Content>

          {/* Start new test button */}

          <Body>

            <Button style={styles.contentButton} onPress={() => backendDatabaseFunctions.recordTest()}>
              <Body>
                <Text style={styles.text}>Start new test</Text>
              </Body>
            </Button>

            <Button style={styles.contentButton} onPress={() => backendDatabaseFunctions.retrieveData(getCurrentKey())}>
              <Body>
                <Text style={styles.text}>retrieve data</Text>
              </Body>
            </Button>

            <Button style={styles.contentButton} onPress={() => backendDatabaseFunctions.getAllData()}>
              <Body>
                <Text style={styles.text}>Get all data</Text>
              </Body>
            </Button>

            <Button style={styles.contentButton} onPress={() => backendDatabaseFunctions.clearData()}>
              <Body>
                <Text style={styles.text}>DELETE EVERYTHING</Text>
              </Body>
            </Button>

          </Body>

          {/* Instructions Card */}
          <Body>

          <Card style={styles.bodyCard}>
              <Body>
                <CardItem header>
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

          <Body>
            <Text style={styles.testRestultLabel}>Lung Capacity</Text>
          </Body>

          <Body style={styles.testResultContainer}>
            <Text style={styles.testResultText}>{testValue}</Text>
            <Text style={styles.testResultTextAfter}>units</Text>
          </Body>
          
        </Content>
    );
  }
}