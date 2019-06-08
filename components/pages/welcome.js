/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import {Platform, StyleSheet ,View , ImageBackground } from 'react-native';
import { Container  ,Title ,Text 
  ,Subtitle,Button,Content,Body,
  Input, Item ,Icon, Left, Right} from 'native-base';

export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state ={ isLoggedIn: false };
  }

  componentDidMount() {
    var a=0;
    setInterval(()=>{
      if(a===2){
        this.props.navigation.navigate('Login')
      }
      a=a+1;
    },1000)
  }
  static navigationOptions = {
    header: null
  }
  render() {
  
    return (  
       <Container style={styles.backGround} >
         {/* <ImageBackground source={{uri: "http://goldenfuturelife.in/tradeGame/main.jpg"}} style={{width: '100%', height: '100%',opacity: 0.6}}>  */}
         <Content>
        
            <Title style={styles.title}>
              Welcome
            </Title>
            <Text style={styles.text}>
                Relentless Trade
            </Text>
            <Text style={styles.smalltext}>
                Trading
            </Text>
            {/* <Button transparent success ><Text onPress={() => this.props.navigation.navigate('Dashboard')}> Go to Details </Text></Button> */}
            
        </Content>
        {/* </ImageBackground> */}
      </Container>
      
    );
  }
}

const styles = StyleSheet.create({
    backGround:{
      backgroundColor:"#F5F5F5"
    },
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#8D8D8D',
    fontSize: 35,
    marginTop: 150,
    },
   text:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#8D8D8D',
    margin:15,
    fontSize:25
   },
   smalltext:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#8D8D8D',
    fontSize:14
   },
  
 
});
