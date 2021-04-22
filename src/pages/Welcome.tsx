import React, {useState} from 'react';
import { Image, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import wateringImg from '../../assets/watering.png';
import { Button } from '../components/Button';

import colors from '../styles/colors';





export function Welcome(){
    const [visibily, setvisibily] = useState(false);

    function handleVisibily(){
        setvisibily(true)
    }

    return(
        <SafeAreaView style={styles.container}>

                <Text style={styles.title}>
                Gerencie 
                {'\n'}
                suas plantas de {'\n'}forma fácil
                </Text>

                {
                    visibily &&
                <Image source={wateringImg} style={ styles.image }/>
                }

                <Text style={styles.subtitle}>
                Não esqueça mais de regar suas plantas. 
                Nós cuidamos de lembrar você sempre que precisar.
                </Text>

                <Button title='Ver Imagem' onPress={handleVisibily} />
                
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'space-between',
        alignItems:'center'
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
       
    },
   
    image:{
        height:255,
        width:255,
        
    },
   
})