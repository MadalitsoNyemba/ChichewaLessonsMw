import React,{useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View,Image, Flex,Box,ScrollView,VStack, FormControl, Input, Button, Center,Heading,Select, HStack,Pressable,Text } from "native-base";
import RenderHtml from 'react-native-render-html';
import { MainContext,MainProvider } from '../../Context/MainContext';
import i18n from '../../translations/i8n';
const Detail = props => {
  const source = {
    html: props.route.params.content
  };
  
  const {userName,setUserName,setUserLevel, userLevel, language, setLanguage} = useContext(MainContext);
  i18n.locale=language
    return (
      <View bg="#95B6FF">
        <View p={30} h={100} >
        <Text color="white" fontSize="3xl">{props.route.params.lessonName}</Text>
        </View>

        


        <ScrollView h="90%" border="1" borderTopRadius="30"  bg={["#fff"]} mt={3} mb={5}>

<View p={5} >
<Text color="grey" fontSize="xl">{i18n.t('detail.description')} </Text>
{/* <Text fontSize="sm" mt={3} >
{props.route.params.content}
</Text> */}

<RenderHtml
      source={source}
    />

</View>
      
      

      
    </ScrollView>    

      
      </View>
    );
}

export default Detail;