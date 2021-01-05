import React, { Component } from 'react';
import { View  } from 'react-native'
import { Button, Container, Content, Text } from 'native-base';
import BleManager from 'react-native-ble-manager';

export default class Devices extends Component {

    addDevice(name) {
        var pos = this.state.devices.length;

        var obj = {'id': pos, 'name': name}
        this.state.devices.push(obj)

        console.log("click");


        this.refreshScreen();
    }

    refreshScreen() {
        this.setState({ lastRefresh: Date(Date.now()).toString() })
    }

    //Bluetooth Functions



    state = {
        devices: [
            {
                id: 0,
                name: 'Ben',
            },
            {
                id: 1,
                name: 'Susan',
            },
            {
                id: 2,
                name: 'Robert',
            },
            {
                id: 3,
                name: 'Mary',
            }
        ]
    }

    render() {
        return (
            <Container>
                <Content>
                    <Button onPress={() => this.addDevice("TEST")}>
                        <Text>Test</Text>
                    </Button>
                    
                    <View>
                        {
                        this.state.devices.map((item, index) => (
                            <Text>
                                {item.id} - {item.name}
                            </Text>
                        ))
                        }
                    </View>

                </Content>
            </Container>
        )
    }
}