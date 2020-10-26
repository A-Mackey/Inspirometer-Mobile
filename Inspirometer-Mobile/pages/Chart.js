import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { Container, Header, Content, Button, Text, View, Card, CardItem, Body, Left, Right } from 'native-base';
import { LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart } from "react-native-chart-kit";

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

export default class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
          date: 0,
          data: [],
        };
      }

      switchDate(index) {
        this.setState({date: index})
     }

  render() {

    this.state.data[this.state.data.length] = 1;
    this.state.data[this.state.data.length] = 2;
    this.state.data[this.state.data.length] = 4;
    this.state.data[this.state.data.length] = 8;
    this.state.data[this.state.data.length] = 16;
    this.state.data[this.state.data.length] = 32;
    this.state.data[this.state.data.length] = 64;

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    return (
    <Content>
        <View>
            <Card transparent style={{marginTop: 15}}>
                <Body>
                    <LineChart
                        data={{
                        labels: [
                            "Monday", 
                            "Tuesday", 
                            "Wednesday", 
                            "Thursday"
                        ],
                        datasets: [
                            {
                            data: this.state.data
                            }
                        ],
                        }}
                        width={windowWidth * .92} // from react-native
                        height={450}
                        yAxisInterval={1} // optional, defaults to 1
                        chartConfig={{
                        backgroundColor: "#adc5ff",
                        backgroundGradientFrom: "#ADC5FF",
                        backgroundGradientTo: "#BBC1F7",
                        decimalPlaces: 0, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        },
                        propsForDots: {
                            r: "6",
                            strokeWidth: "2",
                            stroke: "#000000"
                        }
                        }}
                        bezier
                        style={{
                            marginTop: 8,
                            borderRadius: 16
                        }}
                    />
                </Body>
            </Card>
        </View>
        <Body>
            <View style={{flexDirection: "row"}}>
                <Button active={this.state.date === 0} onPress={() => this.switchDate(0)} style={{backgroundColor: "white", marginHorizontal: 6}}>
                    <Text style={{color: "#adc5ff"}}>3d</Text>
                </Button>
                <Button active={this.state.date === 1} onPress={() => this.switchDate(1)} style={{backgroundColor: "white", marginHorizontal: 6}}>
                    <Text style={{color: "#adc5ff"}}>1w</Text>
                </Button>
                <Button active={this.state.date === 2} onPress={() => this.switchDate(2)} style={{backgroundColor: "white", marginHorizontal: 6}}>
                    <Text style={{color: "#adc5ff"}}>2w</Text>
                </Button>
                <Button active={this.state.date === 3} onPress={() => this.switchDate(3)} style={{backgroundColor: "white", marginHorizontal: 6}}>
                    <Text style={{color: "#adc5ff"}}>1m</Text>
                </Button>
                <Button active={this.state.date === 4} onPress={() => this.switchDate(4)} style={{backgroundColor: "white", marginHorizontal: 6}}>
                    <Text style={{color: "#adc5ff"}}>3m</Text>
                </Button>
            </View>
        </Body>
    </Content>
    );
  }
}