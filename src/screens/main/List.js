import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View,Image, Flex,Box,ScrollView,VStack, FormControl, Input, Button, Center,Heading,Select, HStack,Pressable,Text } from "native-base";
import Lesson from '../../components/Lesson';
import { useQuery } from "@apollo/client";
import { LESSONS_QUERY } from "../../gql/Query";
const List = props => {
  const { data, loading } = useQuery(LESSONS_QUERY);
    let [language, setLanguage] = React.useState("en");

    // let lessons = data.lessons.filter((item) => item.level == userLevel)
    let lessons = data.lessons
    console.log(data)
    React.useEffect(() => {
        async function setData() {
          
          const langData = await AsyncStorage.getItem("selectedLanguage");
          setLanguage(langData)
         
        }
        setData();
      }, []);

    return (
      <View  bg="#95B6FF" >
        <View pt={10} pl={6}>
        <Text color="white" fontSize="xl">Selected Topic</Text>
        </View>

        


        <ScrollView h="100%" border="1" borderTopRadius="30" p={5} bg={["#fff"]} mt={4}>

<Pressable  onPress={() => props.navigation.navigate("Detail")}>

{
      lessons.map((lesson)=>
      <Lesson lesson={lesson}/>
      )
    }

    </Pressable>
      

      
    </ScrollView>    

      
      </View>
    );
}

export default List;