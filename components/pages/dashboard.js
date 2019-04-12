
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

export default class Dashboard extends Component<Props> {
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
                    <Input placeholder='Email' />
                    <Icon active name='md-person' />
                  </Item>
                  <Item regular style={styles.loginInput}>
                    <Input placeholder='Password' />
                    <Icon active name='md-eye' />
                  </Item>
                  <Item  style={styles.link}>
                      <Text style={styles.link}>Forgot Password ?</Text>
                  </Item>
                  <Button block danger style={styles.marginTB10}>
                      <Text>Login</Text>
                  </Button>
                  <Button block light style={styles.marginTB10}>
                    <Text>Signup</Text>
                  </Button>

                  
                  <View style={styles.socailLogin}>
                  <Button iconLeft small  danger style={styles.floatLeft}>
                      <Icon name='logo-googleplus' />
                      <Text style={styles.font5}>Login with Google</Text>
                    </Button>
                 
                  
                    <Button iconLeft small  style={styles.floatRight}>
                      <Icon name='logo-facebook' />
                      <Text style={styles.font5}>Login with Facebook</Text>
                    </Button>
                  </View>
                   
                  
                  

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
    marginTop: 50,
    margin:5
   },
   text:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#8D8D8D',
    margin:25
   },
   loginSection:{
     margin:30
   },
   loginInput:{
     marginTop:10,
     marginBottom:10
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
