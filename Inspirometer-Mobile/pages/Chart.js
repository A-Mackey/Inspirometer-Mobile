import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { Container, Header, Content, Button, Text, View, Card, CardItem, Body, Left, Right } from 'native-base';
import { LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart } from "react-native-chart-kit";

async function storeData(val) {
    try {
        await AsyncStorage.setItem('scores', val);
    } catch (error) {
        // Error saving data
    }
  }

async function retrieveData() {
    try {
        const value = await AsyncStorage.getItem('scores');
        if (value !== null) {
            // Our data is fetched successfully
            console.log(value);
            return value;
        }
    } 
    catch (error) {
        // Error retrieving data
    }
}

async function setData() {
    let scores = [ 10, 15, 20, 25, 30, 35, 40, 45 ];

    await storeData(scores);
    this.state.scores = await retrieveData();
    console.log(this.state.scores);
}

export default class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
          date: 0,
          scores: [],
        };
      }

      switchDate(index) {
        this.setState({date: index})
     }

  render() {

    setData();

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
                            data: this.state.scores,
                            // data: [
                            //     Math.random() * 50 + 50,
                            //     Math.random() * 50 + 50,
                            //     Math.random() * 50 + 50,
                            //     Math.random() * 50 + 50,
                            // ]
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