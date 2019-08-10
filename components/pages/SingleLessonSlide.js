import React, { Component } from 'react';
import { Container, Text, Content, Button,  Spinner } from 'native-base';
import { StyleSheet, View, Dimensions, Image, ScrollView, 
    TouchableNativeFeedback
} from 'react-native';
import MainHeader from "../elements/Header"
import HTML from 'react-native-render-html';
import Quiz from '../../controller/services/quiz';
import { baseUrl } from '../../config';
import Carousel from "react-native-carousel-control";
import ImageView from 'react-native-image-view';

export default class SingleLessonSlide extends Component {
    constructor(){
        super()
        this.state = {
            isVisible: false
        }
    }
    onImageClose = ()=> {
        console.log("close image")
        this.setState({
            isVisible: false
        })
    }
    viewImage = () => {
        console.log("view image")
        this.setState({
            isVisible: true
        })
    }
    render() {
        const {
            slide, courseId
        } = this.props
        const {
            isVisible
        } = this.state
        console.log({
            courseId
        })
        const fullWidth = Dimensions.get('window').width - 20;
        return (
            <ScrollView>
            {
                slide.GoToQuiz ?
                    <View style={StyleSheet.detailsSection}>

                        <Text style={styles.courseDoneMsg}>All Lesson completed in this course .</Text>
                        <Button bordered info style={styles.margin20} onPress={() => {
                            console.log({
                                navigation: this.props.navigation.navigate
                            })
                            this.props.navigation.navigate('QuizPage', { itemId: courseId })

                            }}>
                            <Text>Start Quiz</Text>
                        </Button>
                    </View>
                    :
                    <View style={styles.detailsSection} >
                        <ImageView
                            isVisible={isVisible}
                            onClose={()=> {
                                this.onImageClose()
                            }}
                            images={[
                                {
                                    source: {
                                        uri: baseUrl + slide.image
                                    },
                                    width: 806,
                                    height: 720,

                                }
                            ]}
                        />
                        <TouchableNativeFeedback  
                          onPress={()=> {
                            this.viewImage()
                          }}
                        >
                            <Image 
                            source={{ uri: baseUrl + slide.image }} style={{ height: 250, width: fullWidth, flex: 1 }} />
                        </TouchableNativeFeedback >
                        <Text style={styles.heading}>{slide.title}</Text>
                        <HTML html={slide.details} containerStyle={[{
                            width: "100%",
                            fontSize: 18
                        }]} imagesMaxWidth={fullWidth} />
                    </View>
            }
        </ScrollView>
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
    detailsSection: {
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
