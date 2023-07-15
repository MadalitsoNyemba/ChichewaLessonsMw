import React, { useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View,Image, Flex,Box,ScrollView,VStack, FormControl, Input, Button, Center,Heading,Pressable, HStack, Text } from "native-base";
import { MainContext,MainProvider } from '../../Context/MainContext';

import * as RNLocalize from "react-native-localize";
import { useQuery } from "@apollo/client";
import { LESSONS_QUERY } from "../../gql/Query";
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Lesson from '../../components/Lesson';
import LinearGradient from 'react-native-linear-gradient'
import Topic from '../../components/Topic';
const Home = props => {
    const { data, loading } = useQuery(LESSONS_QUERY);
  
    const translations = {
        en: require("../../translations/en.json"),
        ch: require("../../translations/ch.json"),
      };

const {userName,setUserName,setUserLevel, userLevel, language} = useContext(MainContext);



//   const helloWorldString = translations[language].hello;



    // const colorGradients2 = ['#25196B', '#94D9B4'];
// let lessons = data.lessons.filter((item) => item.level == userLevel)
// let lessons = data.lessons
// let topics = data.lessons.filter((item) => item.level == userLevel).reduce((acc, cur) => {
//     const existingItem = acc.find(item => cur.topic === item.topic);
//     if(existingItem) {
//        existingItem.count++;
//     }
//     else {
//        acc.push({...cur, count: 1});    
//     }
//     return acc;
//  }, [])


React.useEffect(() => {
    async function setData() {
      const userNameData = await AsyncStorage.getItem("userName");
      const userLevelData = await AsyncStorage.getItem("userLevel");
      setUserName(userNameData)
      setUserLevel(userLevelData)
    }
    setData();
  }, []);

    return (
        <SafeAreaView style={{backgroundColor:'#F1F1FA', height:'100%'}}>

      <ScrollView p={5} bg="red">
        <View>
        {/* <Text>{helloWorldString} {userName}</Text> */}
        </View>

        <View mt={5}>
            <Text  fontSize="2xl" color="#595085">Topics for {userLevel}</Text>
            <View mt={3}>  
            <ScrollView horizontal={true}>

                <HStack space={3} >
               
               <Topic props={props}/>
               <Topic props={props}/>
               <Topic props={props}/>

                   
                </HStack>
                </ScrollView>

            </View>
        </View>

        <View mt={5} mb={3}>
        <Text fontSize="2xl" color="#595085">Recommendations</Text>
        </View >
        {/* {
      lessons.map((lesson)=>
      <Lesson lesson={lesson}/>
      )
    } */}
  
        
      
      </ScrollView>
      </SafeAreaView>

    );
}



export default Home;