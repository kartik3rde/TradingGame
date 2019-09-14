import React, { Component } from 'react';
import {
    Container, Text, Content, Body, Spinner,
    Segment, Left, Icon, Button, Right, Header, Title,
    CardItem, Card,
    Tab, Tabs, ScrollableTab
} from 'native-base';
import {
    View
} from 'react-native'
import Chart from "../elements/tradingGraph/Chart"

export default class Trading extends Component {
    render() {
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
                <Tabs renderTabBar={() => <ScrollableTab />}>
                    <Tab heading="Tab1">
                        <Chart />
                    </Tab>
                    <Tab heading="Tab2">
                        <Chart />
                    </Tab>
                    <Tab heading="Tab3">
                        <Chart />
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