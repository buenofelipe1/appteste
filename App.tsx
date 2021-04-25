import React from 'react';
import { Welcome } from './src/pages/Welcome';
import { UserIdentification } from './src/pages/UserIdentification';
import AppLoading from 'expo-app-loading';


import {
  useFonts,
  Jost_600SemiBold,
  Jost_400Regular,
} from '@expo-google-fonts/jost';



export default function App(){

  const [fontsLoaded] = useFonts({
    Jost_600SemiBold,
    Jost_400Regular
  });

  if(!fontsLoaded)
  return <AppLoading />
  
  return(
    

   
   <UserIdentification/>
   
  )
}


