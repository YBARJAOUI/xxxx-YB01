import { Stack } from 'expo-router';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer, useNavigationContainerRef, InitialState } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import DrawerNavigation from '../navigations/DrawerNavigation';

const Layout = (props) => {
    const StackComponent = createStackNavigator();

    const [fontsLoaded] = useFonts({
        RBThin: require('../../assets/fonts/Roboto-Thin.ttf'),
        RBRegular: require('../../assets/fonts/RobotoRegular.ttf'),
        RBBold: require('../../assets/fonts/Roboto-Bold.ttf'),
        RBBlack: require('../../assets/fonts/Roboto-Black.ttf'),
    })

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded])

    if(!fontsLoaded) return null;

    return (
        <NavigationContainer
            onReady={() => {
                SplashScreen.hideAsync();
              }}
            linking={{    
                config: {
                  initialRouteName: 'language',
                },
            }}
        >
            <DrawerNavigation />
        </NavigationContainer>
    )
}

export default Layout;



// <StackComponent.Navigator
// initialRouteName='home'
// drawerContent={(props) => <DrawerMenu {...props}/>}
// detachInactiveScreens={true}
// screenOptions={{
//     headerShown : false,
//     cardStyle: { backgroundColor: "transparent" },
//     cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
// }}
// >
// <StackComponent.Screen name='language' component={Language}/>
// <StackComponent.Screen name='onboarding' component={Onboarding} />
// <StackComponent.Screen name='home' component={Home} />
// <StackComponent.Screen name='login' component={Login} />
// </StackComponent.Navigator>