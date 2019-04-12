
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


type Props = {}; 

export default class Registration extends Component<Props> {
  static navigationOptions = {
    header: null
  }
  render() {
  
    return (  
       <Container >
         <ImageBackground source={{uri: "http://goldenfuturelife.in/tradeGame/main.jpg"}} style={{width: '100%', height: '100%'}}> 
         <Content>
         
            <Title style={styles.title}>
              Relentless Trade 
            </Title>
            <Text style={styles.text}>
                Lorem Ipsum is simply dummy 
                text of the printing and typesetting
                industry.
            </Text>
           <Body style={styles.loginSection}>
                  <Item regular style={styles.loginInput}>
                    <Input placeholder='User Name' />
                    <Icon name='md-person' />
                  </Item>
                  <Item regular style={styles.loginInput}>
                    <Input placeholder='Email' />
                    <Icon  name='md-mail' />
                  </Item>
                  <Item regular style={styles.loginInput}>
                    <Input placeholder='Mobile Number' />
                    <Icon  name='md-call' />
                  </Item>
                  <Item regular style={styles.loginInput}>
                    <Input placeholder='Password' />
                    <Icon  name='md-eye' />
                  </Item>
                  <Item regular style={styles.loginInput}>
                    <Input placeholder='Confirm Password' />
                    <Icon  name='md-eye' />
                  </Item>
                  <Button block danger style={styles.marginTB10}>
                      <Text>Signup</Text>
                  </Button>
                  <Button block light style={styles.marginTB10} onPress={() => this.props.navigation.navigate('Login')}>
                    <Text >Login</Text>
                  </Button>

            </Body>
             
            
         
        </Content>
        </ImageBackground>
      </Container>
      
    );
  }
}

const styles = StyleSheet.create({
  
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#8D8D8D',
    fontSize: 25,
    marginTop: 30,
    margin:5
   },
   text:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#8D8D8D',
    margin:10
   },
   loginSection:{
     margin:15
   },
   loginInput:{
     marginTop:5,
     marginBottom:5
   },
   link:{
     textAlign:'right',
     width:"100%",
     flex: 1,
   },
   fullWidth:{
     width:"100%"
   },
   marginTB10:{
     marginTop:10,
     marginBottom:10
   },
   font5:{
     fontSize:10
   },
   socailLogin:{
     flex:1,
     flexDirection:"row",
     marginTop:10
    },
   floatLeft:{
     width:"50%",
     flex:.5,
     alignItems: 'center',
     marginRight:5
   },
   floatRight:{
    width:"50%",
     flex:.5,
    alignItems: 'center',
    marginLeft:5
   }
  
 
});
