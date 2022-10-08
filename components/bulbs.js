/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text, FlatList} from 'react-native';

const Bulbs = ({correct}) =>{
    let bulbs = [];
    if(correct == 0){
        bulbs = [require('../assets/images/unlit_bulb.png'), require('../assets/images/unlit_bulb.png'), require('../assets/images/unlit_bulb.png')]
    }
    else if(correct>0 && correct<4){
        bulbs = [require('../assets/images/lit_bulb.png'), require('../assets/images/unlit_bulb.png'), require('../assets/images/unlit_bulb.png')]
    }
    else if(correct>3 && correct<8){
        bulbs = [require('../assets/images/lit_bulb.png'), require('../assets/images/lit_bulb.png'), require('../assets/images/unlit_bulb.png')]
    }
    else{
        bulbs = [require('../assets/images/lit_bulb.png'), require('../assets/images/lit_bulb.png'), require('../assets/images/lit_bulb.png')]
    }
    return(
        <View style={styles.bulbsCont}>
            <Image style={[styles.bulb, {transform: [{rotate: '-20deg'}]}]} source={bulbs[0]}/>
            <Image style={[styles.bulb, {transform: [{translateY: -40}]}]} source={bulbs[1]}/>
            <Image style={[styles.bulb, {transform: [{rotate: '20deg'}]}]} source={bulbs[2]}/>
        </View>
    )
}

const styles = StyleSheet.create({
    bulbsCont:{
     flexDirection: 'row',
     transform: [{translateY: -90}],
    },
    bulb:{
     width: 110,
     height: 10,
     marginLeft: 10
    },
   });
  
  export default Bulbs;