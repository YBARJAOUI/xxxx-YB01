import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerMenu from './drawer';
import Language from '../language';
import Onboarding from '../onboarding';
import Home from '../home';
import Login from '../login';

const Drawer = createDrawerNavigator();

const DrawerNavigation = (props) => {
    return (
        <>
            <Drawer.Navigator
                drawerContent={() => <DrawerMenu/>}
                initialRouteName='language'
                screenOptions={{
                    headerShown : false,
                    swipeEdgeWidth: 0
                }}
            >
                {/* <Drawer.Screen
                    name="BottomNavigation"
                    component={BottomNavigation} 
                /> */}
                <Drawer.Screen name='language' component={Language}/>
                <Drawer.Screen name='onboarding' component={Onboarding} />
                <Drawer.Screen name='home' component={Home} />
                <Drawer.Screen name='login' component={Login} />
            </Drawer.Navigator>
        </>
    );
};


export default DrawerNavigation;