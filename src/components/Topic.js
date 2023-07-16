import React, { useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View,Image, Flex,Box,ScrollView,VStack, FormControl, Input, Button, Center,Heading,Pressable, HStack, Text } from "native-base";
import { MainContext,MainProvider } from '../../Context/MainContext';

import * as RNLocalize from "react-native-localize";
import { useQuery } from "@apollo/client";
import { LESSONS_QUERY } from "../../gql/Query";
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

import LinearGradient from 'react-native-linear-gradient'

const Topic = ({topic, props}) => {

    const getRandomColor = () => {
        // Define the array of color hexes
        const colors = ['#94D9B4', '#D994A7'] // Replace with your desired hex values
      
        // Generate a random index between 0 and 1
        const randomIndex = Math.floor(Math.random() * colors.length);
      
        // Return the randomly selected color hex
        return colors[randomIndex];
      };
    
    return(
        <Pressable  onPress={() => props.navigation.navigate("List",{
          topicName:topic.topic
          })}>
        <LinearGradient
  start={{x: 0, y: 0}}
  end={{x: 1, y: 0}}
  colors={['#25196B',getRandomColor()]}
  style={{
    paddingLeft: 15,
    borderRadius:15,
    marginTop: 3,
    height:80
    }}>
        <HStack justifyContent="space-between"> 
        <Text color="white" fontSize="sm" numberOfLines={3} style={{width:80}} mt={3} >{topic.topic}</Text>
        <Image
          style={{
            width: 100, height: 100,resizeMode: "contain"
          }}
          source={require("../assets/topicRight.png")}
        />
        </HStack>

            </LinearGradient>
            </Pressable>
    )
}

export default Topic;