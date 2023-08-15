import { useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    ImageBackground,
    
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { Card, Button } from "@rneui/themed";
import { SIZES, COLORS, IMAGES, FONT, SVG } from '../constants';
import { useTranslation } from "react-i18next";
import { Header } from "./layout/header";
import { useNavigation } from '@react-navigation/native';



export default function PlayVedeo() {
    const navigation = useNavigation();
    const {t, i18n} = useTranslation();
    const [searchTerm, setSearchTerm] = useState("");

    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.gray2 }}>
            <ImageBackground source={IMAGES.bg} resizeMode="cover" style={{width:'100%', height: '100%'}}>

                <Header headerTitle= {t('video')} />
                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={{
                            flexDirection:'column',
                            alignContent:"space-between",
                            alignItems:'center',
                            marginVertical:80,
                    }}>
                
                <Card 
                containerStyle={{
                           
                           borderRadius:38,
                           backgroundColor: COLORS.gray3,
                           borderWidth:0,
                           shadowColor: "#000",
                           width:341,
                           height:236,
                           shadowOffset: {
                               width: 0,
                               height: 12,
                           },
                           shadowOpacity: 0.51,
                           shadowRadius: 13.16,

                           elevation: 20,}}
                           
                       >
                       
                       </Card>  
                       
                                
            <Button
              title={t('Partager')}
              loading={false}
              loadingProps={{ size: 'small', color: 'white' }}
              buttonStyle={{
                backgroundColor: 'transparent',
                borderRadius: 38,
                borderWidth:6,
                borderColor:COLORS.tertiary,
                shadowColor: "#000",
                elevation: 5,
              }}
              titleStyle={{ fontFamily: FONT.bold, fontSize: SIZES.large, color:COLORS.tertiary }}
              containerStyle={{
                marginHorizontal: 50,
                height: 73,
                width: 324,
                marginVertical: 40,
              }}
              onPress={() => {navigation.navigate('cartepayment')}}
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
                elevation: 5,
              }}
              titleStyle={{ fontFamily: FONT.bold, fontSize: SIZES.large, color:COLORS.danger }}
              containerStyle={{
                marginHorizontal: 50,
                height: 73,
                width: 324,
                marginVertical: -30,
              }}
              onPress={() => {navigation.goBack()}}
            />           
                 
                        </View>
                           
                       

                </ScrollView>
            </ImageBackground>
      </SafeAreaView>

    );


}
