import React, { Component } from 'react';
import { Container, Text, Content, Button,  Spinner } from 'native-base';
import { StyleSheet, View, Dimensions, Image, ScrollView } from 'react-native';
import MainHeader from "../elements/Header"
import HTML from 'react-native-render-html';
import Quiz from '../../controller/services/quiz';
import { baseUrl } from '../../config';
import Carousel from "react-native-carousel-control";
import ImageView from 'react-native-image-view';
import SingleLessonSlide from './SingleLessonSlide';

const quiz = new Quiz;

export default class VideoPage extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            all_lession: [],
            open: false,
            loder: true,
            currentLession: 0,
            quizStart: false,
            courseId: 0,
            courseName:'',
        };

    }
    componentDidMount() {
        const { navigation } = this.props;
        const courceId = navigation.getParam('itemId', 'NO-ID');
        const itemName= navigation.getParam('itemName', 'NO-ID');
        this.setState({
            courseId: courceId,
            courseName:itemName
        })
        if (courceId) {
            this.getLessionList(courceId)
        }
    }
    getLessionList(courceId) {
        quiz.getLessionByCourse(courceId)
            .then(res => {
                const courseList=res.singleCourseLession;
                courseList.push({GoToQuiz:true});
                this.setState({
                    all_lession: courseList,
                    loder: false
                })
            })
            .catch(err => {
                console.log("errrrrrrrrrrrr", err);
            })
    }
    toggleOpen() {
        this.setState({
            open: !this.state.open
        })
    }
    nextLession(type) {
        const { all_lession, currentLession } = this.state;
        if (type === 'right') {
            console.log('total length is ', all_lession.length + '==' + currentLession);
            //all_lession.length >= currentLession-1
            if (currentLession < 2) {
                this.setState({
                    currentLession: currentLession + 1
                })
            } else {
                this.setState({
                    quizStart: true
                })
            }
        } else {
            this.setState({
                currentLession: currentLession - 1
            })
        }
    }

    render() {
        const { all_lession, courseId, quizStart, loder,courseName } = this.state;
        const fullWidth = Dimensions.get('window').width - 20;
        const fullWidths = Dimensions.get('window').width;
        return (
            loder ? <Spinner color='blue' /> :
                <Container  >

                     <Content style={[StyleSheet.containr]} >
                     <Button block light style={styles.marginTB10} >
                            <Text >Start Lession</Text>
                            </Button>
                        
                     </Content>


                </Container>


        )
    }
}

const styles = StyleSheet.create({
    text: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: '#8D8D8D',
        padding: 20
    },
   
    heading: {
        fontSize: 30,
        marginTop: 20,
        padding: 0
    },
    courseDoneMsg: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: '#8D8D8D',
        padding: 20,
        fontSize: 20,
        marginTop: 100
    },
    detasilsSection: {
        padding: 0,
        flex: 1,
        width: "100%",

    },
    margin20: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: '#8D8D8D',
        width: "90%",
        margin: 15,
    },
    quaction: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 14,
        width: "100%",
    },
   

});
