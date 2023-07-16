import React,{useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View,Image, Flex,Box,ScrollView,VStack, FormControl, Input, Button, Center,Heading,Select, HStack,Pressable,Text } from "native-base";
import Lesson from '../../components/Lesson';
import { useQuery } from "@apollo/client";
import { LESSONS_QUERY } from "../../gql/Query";
import { MainContext,MainProvider } from '../../Context/MainContext';
const List = props => {
  const { data, loading } = useQuery(LESSONS_QUERY);
  const {userName,setUserName,setUserLevel, userLevel, language, setLanguage} = useContext(MainContext);

    // let lessons = data.lessons.filter((item) => item.level == userLevel)
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
        <Text color="white" fontSize="xl">{props.route.params.topicName}</Text>
        </View>

        


        <ScrollView h="100%" border="1" borderTopRadius="30" p={5} bg={["#fff"]} mt={4}>

 
{
        !loading && (data.lessons.filter((item) => (item.level == userLevel && item.topic ==props.route.params.topicName))).map((lesson)=> <Lesson props={props} lesson={lesson}/>)
    }



      

      
    </ScrollView>    

      
      </View>
    );
}

export default List;