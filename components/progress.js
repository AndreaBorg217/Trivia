/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const Icon = ({correct}) => {
    console.log(correct);
    let icon;
    if(correct == true){
        icon = require('../assets/images/check.png')
    }
    else{
        icon = require('../assets/images/cross.png')
    }
    return(<Image style={styles.icon} source={icon}/>)
}
const ProgressBar = ({current, correct}) =>{
    return(
        <View style={styles.progressBar}>
            <View style={[styles.circle, {backgroundColor: current > 0 ? '#2E2F5B': '#FFFFFF'}]}>
            {current.length = 1?(
                <Icon correct={correct[0]}/>
            ): null}
            </View>
            <View style={[styles.line, {backgroundColor: current > 0 ? '#2E2F5B': '#FFFFFF'}]}></View>


            <View style={[styles.circle, {backgroundColor: current > 1 ? '#2E2F5B': '#FFFFFF'}]}>
                {current.length = 2?(
                    <Icon correct={correct[1]}/>
                ): null}
            </View>
            <View style={[styles.line, {backgroundColor: current > 1 ? '#2E2F5B': '#FFFFFF'}]}></View>


            <View style={[styles.circle, {backgroundColor: current > 2 ? '#2E2F5B': '#FFFFFF'}]}>
                {current.length = 3?(
                    <Icon correct={correct[2]}/>
                ): null}
            </View>
            <View style={[styles.line, {backgroundColor: current > 2 ? '#2E2F5B': '#FFFFFF'}]}></View>


            <View style={[styles.circle, {backgroundColor: current > 3 ? '#2E2F5B': '#FFFFFF'}]}>
                {current.length = 4?(
                        <Icon correct={correct[3]}/>
                ): null}
            </View>
            <View style={[styles.line, {backgroundColor: current > 3 ? '#2E2F5B': '#FFFFFF'}]}></View>


            <View style={[styles.circle, {backgroundColor: current > 4 ? '#2E2F5B': '#FFFFFF'}]}>
                {current.length = 5?(
                        <Icon correct={correct[4]}/>
                ): null}
            </View>
            <View style={[styles.line, {backgroundColor: current > 4 ? '#2E2F5B': '#FFFFFF'}]}></View>


            <View style={[styles.circle, {backgroundColor: current > 5 ? '#2E2F5B': '#FFFFFF'}]}>
                {current.length = 6?(
                        <Icon correct={correct[5]}/>
                ): null}
            </View>
            <View style={[styles.line, {backgroundColor: current > 5 ? '#2E2F5B': '#FFFFFF'}]}></View>


            <View style={[styles.circle, {backgroundColor: current > 6 ? '#2E2F5B': '#FFFFFF'}]}>
                {current.length = 7?(
                        <Icon correct={correct[6]}/>
                ): null}
            </View>
            <View style={[styles.line, {backgroundColor: current > 6 ? '#2E2F5B': '#FFFFFF'}]}></View>


            <View style={[styles.circle, {backgroundColor: current > 7 ? '#2E2F5B': '#FFFFFF'}]}>
                {current.length = 8?(
                    <Icon correct={correct[7]}/>
                ): null}
            </View>
            <View style={[styles.line, {backgroundColor: current > 7 ? '#2E2F5B': '#FFFFFF'}]}></View>


            <View style={[styles.circle, {backgroundColor: current > 8 ? '#2E2F5B': '#FFFFFF'}]}>
                {current.length = 9?(
                    <Icon correct={correct[8]}/>
                ): null}
            </View>
            <View style={[styles.line, {backgroundColor: current > 8 ? '#2E2F5B': '#FFFFFF'}]}></View>

            <View style={[styles.circle, {backgroundColor: current > 10 ? '#2E2F5B': '#FFFFFF'}]}>
                {current.length = 10?(
                    <Icon correct={correct[9]}/>
                ): null}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    progressBar:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        transform: [{translateY: -30}],
       },
       circle:{
        width: 30,
        height: 30,
        borderRadius: 15,
        margin: -1,
        alignItems: 'center',
        justifyContent: 'center',
       },
       line:{
        width: 10,
        height: 8,
        backgroundColor: '#FFFFFF',
       },
       icon:{
        width: 12,
        height: 12,
       }
   });
  
  export default ProgressBar;