import { useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    ImageBackground,
    TouchableOpacity
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { Card } from "@rneui/themed";
import { SIZES, COLORS, IMAGES, FONT, SVG } from '../constants';
import { useTranslation } from "react-i18next";
import { Header } from "./layout/header";
import SearchBar from "./navigations/recherche";
import { SvgXml } from 'react-native-svg'; 
import { useNavigation } from '@react-navigation/native';
 

export default function Factures() {
    const router = useNavigation();
    const {t, i18n} = useTranslation();
    const [searchTerm, setSearchTerm] = useState("");

    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.gray2 }}>
            <ImageBackground source={IMAGES.bg} resizeMode="cover" style={{width:'100%', height: '100%'}}>

                <Header 
                headerTitle= {t('Factures')}/>
                <SearchBar />
                <ScrollView showsVerticalScrollIndicator={true}>

                    <View style={{
                            flexDirection:'column',
                            alignContent:"space-between",
                            alignItems:'center',
                            paddingVertical:1,
                    }}>
                <TouchableOpacity onPress={() => {router.navigate('payments')}}>
                <Card 
                containerStyle={{
                           
                           borderRadius:38,
                           backgroundColor: COLORS.gray3,
                           borderWidth:0,
                           shadowColor: "#000",
                           width:334,
                           height:149,
                           shadowOffset: {
                               width: 0,
                               height: 12,
                           },
                           shadowOpacity: 0.51,
                           shadowRadius: 13.16,

                           elevation: 20,}}
                       >

                        <View style={{
                           
                            flexDirection:'row',
                            alignContent:'space-between',
                            paddingHorizontal:4
                           
                            
                        }}>
                            
                       
                        <View style={{
                            
                            flexDirection:'column',
                            alignContent:'space-between',
                            alignItems:'flex-start',
                            
                            
                        }}>
                        <Text style={{
                            marginTop:10,
                            
                            fontSize: SIZES.medium,
                        }}>
                            00/00/0000
                            </Text>
                        <Text style={{
                            marginTop:15,
                            marginRight:45,
                            fontFamily:FONT.bold,
                            fontSize: SIZES.medium,
                        }}>
                            {t('Statut')} : Actif
                            </Text>
                        <SvgXml
                        style={{
                            
                            margin:16,
                        }}
                        xml={SVG.success}
                        width={32}
                        height={32} 
                        />
                        </View>

                        <View style={{
                            position:'absolute',
                            paddingHorizontal:150,
                            paddingVertical:1,
                            flexDirection:'column',
                            alignContent:'space-between',
                            alignItems:'flex-start'
                            
                        }}>
                            <Text
                            style={{
                                marginTop:10,
                                fontFamily:FONT.bold,
                                fontSize: SIZES.medium,
                            }}>
                                {t('Facture')} #29282
                                </Text>
                            <Text style={{
                            marginTop:15,
                            fontFamily:FONT.bold,
                            fontSize: SIZES.medium,
                        }}>
                            {t('Montant')} 20,00$
                            </Text>
                            <SvgXml
                        style={{
                            
                            margin:16,
                            marginLeft:50
                        }}
                        xml={SVG.telecharger}
                        width={32}
                        height={32} 
                        />
                        </View>
                        </View>
                       </Card>  
                       </TouchableOpacity> 
                       
                       <Card 
                containerStyle={{
                           
                           borderRadius:38,
                           backgroundColor: COLORS.gray3,
                           borderWidth:0,
                           shadowColor: "#000",
                           width:334,
                           height:149,
                           shadowOffset: {
                               width: 0,
                               height: 12,
                           },
                           shadowOpacity: 0.51,
                           shadowRadius: 13.16,

                           elevation: 20,}}
                       >

                        <View style={{
                           
                            flexDirection:'row',
                            alignContent:'space-between',
                            paddingHorizontal:4
                           
                            
                        }}>
                            
                       
                        <View style={{
                            
                            flexDirection:'column',
                            alignContent:'space-between',
                            alignItems:'flex-start',
                            
                            
                        }}>
                        <Text style={{
                            marginTop:10,
                            
                            fontSize: SIZES.medium,
                        }}>
                            00/00/0000
                            </Text>
                        <Text style={{
                            marginTop:15,
                            marginRight:45,
                            fontFamily:FONT.bold,
                            fontSize: SIZES.medium,
                        }}>
                            {t('Statut')} : Actif
                            </Text>
                        <SvgXml
                        style={{
                            
                            margin:16,
                        }}
                        xml={SVG.resite}
                        width={32}
                        height={32} 
                        />
                        </View>

                        <View style={{
                            position:'absolute',
                            paddingHorizontal:150,
                            paddingVertical:1,
                            flexDirection:'column',
                            alignContent:'space-between',
                            alignItems:'flex-start'
                            
                        }}>
                            <Text
                            style={{
                                marginTop:10,
                                fontFamily:FONT.bold,
                                fontSize: SIZES.medium,
                            }}>
                                {t('Facture')} #29282
                                </Text>
                            <Text style={{
                            marginTop:15,
                            fontFamily:FONT.bold,
                            fontSize: SIZES.medium,
                        }}>
                            {t('Montant')} 20,00$
                            </Text>
                            <SvgXml
                        style={{
                            
                            margin:16,
                            marginLeft:50
                        }}
                        xml={SVG.payer}
                        width={32}
                        height={32} 
                        />
                        </View>
                        </View>
                           
                       </Card>

                       <Card 
                containerStyle={{
                           
                           borderRadius:38,
                           backgroundColor: COLORS.gray3,
                           borderWidth:0,
                           shadowColor: "#000",
                           width:334,
                           height:149,
                           shadowOffset: {
                               width: 0,
                               height: 12,
                           },
                           shadowOpacity: 0.51,
                           shadowRadius: 13.16,

                           elevation: 20,}}
                       >

                        <View style={{
                           
                            flexDirection:'row',
                            alignContent:'space-between',
                            paddingHorizontal:4
                           
                            
                        }}>
                            
                       
                        <View style={{
                            
                            flexDirection:'column',
                            alignContent:'space-between',
                            alignItems:'flex-start',
                            
                            
                        }}>
                        <Text style={{
                            marginTop:10,
                            
                            fontSize: SIZES.medium,
                        }}>
                            00/00/0000
                            </Text>
                        <Text style={{
                            marginTop:15,
                            marginRight:45,
                            fontFamily:FONT.bold,
                            fontSize: SIZES.medium,
                        }}>
                            {t('Statut')} : Actif
                            </Text>
                        <SvgXml
                        style={{
                            
                            margin:16,
                        }}
                        xml={SVG.retard}
                        width={32}
                        height={32} 
                        />
                        </View>

                        <View style={{
                            position:'absolute',
                            paddingHorizontal:150,
                            paddingVertical:1,
                            flexDirection:'column',
                            alignContent:'space-between',
                            alignItems:'flex-start'
                            
                        }}>
                            <Text
                            style={{
                                marginTop:10,
                                fontFamily:FONT.bold,
                                fontSize: SIZES.medium,
                            }}>
                                {t('Facture')} #29282
                                </Text>
                            <Text style={{
                            marginTop:15,
                            fontFamily:FONT.bold,
                            fontSize: SIZES.medium,
                        }}>
                            {t('Montant')} 20,00$
                            </Text>
                            <SvgXml
                        style={{
                            
                            margin:16,
                            marginLeft:50
                        }}
                        xml={SVG.payer}
                        width={32}
                        height={32} 
                        />
                        </View>
                        </View>
                           
                       </Card>
                 
                       </View>

                </ScrollView>
            </ImageBackground>
      </SafeAreaView>

    );


}
