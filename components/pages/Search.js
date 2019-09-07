import React, {Component} from 'react';
import {StyleSheet } from 'react-native';
import { Container , Icon  ,Text ,Item,Content,Body,Input, List, ListItem , Left , Right} from 'native-base';
import MainHeader from "../elements/Header"
import axios from 'axios';

export default class Search extends Component {
  static navigationOptions = {
    header: null
  }
  constructor(props) {
    super(props);
    this.state = {
      searchKey: '', 
      membershipData:'',
      courseData:'',
      open:false,
      loder:true,
      searchResult:[]
      };
    this.searchSymbol = this.searchSymbol.bind(this);
  }
  
  
  
 toggleOpen(){
   this.setState({
     open:!this.state.open
   })
 }
 searchSymbol(symbol){
   console.log("xxxxxxx",symbol);
   this.setState({
    searchKey:symbol
   })
   axios.get("https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=" + symbol + "&apikey=G9MSYKB15GVXJJOW", {headers: {'Accept': 'application/json'}})
                .then( (response)=> {
                    console.log(response);
                    if(response.data && response.data.bestMatches && response.data.bestMatches.length>0){
                      this.setState({
                        searchResult:response.data.bestMatches
                       })
                    }
                   // return response.data
                })
                .catch( (error)=> {
                    console.log(error);
                  // return false
            });
 }
  render() {
    const {searchKey,searchResult}=this.state;
  return (  
   
    <Container >
       <MainHeader navigation={this.props.navigation}
            title="Search Symbol"
            /> 
     <Content>
          <List>
            <ListItem itemHeader first>
            <Item regular >
                 <Input placeholder='Search Symbol' 
                    onChangeText={(searchKey) => this.searchSymbol(searchKey)}
                    value={searchKey}
                      name="search" />
                  <Icon active name="ios-search" />
            </Item>
                
            </ListItem>
             

            {searchResult && searchResult.length>0 ?
          searchResult.map((key,index)=>
          <ListItem key={index}>
              <Left>
                 <Text>{key["1. symbol"]} </Text>
              </Left>
              <Body>
                <Text>{key["2. name"]}</Text>
                <Text note>{key["4. region"]}</Text>
              </Body>
              <Right>
                <Text note>{key["9. matchScore"]} {key["8. currency"]}</Text>
              </Right>
          </ListItem>
          )
          : 
          <ListItem >
          <Text>No Result Found.</Text>
        </ListItem>
          }

 
          </List>
        </Content>
      </Container>
  
  
    )
  }
}

const styles = StyleSheet.create({
  text:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#8D8D8D',
    padding:20
   },
   heading:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width:"100%",
    fontSize:20,
    marginBottom:5,
    marginTop:20
   },
   list:{
    flex: 1,
    width:"100%",
   },
   fullWidht:{
    width:"100%",
   }
  
});
