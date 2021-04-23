import React from 'react';
import { 
    Image, 
    StyleSheet, 
    Text, 
    Dimensions, 
    SafeAreaView,
    TouchableOpacity, 
    View} 
from 'react-native';

import {Entypo} from '@expo/vector-icons';

import wateringImg from '../../assets/watering.png';
import colors from '../styles/colors';
import fonts from '../styles/font';





export function Welcome(){


    return(
        <SafeAreaView style={styles.container}>
                <View style={styles.wraper}>
                <Text style={styles.title}>
                Gerencie 
                {'\n'}
                suas plantas de {'\n'}forma fácil
                </Text>

              
                <Image 
                source={wateringImg} 
                style={ styles.image}
                resizeMode= "contain"
                />
                

                <Text style={styles.subtitle}>
                    Não esqueça mais de regar suas plantas. 
                    Nós cuidamos de lembrar você sempre que precisar.
                </Text>

                <TouchableOpacity 
                style={styles.button} 
                activeOpacity={0.7}
                >
                
                    <Entypo 
                        name="chevron-right" 
                        style={styles.buttonIcon} 
                    />
                </TouchableOpacity>
            </View>   
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'space-around',
        alignItems:'center'
    },
    wraper:{
        flex:1,
        justifyContent: 'space-around',
        alignItems:'center',
        paddingHorizontal: 20,
    },
    title:{
        fontSize: 28,
        fontWeight: 'bold',
        marginTop:38,
        textAlign: 'center',
        color: colors.heading,
       fontFamily: fonts.heading,
        lineHeight: 34
    },
    subtitle:{
        fontSize: 18,
        paddingHorizontal: 20,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.text,
       
    },
   
    image:{
        height: Dimensions.get('window').width *0.7
        
    },
    button:{
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginBottom: 10,
       
        width:56,
        height:56,
    },
    buttonText:{
        fontSize:25,
        padding:12,
        color: colors.white
    },
    buttonIcon: {
        fontSize:34,
        color: colors.white,
        
    },
   
})