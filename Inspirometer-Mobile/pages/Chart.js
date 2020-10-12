import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { Container, Header, Content, Button, Text, View, Card, CardItem, Body, Left, Right } from 'native-base';
import { LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart } from "react-native-chart-kit";


export default class ButtonExample extends Component {
  render() {

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    return (
      <Container>
        <Content>
            <View>
                <Card transparent>
                    <Body>
                        <LineChart
                            data={{
                            labels: ["Monday", "Tuesday", "Wednesday", "Thursday"],
                            datasets: [
                                {
                                data: [
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                ]
                                }
                            ]
                            }}
                            width={windowWidth * .94} // from react-native
                            height={500}
                            yAxisLabel="$"
                            yAxisSuffix="k"
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
                                marginVertical: 8,
                                borderRadius: 16
                            }}
                        />
                    </Body>
                </Card>
            </View>
        </Content>
      </Container>
    );
  }
}