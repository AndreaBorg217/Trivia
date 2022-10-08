/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
  
 const Home = ({navigation}) => {
     return(
     <View style = {styles.container}>
        <Image style={styles.name} source={require('../assets/images/name.png')}/>
        <Image style={styles.logo} source={require('../assets/images/unlit_bulb.png')}/>
        <TouchableOpacity style={styles.playButton} onPress={() => navigation.navigate("Play")}>
            <Text style={styles.playText}>Play</Text>
        </TouchableOpacity>
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
   name:{
    width: 250,
    height: 100,
    position: 'absolute',
    transform: [{translateY: -250}]
   },
   logo:{
    width: 250,
    height: 250,
    marginLeft: 20,
    position: 'absolute',
   },
   playButton:{
    backgroundColor: '#2E2F5B',
    width: 180,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    position: 'absolute',
    transform: [{translateY: 250}]
   },
   playText:{
    color: '#FFFFFF',
    fontFamily: 'BubblegumSans-Regular',
    fontSize: 30,
   }
  });
 
 export default Home;