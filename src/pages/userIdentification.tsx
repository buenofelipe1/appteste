import React from 'react';
import 
{ 
SafeAreaView, 
StyleSheet,
Image,
View, 
Text,
Dimensions,
TextPropTypes
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import emoji from '../../assets/Emoji.png';
import { Button } from '../components/button';
import colors from '../styles/colors';
import font from '../styles/font';



export function UserIdentification(){

    const [text, onChangeText] = React.useState("Useless Text");
    const [number, onChangeNumber] = React.useState(null);

    return(
        <SafeAreaView style = {styles.container}>
            <View style ={styles.wrapper} >

            <Image 
            source = {emoji}
            style = {styles.image}
            
            />

            <Text style={styles.title}>
            Como podemos
            {'\n'}
            chamar você?
            </Text>
            

            <TextInput
            style={styles.input}
            onChangeText={text => onChangeText(text)}
            placeholder="Digite um Nome"
            />
          
            <Button />

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

    wrapper:{
        flex:1,
        justifyContent: 'space-around',
        alignItems:'center',
        paddingHorizontal: 2,
    },

    title:{
        fontSize: 20,
        textAlign: 'center',
        fontFamily: font.heading,
        color: colors.heading

    },

    image:{
        height: Dimensions.get('window').width * 0.5
    },
     input:{
        height: Dimensions.get('window').width *0.1,
        fontSize: 20,
        textAlign: 'center',
        fontFamily: font.text,
       
     }
})