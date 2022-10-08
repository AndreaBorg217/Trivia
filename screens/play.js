/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text, FlatList} from 'react-native';
import axios from 'axios';
import {shuffleAnswers} from '../utilities/functions'
import Bulbs from '../components/bulbs'
import {questions} from '../sampleData'
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); 
LogBox.ignoreAllLogs();

 const Game = ({navigation}) => {
    const [allQuestions, setQuestions] = useState(questions)
    const [current, setIndex] = useState(0)
    const [correct, setCorrect] = useState(0)
    const [finished, setFinished] = useState(false)

    const checkAnswers = (answer) => {
        console.log(answer, allQuestions[current].correctAnswer)
        if(answer == allQuestions[current].correctAnswer){
            setCorrect(prev => prev + 1)
        }
        else{
            console.log('incorrectAnswer')
        }
       
        if(current == 9){
            setFinished(true)
            setCorrect(0)
            setIndex(0)
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
       
       {finished?(
        <View style={styles.final}>
            <View style={styles.messageCont}>
                <Text style={styles.message}>You guessed {correct}/10</Text>
                <Text style={[styles.message, styles.abs, {textShadowOffset: {width: -2, height: -2}}]}>You guessed {correct}/10</Text> 
                <Text style={[styles.message, styles.abs, {textShadowOffset: {width: -2, height: 2}}]}>You guessed {correct}/10</Text>
                <Text style={[styles.message, styles.abs, {textShadowOffset: {width: 2, height: -2}}]}>You guessed {correct}/10</Text> 
            </View>
            <Bulbs correct = {correct}/>
            <View style={styles.btnCont}>
                <TouchableOpacity style={styles.button} onPress={() => setFinished(false)}>
                    <Text style={styles.btnText}>Play Again</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
                    <Text style={styles.btnText}>Quit</Text>
                </TouchableOpacity>
            </View>
        </View>
        ):null      
       }
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
   },
   final:{
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F4D35E'
   },
   messageCont:{
    transform: [{translateY: -200}],
    height: 100
   },
   message:{
    color: '#FFFFFF',
    fontFamily: 'BubblegumSans-Regular',
    fontSize: 50,
    textShadowColor: 'black', textShadowRadius: 1, textShadowOffset: {width: 2, height: 2}
    }, 
   abs: {
    position: 'absolute',
    top: 0, 
    left: 0, 
    right: 0, 
    bottom: 0
   },
   btnCont:{
    position: 'absolute',
    transform: [{translateY: 150}],
   },
   button:{
    backgroundColor: '#2E2F5B',
    width: 180,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    borderColor: '#000000',
    borderWidth: 2,
    margin: 15,
   },
   btnText:{
    color: '#FFFFFF',
    fontFamily: 'BubblegumSans-Regular',
    fontSize: 30,
   }
  });
 
 export default Game;