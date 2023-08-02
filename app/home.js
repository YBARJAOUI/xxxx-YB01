import { useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    View,
    ImageBackground,
    Image
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { Cardrr } from "@rneui/themed";
import { SIZES, COLORS, IMAGES, FONT } from '../constants';
import { useTranslation } from "react-i18next";
import { Header } from "./layout/header";

export default function Home() {
    const router = useRouter();
    const {t, i18n} = useTranslation();
    const [searchTerm, setSearchTerm] = useState("");

    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.gray2 }}>
            <ImageBackground source={IMAGES.bg} resizeMode="cover" style={{width:'100%', height: '100%'}}>

                <Header />
                <ScrollView showsVerticalScrollIndicator={false}>
                    
           
                    <View
                        style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent:'center',
                        alignContent:'center',
                        paddingBottom:40,
                        paddingHorizontal:10
                        }}
                    >

                        <Card containerStyle={{
                            borderRadius:15,
                            backgroundColor: COLORS.gray3,
                            borderWidth:0,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 12,
                            },
                            shadowOpacity: 0.51,
                            shadowRadius: 13.16,

                            elevation: 20,}}
                        >
                            <Card.Image
                                style={{ padding: 40, width:50, height:50, marginBottom: 20}}
                                source={IMAGES.logo}
                            />
                            <Card.Title h4 h4Style={{fontFamily: FONT.regular, fontSize: SIZES.small}}>A Propos</Card.Title>
                        </Card> 

                        <Card containerStyle={{
                            borderRadius:15,
                            backgroundColor: COLORS.gray3,
                            borderWidth:0,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 12,
                            },
                            shadowOpacity: 0.51,
                            shadowRadius: 13.16,

                            elevation: 20,}}
                        >
                            <Card.Image
                                style={{ padding: 40, width:50, height:50, marginBottom: 20}}
                                source={IMAGES.exclamation}
                            />
                            <Card.Title h4 h4Style={{fontFamily: FONT.regular, fontSize: SIZES.small}}>Guide d'utilisation</Card.Title>
                        </Card>                   
                    
                    </View>

                </ScrollView>
            </ImageBackground>
      </SafeAreaView>

    );


}
