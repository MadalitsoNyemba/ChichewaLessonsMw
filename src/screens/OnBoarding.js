import React, { useState } from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import {View,Image,Text} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Select, VStack, CheckIcon, Center, NativeBaseProvider } from "native-base";
const languageOptions = [
    { label: 'English', value: 'en' },
    { label: 'Chichewa', value: 'ch' },
    // Add more language options as needed
  ];


    const OnboardingScreen = props => {
        const [selectedLanguage, setSelectedLanguage] = useState(null);
        const handleLanguageSelect = (value) => {
            setSelectedLanguage(value);
          };
        
          const FinalScreen = () => {
            let [language, setLanguage] = React.useState("en");

                async function setLang(lang) {
                  
                    AsyncStorage.setItem("selectedLanguage", lang);
                    setLanguage(lang)


           
                }

            return (
              <View>
                <Select shadow={2} selectedValue={language} minWidth={200} accessibilityLabel="Choose Language" placeholder="Choose Language" _selectedItem={{
      bg: "teal.600",
      endIcon: <CheckIcon size="5" />
    }} _light={{
      bg: "coolGray.100",
      _hover: {
        bg: "coolGray.200"
      },
      _focus: {
        bg: "coolGray.200:alpha.70"
      }
    }} _dark={{
      bg: "coolGray.800",
      _hover: {
        bg: "coolGray.900"
      },
      _focus: {
        bg: "coolGray.900:alpha.70"
      }
    }} onValueChange={itemValue => setLang(itemValue)}>
        <Select.Item shadow={2} label="English" value="en" />
        <Select.Item shadow={2} label="Chichewa" value="ch" />

      </Select>
              </View>
            );
          };
    return(
    <Onboarding
    //To handle the navigation to the Homepage if Skip is clicked
    onSkip={() => props.navigation.replace("Login")}

    //To handle the navigation to the Homepage after Done is clicked
    onDone={() => props.navigation.replace("Login")}

    //Remove show skip as final page has mandate to select language
    showSkip = {false}


        pages={[
        {
            backgroundColor: '#ffffff',
            image: (
                <Image
                  source={require("../assets/userOnboard.jpg")}
                  resizeMode="contain"
                  style={{ width: 300, height: 300 }}
                />
              ),
            title: 'Welcome',
            subtitle: 'Welcome to the Chicewa Lessons Malawi App.',
        },
        {
            backgroundColor: '#ffffff',
            image: (
                <Image
                  source={require("../assets/user2Onboard.jpg")}
                  resizeMode="contain"
                  style={{ width: 300, height: 300 }}
                />
              ),
            title: 'Phunzilani',
            subtitle: 'Gwilitsani foni yanu kuphunzila Chichewa.',
        },
        {
            backgroundColor: '#ffffff',
            image: (
                <Image
                  source={require("../assets/user3Onboard.jpg")}
                  resizeMode="contain"
                  style={{ width: 250, height: 250 }}
                />
              ),
            title: 'Choose language/Sankhani Chiyankhulo',
            subtitle: <FinalScreen/>
        }
    ]}
/>
    );
};
  
  
  export default OnboardingScreen;