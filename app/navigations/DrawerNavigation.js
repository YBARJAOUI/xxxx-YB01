import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerMenu from './drawer';
import Language from '../language';
import Onboarding from '../onboarding';
import Home from '../home';
import Login from '../login';
import Vehicules from '../vehicules';
import Factures from '../factures';
import Payments from '../payments';
import CartePayment from '../cartepayment';
import PaymentOk from '../paymentok';
import PaymentError from '../paymenterror'
import Archive from '../archive';
import ArchiveResultat from '../archiveresultat';
import PlayVedeo from '../playvedeo';
import CloudStorage from '../cloudstorage';
import Profil from '../profile';


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
                <Drawer.Screen name='vehicules' component={Vehicules} />
                <Drawer.Screen name='factures' component={Factures} />
                <Drawer.Screen name='payments' component={Payments} />
                <Drawer.Screen name='cartepayment' component={CartePayment} />
                <Drawer.Screen name='paymentok' component={PaymentOk} />
                <Drawer.Screen name='paymentno' component={PaymentError} />
                <Drawer.Screen name='archive' component={Archive} />
                <Drawer.Screen name='archiveresultat' component={ArchiveResultat} />
                <Drawer.Screen name='playvedeo' component={PlayVedeo} />
                <Drawer.Screen name='cloudstorage' component={CloudStorage} />
                <Drawer.Screen name='profil' component={Profil} />


            </Drawer.Navigator>
        </>
    );
};


export default DrawerNavigation;