import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import color from '../styles/colors'
import wateringImg from '../../assets/watering.png';
import colors from '../styles/colors';




export function Welcome(){
    return(
        <SafeAreaView style={styles.container}>

                <Text style={styles.title}>
                Gerencie suas plantas de forma fácil
                </Text>

                <Image source={wateringImg} />

                <Text style={styles.subtitle}>
                Não esqueça mais de regar suas plantas. 
                Nós cuidamos de lembrar você sempre que precisar.
                </Text>

            <TouchableOpacity style={styles.button}>
                <Text>
                    >
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'space-around',
        alignItems:'center',
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        marginTop:38,
        textAlign: 'center',
        color: colors.heading
    },
    subtitle:{
        fontSize: 16,
        paddingHorizontal: 20,
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38
    },
    button:{
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 20,
        width:56,
        height:56,


    }
})