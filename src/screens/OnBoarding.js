import React, { useContext, useState } from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import { Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Select, Text, CheckIcon, View, NativeBaseProvider } from "native-base";
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MainContext,MainProvider } from '../Context/MainContext';
const languageOptions = [
  { label: 'English', value: 'English' },
  { label: 'Chichewa', value: 'Chichewa' },
];


const OnboardingScreen = props => {

  const {language, setLanguage, userName, setUserName, userLevel, setUserLevel,firstLaunch, setFirstLaunch} = useContext(MainContext);

  const [filled,setFilled] = useState(false);

  const OnboardingBody = ({ title, subtitle, image }) => {

    return (
      <View>
        <View>
          <Text fontSize='3xl' color='white' bold>{title}</Text>
          <Text fontSize='xl' color='white'>{subtitle}</Text>
        </View>
        <View mt={3}>
          <Image
            style={{
              width: 350, height: 350, resizeMode: "contain",
            }}
            source={image}
          />
        </View>
      </View>

    )

  }
  const Done = ({ ...props }) => (
    <Ionicons style={{ padding: 10 }} name="ios-caret-forward-circle-outline" size={35} color="white" {...props} />

  );

  const Next = ({ ...props }) => {

    return (
      <Text color="white" p={5} {...props}>Next
      </Text>


    )

  }

  const Dot = ({ selected }) => {


    return (
      <View
        style={{
          backgroundColor: selected ? "white" : "#95B6FF",
          width: 8,
          height: 8,
          borderRadius: 4,
          marginLeft: 3,
          marginRight: 3,
          marginTop: 3,
          marginBottom: 3
        }}
      />

    )

  }

  const FinalScreen = () => {
   
    async function setLang(lang) {

      AsyncStorage.setItem("selectedLanguage", lang);
      setLanguage(lang)

      setFilled(true)



    }

    return (
      <View mt={10}>

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
          <Select.Item shadow={2} label="English" value="English" />
          <Select.Item shadow={2} label="Chichewa" value="Chichewa" />

        </Select>
      </View>
    );
  };
  return (
    <Onboarding
      //To handle the navigation to the Homepage if Skip is clicked
      onSkip={() => setFirstLaunch(false)}

      //To handle the navigation to the Homepage after Done is clicked
      onDone={() => setFirstLaunch(false)}

      //Remove show skip as final page has mandate to select language
      showSkip={false}

      showDone={filled}  

      DotComponent={Dot}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      pages={[
        {
          backgroundColor: '#95B6FF',

          image: (
            <SafeAreaView>
              <OnboardingBody title="Welcome" subtitle="Welcome to the Chichewa Lessons Malawi App." image={require("../assets/uob2.png")} />

            </SafeAreaView>

          ),
          title: '',
          subtitle: '',
        },
        {
          backgroundColor: '#95B6FF',
          image: (
            <OnboardingBody title="Phunzilani" subtitle="Gwilitsani foni yanu kuphunzila Chichewa." image={require("../assets/uob.png")} />

          ),
          title: '',
          subtitle: '',
        },
        {
          backgroundColor: '#95B6FF',
          image: (
            <SafeAreaView>
              <OnboardingBody title="Welcome to Chichewa Lessons MW" subtitle="Choose the delivery language/Sankhani chiyankhulo" image={require("../assets/onBoarding.png")} />

              <FinalScreen />

            </SafeAreaView>

          ),
          title: '',
          subtitle: ''
        }
      ]}
    />
  );
};


export default OnboardingScreen;