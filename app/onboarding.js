import { useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    ImageBackground,
    Image
} from "react-native";
import { Button } from "@rneui/themed";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { SIZES, COLORS, IMAGES, FONT } from '../constants';
import { useTranslation } from "react-i18next";

export default function Onboarding() {
    const router = useNavigation();
    const {t, i18n} = useTranslation();
    const [searchTerm, setSearchTerm] = useState("");

    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.gray2 }}>
            <ImageBackground source={IMAGES.bg} resizeMode="cover" style={{width:'100%', height: '100%'}}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View
                        style={{
                        flex: 1,
                        justifyContent:'center',
                        alignContent:'center'
                        }}
                    >

                        <Image source={IMAGES.onnboarding} style={{width: 320, height: 320}} />
                    
                        <Text style={{fontSize:SIZES.xxLarge, fontFamily: FONT.bold, color: COLORS.primary, textAlign: 'center'}}>Envycar</Text>
                        <Text style={{fontSize:SIZES.large, fontFamily: FONT.regular, color: COLORS.gray, textAlign: 'center', marginVertical: 60, marginHorizontal:30}}>{t('titleonboarding')}</Text>
                        
                        <Button
                            ViewComponent={LinearGradient} // Don't forget this!
                            linearGradientProps={{
                                colors: [COLORS.primary, COLORS.lightWhite],
                                start: { x: 0, y: 0.5 },
                                end: { x: 1.5, y: 0.5 },
                            }}
                            onPress={() => {router.navigate('login')}}
                            buttonStyle={{marginTop: '20%', padding:10, borderRadius:20, marginHorizontal: '20%'}}
                            titleStyle={{
                                fontFamily: FONT.regular,
                                color: COLORS.black,
                                fontSize: SIZES.medium
                            }}
                            >
                            {t('continuer')}
                        </Button>

                    
                    </View>

                </ScrollView>
            </ImageBackground>
      </SafeAreaView>

    );

}