import { useState, useEffect } from "react";
import {
    SafeAreaView,
    ScrollView,
    View,
    ImageBackground,
} from "react-native";
import { Button, Image, Text } from "@rneui/themed";
import { LinearGradient } from 'expo-linear-gradient';
import { Stack, useRouter, useFocusEffect } from "expo-router";
import {useTranslation} from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import i18n from "../translations/i18n";
import { SIZES, COLORS, IMAGES, FONT } from '../constants';
import { storeData, getData } from "../utils/Storage";


export default function Language() {
    const router = useNavigation();
    const {t, i18n} = useTranslation();
    useEffect(() => {
        
    })


    return (
        
            <SafeAreaView style={{flexDirection: 'row',  flex: 1}}>
                <ImageBackground source={IMAGES.bg} resizeMode="cover" style={{width:'100%', height: '100%'}}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                    <View
                        style={{
                        flex: 1,
                        }}
                    >

                        <Image source={IMAGES.onnboarding} style={{width: 320, height: 320}} />
                    
                        <Text style={{fontSize:SIZES.xxLarge, fontFamily: FONT.bold, color: COLORS.black, textAlign: 'center'}}>{t("selectlang")}</Text>

                        <View style={{flex: 1, flexDirection: 'row', marginTop: 25, justifyContent: 'center', alignItems: 'center'}}>
                
                            <View style={{flex:1}}>
                                <Image source={IMAGES.fr} containerStyle={{aspectRatio:1, marginLeft: 25}} onPress={() => {storeData('langue', 'fr'); i18n.changeLanguage('fr'); router.navigate('onboarding') }} />
                                <Text h4 h4Style={{fontFamily: FONT.bold, color: COLORS.black, textAlign: 'center'}}>Francais</Text>
                                
                            </View>

                            <View style={{flex:1}}>
                                <Image source={IMAGES.uk} containerStyle={{aspectRatio:1, marginLeft: 25}} onPress={() => {storeData('langue', 'fr'); i18n.changeLanguage('fr'); router.navigate('onboarding') }} />
                                <Text h4 h4Style={{fontFamily: FONT.bold, color: COLORS.black, textAlign: 'center'}}>English</Text>
                                
                            </View>
                                    
                        </View>
                    
                    </View>

                    </ScrollView>
                </ImageBackground>
            </SafeAreaView>
        


    );

}