import React, { Component } from "react";
import { Image, View, Dimensions, StyleSheet, TouchableOpacity, TouchableNativeFeedback, AsyncStorage, Alert, ScrollView } from "react-native";

import { Button, Icon , Text } from 'native-base';

// import App from "../index";

class SideDrawer extends Component {
    constructor(props){
        super(props);
        this.state = {
            userName : ''
        }
       this.handleBack = this.handleBack.bind(this);
    }
    componentDidMount(){
       //  handleAndroidBackButton(this.handleBack)
       // getUser().then((responseText) => responseText)
       // .then((response) => this.setState({userName: response.name}));
    }
    // componentWillUnmount(){
    //     removeAndroidBackButtonHandler()
    // }
    removeUser = async ()=> {
        try {
            const value = await AsyncStorage.removeItem('user', (user)=>{
                console.log('top Error', user);
                if(user == null){
                    console.log('null', user);
                   
                }else{
                    console.log('not null', user);
                }
            });
        } catch (error) {
            console.error("bottom error", error)
        }
    }
    handlelogout = () => {
        Alert.alert('Confirm Logout', 'Are you realy want to logout?',
            [
                {text: 'CANCEL', style: 'cancel', onPress: ()=>{
                    this.hideSideMenu();
                }},
                {text: 'OK', onPress: () => {
                    this.hideSideMenu();
                    this.removeUser();
                }}
            ]);
        
    };

    removeUser = async ()=> {
        try {
            const value = await AsyncStorage.removeItem('user', (user)=>{
                console.log('top Error', user);
                this.pushAndCloseSideMenu("Login")
            });
        } catch (error) {
            console.error("bottom error", error)
        }
    }

    
    handleBack(){
        this.props.navigation.closeDrawer()
    }
  render() {
    const {
        navigation
    }  = this.props
    return (
		<View style={[ styles.container ]} >
            <Icon name='md-close' onPress={()=>this.hideSideMenu()} style={styles.closeicon}  />
            <View style={styles.topBar}>
                <Image style={styles.topBarImage} source={require('../images/man.png')} />
                <Text style={styles.topBarName} >
                    Welcome, {this.state.userName}
                </Text>
            </View>
            <ScrollView>
                <TouchableNativeFeedback onPress={ ()=>{
                    
                    this.pushAndCloseSideMenu("Dashboard")
                    }
                } >
                    <View style={styles.sliderMenus}>
                        <View style={styles.row}>
                            <Text style={[styles.menuText, styles.menuLinkIcon]}>
                                <Icon name='ios-home' style={styles.menuIcon} />
                            </Text>
                            <Text style={styles.menuText}>
                               Dashboard
                            </Text>
                        </View>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={ ()=>{
                    this.pushAndCloseSideMenu("About", 'About')
                    }
                } >
                <View style={styles.sliderMenus}>
                        <View style={styles.row}>
                            <Text style={[styles.menuText, styles.menuLinkIcon]}>
                                <Icon name='ios-person' style={styles.menuIcon} />
                            </Text>
                            <Text style={styles.menuText}>
                                About
                            </Text>
                        </View>
                    </View>
                </TouchableNativeFeedback>
               
                <TouchableNativeFeedback onPress={()=>{
                        this.handlelogout()
                    }
                } >
                    <View style={styles.sliderMenus}>
                        <View style={styles.row}>
                            <Text style={[styles.menuText, styles.menuLinkIcon]}>
                                <Icon name='ios-log-out' style={styles.menuIcon} /> 
                            </Text>
                            <Text style={styles.menuText}>
                            Logout
                            </Text>
                        </View>
                    </View>
                </TouchableNativeFeedback>
            </ScrollView>
		</View>
    );
  }
    hideSideMenu() {
        this.props.navigation.closeDrawer()
       
    }
    pushAndCloseSideMenu(componentName, name) {
        console.log({
            componentName
        })
        this.hideSideMenu();
        this.props.navigation.navigate(componentName)
    }
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 0,
		backgroundColor: "white",
		flex: 1
	},
	sliderMenus:{
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
	},
	menuText: {
        textAlignVertical: 'center',
        
    },
    topBar:{
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
       // backgroundColor: lightPrimary // '#3f51b5'
    },
    topBarImage:{
        width: 64,
        height: 64,
        margin: 20,
        borderRadius: 64,
    },
    topBarName: {
        color: '#fff',
       
    },
    menuIcon: {
       
    },
    menuLinkIcon: {
        width: 30,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    label:{

    },
    text:{

    },
    closeicon:{
        marginLeft:250
    }
});

export default SideDrawer;
