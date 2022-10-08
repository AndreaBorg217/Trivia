/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text, FlatList} from 'react-native';
import axios from 'axios';
import {shuffleAnswers} from '../utilities/functions'
import {questions} from '../sampleData'
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); 
LogBox.ignoreAllLogs();

 const Game = ({navigation}) => {
    const [allQuestions, setQuestions] = useState(questions)
    const [current, setIndex] = useState(0)

    const checkAnswers = (answer) => {
        console.log(answer, allQuestions[current].correctAnswer)
        if(answer == allQuestions[current].correctAnswer){
            console.log('correctAnswer')
        }
        else{
            console.log('incorrectAnswer')
        }
       
        if(current == 9){
            //show final screen
        }
        else{
            setIndex(prev => prev + 1);
        }
    }

    const Choice = ({choice, index}) =>{
        return(
            <TouchableOpacity style={styles.choice} onPress={() => checkAnswers(choice.slice(3))}>
                <Text style={styles.answer}>{choice}</Text>
            </TouchableOpacity>
        )
    }  

     return(
     <View style = {styles.container}>
        <Image style={styles.logo} source={require('../assets/images/unlit_bulb.png')}/>

        <View style={styles.questionBox}>
            <Text style={styles.question}>{allQuestions[current]?.question}</Text>
        </View>

        <FlatList
            style={styles.choices}
            data={shuffleAnswers([allQuestions[current]?.correctAnswer, ...allQuestions[current]?.incorrectAnswers])} 
            renderItem={({item, index}) => <Choice choice={item} index={index}/>}
            keyExtractor={(item, index) => index}
            numColumns = {2}
        />
       
     </View>
   );
  };
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#F4D35E',
     width: '100%',
     height: '100%',
     alignItems: 'center',
     justifyContent: 'center',
   },
   logo:{
    width: 100,
    height: 100,
    position: 'absolute',
    transform: [{translateY: -250}]
   },
   questionBox:{
    width: 350,
    height: 150,
    backgroundColor: "#FFFFFF",
    borderWidth: 3,
    borderColor: '#000000',
    borderRadius: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 15,
    position: 'absolute',
    transform: [{translateY: -90}]
   },
   question:{
    color: '#000000',
    fontFamily: 'BubblegumSans-Regular',
    fontSize: 25,
   },
   choices:{
    transform: [{translateY: 390}]
   },
   choice:{
    width: 170,
    height: 80,
    backgroundColor: '#505581',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    borderColor: '#000000',
    borderWidth: 2,
    margin: 15,
   },
   answer:{
    color: '#FFFFFF',
    fontFamily: 'BubblegumSans-Regular',
    fontSize: 20,
   }
  });
 
 export default Game;