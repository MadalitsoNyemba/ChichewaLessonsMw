import React from "react";


const MainContext = React.createContext();


const MainProvider = ({children}) => {
    const [language,setLanguage] = React.useState();
    const [userName,setUserName] = React.useState();
    const [userLevel,setUserLevel] = React.useState();
    const [loggedIn, setLoggedIn] = React.useState();
    const [firstLaunch, setFirstLaunch] = React.useState();

    return(
        <MainContext.Provider value={{language,setLanguage,userName,setUserName,userLevel,setUserLevel,loggedIn, setLoggedIn,firstLaunch, setFirstLaunch}}>
            {children}
        </MainContext.Provider>
    )
}

export {MainContext,MainProvider}