import React, { useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    View,
    ImageBackground,
    
} from "react-native";
import { Button, Image, Text, Input } from "@rneui/themed";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from "react-i18next";
import { SIZES, COLORS, IMAGES, FONT } from '../constants';
import { storeData } from "../utils/Storage";

export default function Login() {
    const router = useNavigation();
    const {t, i18n} = useTranslation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        
            <SafeAreaView style={{flexDirection: 'row',  flex: 1}}>
                <ImageBackground source={IMAGES.bg} resizeMode="cover" style={{width:'100%', height: '100%'}}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                    <View
                        style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                        }}
                    >

                        <Image source={IMAGES.logo} style={{width: 80, height: 80, marginTop: 70}} />
                    
                        <Text style={{fontSize:SIZES.xxLarge, fontFamily: FONT.bold, color: COLORS.black, textAlign: 'center', marginTop: 30}}>{t('login')}</Text>

                        <View style={{flex: 1, flexDirection: 'column', marginTop: 25, justifyContent: 'center', alignItems: 'center'}}>
                
                            <View style={{flex:1, width: 270}}>
                                <Input
                                    textContentType="emailAddress"
                                    placeholder={t('email')}
                                    leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                                    onChangeText={value => setEmail(value) }
                                />
                            </View>
                            <View style={{flex:1, width:270}}>
                                <Input
                                    secureTextEntry={true}
                                    placeholder={t('password')}
                                    leftIcon={{ type: 'font-awesome', name: 'lock' }}
                                    onChangeText={value => setPassword(value) }
                                />
                            </View>

                            <View style={{flex:1}}>
                                <Button
                                    ViewComponent={LinearGradient} // Don't forget this!
                                    linearGradientProps={{
                                        colors: [COLORS.primary, COLORS.lightWhite],
                                        start: { x: 0, y: 0.5 },
                                        end: { x: 1.5, y: 0.5 },
                                    }}
                                    onPress={() => {router.navigate('home')}}
                                    buttonStyle={{marginTop: '20%', padding:10, borderRadius:20, marginHorizontal: '20%'}}
                                    titleStyle={{
                                        fontFamily: FONT.regular,
                                        color: COLORS.black,
                                        fontSize: SIZES.medium
                                    }}
                                >
                                    {t('login')}
                                </Button>
                            </View>

                            <View style={{flex:1}}>
                                <Text
                                    onPress={() => {}}
                                    style={{fontSize:SIZES.medium, fontFamily: FONT.bold, color: COLORS.tertiary, textAlign: 'center', marginTop: 30, textDecorationLine: 'underline'}}
                                    >
                                    {t('createaccount')}
                                </Text>
                            </View>
                                    
                        </View>
                    
                    </View>

                    </ScrollView>
                </ImageBackground>
            </SafeAreaView>
    );

}