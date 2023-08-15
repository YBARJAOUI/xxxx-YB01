import { useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    ImageBackground,
    TextInput,
    
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { Card, Button,Image, Input } from "@rneui/themed";
import { SIZES, COLORS, IMAGES, FONT, SVG } from '../constants';
import { useTranslation } from "react-i18next";
import { Header } from "./layout/header";
import { useNavigation } from '@react-navigation/native';
import { SvgXml } from 'react-native-svg'; 


 

export default function Profil() {
    const router = useNavigation();
    const {t, i18n} = useTranslation();
    const [searchTerm, setSearchTerm] = useState("");

    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.gray2 }}>
            <ImageBackground source={IMAGES.bg} resizeMode="cover" style={{width:'100%', height: '100%'}}>

                <Header headerTitle= {t('Profil')} />
                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={{
                            flex:1,
                            flexDirection:'column',
                            alignContent:"space-between",
                            alignItems:'center',
                            marginVertical:20,
                    }}>

                      <View 
                      style={{
                      flex:1,
                      
                    }}
                      >
                     <Image 
                     source={IMAGES.avatar}
                     style={{
                      width:133,
                        height:133,
                        alignSelf:'center'
                     }}
                     />
                        <SvgXml
                        style={{
                            marginVertical:90,
                            alignSelf:'flex-end',
                            position:'absolute',
                            
                            
                        }}
                        xml={SVG.camera}
                        width={40}
                        height={40} 
                        />
                        </View>
                        <View
                        style={{
                          marginVertical:10, 
                      }}
                        >
                       <TextInput 
                       placeholder={t('nom')}
                        placeholderTextColor={'black'}
                        keyboardType="default"
                       style={{
                        paddingLeft:52,
                        width:315,
                        height:59,
                        backgroundColor: '#FFF',
                        borderRadius: 38,
                        fontSize:SIZES.large,
                        fontFamily:FONT.bold,
                        borderColor:COLORS.tertiary,
                        shadowColor: "#000",
                        elevation: 5,
                        marginVertical: 10,
                       }}

                       />
                        <TextInput 
                       placeholder={t('prenom')}
                        placeholderTextColor={'black'}
                        keyboardType="default"
                       style={{
                        paddingLeft:52,
                        width:315,
                        height:59,
                        backgroundColor: '#FFF',
                        borderRadius: 38,
                        fontSize:SIZES.large,
                        fontFamily:FONT.bold,
                        borderColor:COLORS.tertiary,
                        shadowColor: "#000",
                        elevation: 5,
                        marginVertical: 10,
                       }}

                       />   

                        <TextInput 
                       placeholder={t('Email')}
                        placeholderTextColor={'black'}
                        keyboardType="default"
                       style={{
                        paddingLeft:52,
                        width:315,
                        height:59,
                        backgroundColor: '#FFF',
                        borderRadius: 38,
                        fontSize:SIZES.large,
                        fontFamily:FONT.bold,
                        borderColor:COLORS.tertiary,
                        shadowColor: "#000",
                        elevation: 5,
                        marginVertical: 10,
                        
                       }}

                       />


                    <TextInput 
                       placeholder={t('Telephone')}
                        placeholderTextColor={'black'}
                        keyboardType="phone-pad"
                       style={{
                        paddingLeft:52,
                        width:315,
                        height:59,
                        backgroundColor: '#FFF',
                        borderRadius: 38,
                        fontSize:SIZES.large,
                        fontFamily:FONT.bold,
                        borderColor:COLORS.tertiary,
                        shadowColor: "#000",
                        elevation: 5,
                        marginVertical: 10,
                       }}

                       />
                       </View>
                       

            <Button
              title={t('modifier')}
              loading={false}
              loadingProps={{ size: 'small', color: 'white' }}
              buttonStyle={{
                backgroundColor: 'transparent',
                borderRadius: 38,
                borderWidth:6,
                borderColor:COLORS.tertiary,
                shadowColor: "#000",
                elevation: 6,
              }}
              titleStyle={{ fontFamily: FONT.bold, fontSize: SIZES.large, color:COLORS.tertiary }}
              containerStyle={{
                height: 73,
                width: 324,
                marginVertical: 30,
              }}
              onPress={() => console.log("hello")}
            />   


             <Button
              title={t('Retour')}
              loading={false}
              loadingProps={{ size: 'small', color: 'white' }}
              buttonStyle={{
                backgroundColor: 'transparent',
                borderRadius: 38,
                borderWidth:6,
                borderColor:COLORS.danger,
                shadowColor: "#000",
                elevation: 6,
              }}
              titleStyle={{ fontFamily: FONT.bold, fontSize: SIZES.large, color:COLORS.danger }}
              containerStyle={{
                height: 73,
                width: 324,
                marginVertical: -20,
              }}
              onPress={() => {router.navigate('home')}}
            />        
                 
                        </View>
  
                </ScrollView>
            </ImageBackground>
      </SafeAreaView>

    );


}
