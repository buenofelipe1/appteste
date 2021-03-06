import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../styles/colors';
import font from '../styles/font';


export function Button (){
    return(
        <View>
        <TouchableOpacity 
                style={styles.button} 
                activeOpacity={0.7}
                >
                
                    <Text style={styles.buttonText}>
                    Confirmar
                    
                    </Text>
                </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginBottom: 10,
       
        width:156,
        height:56,
    },
    buttonText:{
        fontFamily: font.heading,
        fontSize:20,
        padding:12,
        color: colors.white
    },
    

})