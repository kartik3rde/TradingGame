
import React, { Component } from 'react';

import { Platform, StyleSheet, View, ImageBackground } from 'react-native';
import {
  Container, Title, Text
  , Subtitle, Button, Content, Body,
  Input, Item, Icon, Left, Right, Form, Spinner
} from 'native-base';
import User from '../../controller/services/User';
const user = new User;
import AsyncStorage from '@react-native-community/async-storage';

type Props = {};

export default class Login extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      email_err: false,
      email_message: '',
      password: '',
      password_err: false,
      password_message: '',
      loder: false,
      passwordStatus: true
    };
    this.onLoginClick = this.onLoginClick.bind(this);
    this.formValidation = this.formValidation.bind(this);
  }
  static navigationOptions = {
    header: null
  }
  formValidation(type, name, value, key, keyErr) {

    if (type === "required") {
      if (value.length > 1 && value !== '') {
        return true;
      } else {
        console.log("error section")
        const err = name + " is required";
        this.setState({ [key]: true, [keyErr]: err });
        return false;
      }
    }
    if (type === "email") {
      var re = /\S+@\S+\.\S+/;
      if (re.test(value)) {
        return true;
      } else {
        console.log("error section")
        const err = name + " is not valided";
        this.setState({ [key]: true, [keyErr]: err });
        return false;
      }
    }
    if (type === "password") {
      if (value.length > 4 && value !== '') {
        return true;
      } else {
        console.log("error section")
        const err = name + " should be grater then 4 character";
        this.setState({ [key]: true, [keyErr]: err });
        return false;
      }
    }

  }
  storeUser = async (user) => {
    try {
      await AsyncStorage.setItem('user', user);
    } catch (error) {
      console.error(error);
    }
  }


  onLoginClick() {
    if (
      this.formValidation('required', 'Email', this.state.email, 'email_err', 'email_message') &&
      this.formValidation('email', 'Email', this.state.email, 'email_err', 'email_message') &&
      this.formValidation('required', 'Password', this.state.password, 'password_err', 'password_message') &&
      this.formValidation('password', 'Password', this.state.password, 'password_err', 'password_message')
    ) {
      this.setState({
        loder: true
      })
      const email = this.state.email;
      const password = this.state.password
      user.login(email, password)
        .then(res => {
          // console.log(res);
          if (res.status) {
            this.setState({
              loder: false
            })

            this.storeUser(JSON.stringify(res.userdetals[0]));

            this.props.navigation.navigate('Dashboard')
          } else {
            this.setState({
              loder: false
            })
            alert(res.message);
          }
        })



    }
  }

  responseFacebook = (response) => {
    console.log(response);
  }
  render() {
    const { passwordStatus, password } = this.state;
    return (
      this.state.loder ? <Spinner color='blue' /> :
        <Container >
          <ImageBackground source={{ uri: "https://carz91.com/tradeGame/main.jpg" }} style={{ width: '100%', height: '100%' }}>
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
                <Form >
                  <Item regular style={this.state.email_err ? styles.loginInputError : styles.loginInput} >
                    <Input placeholder='Email'
                      onChangeText={(email) => this.setState({ email, email_err: false })}
                      value={this.state.email}
                      name="email" />
                    <Icon active name='md-person' />
                  </Item>
                  {this.state.email_err && <Text style={styles.errorMsg}>{this.state.email_message}</Text>}
                  <Item regular style={styles.loginInput}>
                    <Input placeholder='Password' secureTextEntry={passwordStatus}
                      onChangeText={(password) => this.setState({ password })}
                      value={password}
                      name="password" />
                    <Icon name={passwordStatus ? 'md-eye' : 'md-eye-off'} onPress={() => { this.setState({ passwordStatus: !passwordStatus }) }} />
                  </Item>
                  {this.state.password_err && <Text style={styles.errorMsg}>{this.state.password_message}</Text>}
                  <Item style={styles.link} onPress={() => this.props.navigation.navigate('ForgotPassword')}>
                    <Text style={styles.link}>Forgot Password ?</Text>
                  </Item>
                  <Button block danger onPress={this.onLoginClick} style={styles.marginTB10}>
                    <Text >Login</Text>
                  </Button>
                  <Button block light style={styles.marginTB10} onPress={() => this.props.navigation.navigate('Register')}>
                    <Text >Signup</Text>
                  </Button>
                </Form>


                <View style={styles.socailLogin}>
                  <Button iconLeft small danger style={styles.floatLeft}>
                    <Icon name='logo-googleplus' />
                    <Text style={styles.font5}>Login with Google</Text>
                  </Button>
                 
                   <Button iconLeft small style={styles.floatRight}>
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
    color: '#111111',
    fontSize: 25,
    marginTop: 50,
    margin: 5
  },
  text: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#111111',
    margin: 25
  },
  loginSection: {
    margin: 30
  },
  loginInput: {
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#111111',
    backgroundColor: "#ffffff"
  },
  loginInputError: {
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 4,
    borderWidth: 10,
    borderColor: '#F10909',
    backgroundColor: "#ffffff"
  },
  link: {
    textAlign: 'right',
    width: "100%",
    flex: 1,

  },
  fullWidth: {
    width: "100%"
  },
  marginTB10: {
    marginTop: 10,
    marginBottom: 10
  },
  font5: {
    fontSize: 8
  },
  socailLogin: {
    flex: 1,
    flexDirection: "row",
    marginTop: 1
  },
  floatLeft: {
    width: "50%",
    flex: .5,
    alignItems: 'center',
    marginRight: 5
  },
  floatRight: {
    width: "50%",
    flex: .5,
    alignItems: 'center',
    marginLeft: 5
  },
  errorMsg: {
    color: '#F10909'
  }


});
