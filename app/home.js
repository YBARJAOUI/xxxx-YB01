import { useState,useEffect } from "react";
import {
    SafeAreaView,
    ScrollView,
    View,
    ImageBackground,
    TouchableOpacity,
    BackHandler
    
} from "react-native";
import { Card } from "@rneui/themed";
import { SIZES, COLORS, IMAGES, FONT } from '../constants';
import { useTranslation } from "react-i18next";
import { Header } from "./layout/header";
import { useNavigation } from '@react-navigation/native';







export default function Home() {

    useEffect(() => { const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
 return () => backHandler.remove() }, [])
    const router = useNavigation();
    
    const {t, i18n} = useTranslation();
    const [searchTerm, setSearchTerm] = useState("");

    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.gray2 }}>
            <ImageBackground source={IMAGES.bg} resizeMode="cover" style={{width:'100%', height: '100%'}}>

                <Header 
                headerTitle={t('Acceuil')}
                />
                <ScrollView showsVerticalScrollIndicator={false}>
                    
           <View
           style={{
            flex:1,
            flexDirection:'column',
            justifyContent:'space-between',
            alignContent:'center',
            paddingVertical:1,
            
           }}
           >
                    <View
                        style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent:'center',
                        alignContent:'center',
                        marginVertical:8
                        }}
                    >
                        <TouchableOpacity onPress={() => {router.navigate('vehicules')}}>
                        <Card containerStyle={{
                            borderRadius:38,
                            backgroundColor: COLORS.gray3,
                            borderWidth:0,
                            shadowColor: "#000",
                            width:141,
                            height:149,
                            shadowOffset: {
                                width: 0,
                                height: 12,
                            },
                            shadowOpacity: 0.51,
                            shadowRadius: 13.16,

                            elevation: 20,}}
                            
                        >
                            <Card.Image
                            
                                style={{ 
                                     margin:15,
                                     marginBottom:8,
                                     width:77, 
                                     height:77, 
                                    
                                    }}
                                source={IMAGES.car}
                            />
                            <Card.Title h4 h4Style={{fontFamily: FONT.bold, fontSize: SIZES.small}}>{t('Mes-Vehicules')}</Card.Title>
                        </Card> 
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {router.navigate('factures')}}>
                        <Card containerStyle={{
                            borderRadius:38,
                            backgroundColor: COLORS.gray3,
                            borderWidth:0,
                            shadowColor: "#000",
                            width:141,
                            height:149,
                            shadowOffset: {
                                width: 0,
                                height: 12,
                            },
                            shadowOpacity: 0.51,
                            shadowRadius: 13.16,

                            elevation: 20,}}
                        >
                            <Card.Image
                            
                                style={{ 
                                     margin:15,
                                     marginBottom:8,
                                     width:77, 
                                     height:77, 
                                    
                                    }}
                                source={IMAGES.facture}
                            />
                            <Card.Title h4 h4Style={{fontFamily: FONT.bold, fontSize: SIZES.small}}>{t('Mes-Factures')}</Card.Title>
                        </Card>
                        </TouchableOpacity>
                        </View>

                            <View
                            style={{
                                flex: 1,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginVertical:12
                            }}
                            >
                    <TouchableOpacity onPress={() => {router.navigate('archive')}}>
                        <Card containerStyle={{
                           
                            borderRadius:38,
                            backgroundColor: COLORS.gray3,
                            borderWidth:0,
                            shadowColor: "#000",
                            width:299,
                            height:170,
                            shadowOffset: {
                                width: 0,
                                height: 12,
                            },
                            shadowOpacity: 0.51,
                            shadowRadius: 13.16,

                            elevation: 20,}}
                        >
                            <Card.Image
                                style={{ 
                                     marginVertical:15,
                                     marginHorizontal:99,
                                     width:72,
                                     height:72,
                                     
                                }}

                                source={IMAGES.cloud}
                            />
                            <Card.Title h4 h4Style={{fontFamily: FONT.bold, fontSize: SIZES.small, lineHeight: 18}}>{t('Visualiser-archive')} </Card.Title>
                            
                        </Card>  
                        </TouchableOpacity> 
                        </View>               
                    

                        <View
                        style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent:'center',
                        alignContent:'center',
                        marginVertical:8
                        }}
                    >

                        <Card containerStyle={{
                            borderRadius:38,
                            backgroundColor: COLORS.gray3,
                            borderWidth:0,
                            shadowColor: "#000",
                            width:141,
                            height:149,
                            shadowOffset: {
                                width: 0,
                                height: 12,
                            },
                            shadowOpacity: 0.51,
                            shadowRadius: 13.16,

                            elevation: 20,}}
                        >
                            <Card.Image
                            
                                style={{ 
                                     margin:15,
                                     marginBottom:8,
                                     width:77, 
                                     height:77, 
                                    
                                    }}
                                source={IMAGES.logo}
                            />
                            <Card.Title h4 h4Style={{fontFamily: FONT.bold, fontSize: SIZES.small}}>{t('propos')}</Card.Title>
                        </Card> 

                        
                        <Card containerStyle={{
                            borderRadius:38,
                            backgroundColor: COLORS.gray3,
                            borderWidth:0,
                            shadowColor: "#000",
                            width:141,
                            height:149,
                            shadowOffset: {
                                width: 0,
                                height: 12,
                            },
                            shadowOpacity: 0.51,
                            shadowRadius: 13.16,

                            elevation: 20,}}
                        >
                            <Card.Image
                            
                                style={{ 
                                     margin:15,
                                     marginBottom:8,
                                     width:77, 
                                     height:77, 
                                    
                                    }}
                                source={IMAGES.exclamation}
                            />
                            <Card.Title h4 h4Style={{fontFamily: FONT.bold, fontSize: SIZES.small}}>C.G.U</Card.Title>
                        </Card>
                        
                        </View>

                    </View> 
                       

                </ScrollView>
            </ImageBackground>
      </SafeAreaView>

    );


}
