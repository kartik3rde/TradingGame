
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet  ,Image  } from 'react-native';
import { Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import {baseUrl} from '../../config';

export default class CourseList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      membershipData:'',
      courseData:''
      };
   }
  componentDidMount(){
   }


  render() {
      
  const {courseArray}=this.props;
 
   return (  
    <Content>
       {courseArray && courseArray.length>0 ?
          courseArray.map((course,index)=>
          <Card>
            
            <CardItem cardBody >
              <Image source={{uri: baseUrl +course.image}} onPress={() => this.props.navigationList.navigate('CourseSingle',{itemId: course.id})} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Body onPress={() => this.props.navigationList.navigate('CourseSingle',{itemId: course.id})}>
                  
                  <Button onPress={() => this.props.navigationList.navigate('CourseSingle',{itemId: course.id})} primary>
                    <Text style={styles.courseTitle} >
                    {course.title}
                    </Text>
                  </Button>
                </Body>
              </Left>
            </CardItem>
          </Card>
          )
          : 
          <Card>
              <CardItem>
                <Body>
                  <Text>No data in this section</Text>
                </Body>
              </CardItem>
            </Card>
          }
        </Content>
    );
  }
}

const styles = StyleSheet.create({
    courseTitle:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#ffffff',
    width:"100%",
    fontSize:18
   },
   card:{
    padding:5
   },
   courseTitledetails:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#ffffff',
    fontSize:12,
    padding:5,
    
   },
   body:{
    backgroundColor:'#1c1b1b47',
    width:"100%"
   }
  
});
