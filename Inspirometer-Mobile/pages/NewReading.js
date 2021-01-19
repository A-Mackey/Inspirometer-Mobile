import React, { Component } from 'react';
import {StyleSheet, Dimensions, AsyncStorage} from 'react-native';
import { Container, Content, Button, Text, Body, Card, CardItem} from 'native-base';

function getCurrentKey() {
  return new Date() + "";
}

async function storeData(key, value) {
  try {
      await AsyncStorage.setItem(key, value);
  } catch (error) {
      // Error saving data
  }
}

async function retrieveData(key) {
  try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
          // Our data is fetched successfully
          console.log(value);
      }
  } catch (error) {
      // Error retrieving data
  }
}

async function allData() {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const items = await AsyncStorage.multiGet(keys)

    return items
} catch (error) {
    console.log(error, "Problem")
}
}

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

    function recordTest() {
      var key = getCurrentKey();
      console.log(key);
      var value = (Math.random() * 10) + "";

      //do stuff with device to do the test

      storeData(key, value);
    }

    async function getAllData() {
      var data = await allData();
      console.log(data);
    }

    async function clearData() {
      try {
        AsyncStorage.clear();
      } catch (err)
      {
        console.log("Error: " + err);
      }
    }

    return (
        <Content>

          {/* Start new test button */}

          <Body>

            <Button style={styles.contentButton} onPress={() => recordTest()}>
              <Body>
                <Text style={styles.text}>Start new test</Text>
              </Body>
            </Button>

            <Button style={styles.contentButton} onPress={() => retrieveData(getCurrentKey())}>
              <Body>
                <Text style={styles.text}>retrieve data</Text>
              </Body>
            </Button>

            <Button style={styles.contentButton} onPress={() => getAllData()}>
              <Body>
                <Text style={styles.text}>Get all data</Text>
              </Body>
            </Button>

            <Button style={styles.contentButton} onPress={() => clearData()}>
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