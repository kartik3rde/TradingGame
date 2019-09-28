import React, { Component } from 'react';
import {
    Container, Text, Content, Body, Spinner,
    Segment, Left, Icon, Button, Right, Header, Title,
    CardItem, Card,
    Tab, Tabs, ScrollableTab
} from 'native-base';
import { WebView ,Dimensions} from 'react-native';
import {
    View
} from 'react-native'
import Chart from "../elements/tradingGraph/Chart"
import { LineChart } from 'react-native-line-chart';
export default class Trading extends Component {
    render() {
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June','January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
              data: [ 20, 45, 28, 80, 99, 43 ]
            }]
          }
          const chartConfig = {
            backgroundGradientFrom: '#1E2923',
            backgroundGradientTo: '#08130D',
            color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`
          }
          const screenWidth = Dimensions.get('window').width+100
        return (
            <Container >
                <Header hasTabs>
                    <Left>
                        <Button transparent>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Segments</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name="search" />
                        </Button>
                    </Right>
                </Header>
                <Tabs  renderTabBar={() => <ScrollableTab />}>
                    <Tab heading="Tab1">
                        
                    <WebView
                    scrollEnabled={true}
        originWhitelist={['*']}
        source={{ html: `
        <style>
	#timeToRender {
		position:absolute; 
		top: 10px; 
		font-size: 20px; 
		font-weight: bold; 
		background-color: #d85757;
		padding: 0px 4px;
		color: #ffffff;
	}
</style>
<div id="chartContainer" style="height: 300px; width: 100%;"></div>
<span id="timeToRender"></span>
<script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>
<script>window.onload = function () {

            var limit = 50000;
            var y = 100;    
            var data = [];
            var dataSeries = { type: "line" };
            var dataPoints = [];
            for (var i = 0; i < limit; i += 1) {
                y += Math.round(Math.random() * 10 - 5);
                dataPoints.push({
                    x: i,
                    y: y
                });
            }
            dataSeries.dataPoints = dataPoints;
            data.push(dataSeries);
            
            //Better to construct options first and then pass it as a parameter
            var options = {
                zoomEnabled: true,
                animationEnabled: true,
                title: {
                    text: "Try Zooming - Panning"
                },
                axisY: {
                    includeZero: false,
                    lineThickness: 1
                },
                data: data  // random data
            };
            
            var chart = new CanvasJS.Chart("chartContainer", options);
            var startTime = new Date();
            chart.render();
            var endTime = new Date();
            document.getElementById("timeToRender").innerHTML = "Time to Render: " + (endTime - startTime) + "ms";
            
            }
        </script>` }}
      />
                    </Tab>
                    <Tab heading="Tab2">
                        <Chart />
                    </Tab>
                    <Tab heading="Tab3">
                    <LineChart
                        data={data}
                        width={screenWidth}
                        height={220}
                        chartConfig={chartConfig}
                        />
                    </Tab>
                    <Tab heading="Tab4">
                        <Chart />
                    </Tab>
                    <Tab heading="Tab5">
                        <Chart />
                    </Tab>
                </Tabs>
            </Container>
        )
    }
}