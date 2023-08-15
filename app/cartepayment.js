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
import { useNavigation } from '@react-navigation/native';
import { Card } from "@rneui/themed";
import { SIZES, COLORS, IMAGES, FONT, SVG } from '../constants';
import { useTranslation } from "react-i18next";
import { Header } from "./layout/header";
import SearchBar from "./navigations/recherche";
import { SvgXml } from 'react-native-svg'; 
 

export default function CartePayment() {
    const router = useNavigation();
    const {t, i18n} = useTranslation();
    const [searchTerm, setSearchTerm] = useState("");

    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.gray2 }}>
            <ImageBackground source={IMAGES.bg} resizeMode="cover" style={{width:'100%', height: '100%'}}>

                <Header headerTitle= {t('débiter')} />
               
                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={{
                            flexDirection:'column',
                            justifyContent:'center',
                            alignContent:"center",
                            alignItems:'center',
                            paddingVertical:70,
                        
                    }}>
                          <TouchableOpacity onPress={() => {router.navigate('paymentok')}}>
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
                            // marginTop:10,
                            fontFamily:FONT.bold,
                            fontSize: SIZES.large,
                        }}>
                            M.ADAM ADAM
                            </Text>
                        <Text style={{
                            marginTop:25,
                            marginRight:45,
                            fontFamily:FONT.regular,
                            fontSize: SIZES.medium,
                        }}>
                            {t('num')}
                            </Text>
                            <Text style={{
                            marginTop:15,
                            marginRight:45,
                            fontFamily:FONT.regular,
                            fontSize: SIZES.medium,
                        }}>
                            Exp
                            </Text>
                       
                        </View>

                        <View style={{
                            position:'absolute',
                            paddingHorizontal:110,
                            paddingVertical:0,
                            flexDirection:'column',
                            alignContent:'space-between',
                            alignItems:'flex-start'
                            
                        }}>
                           
                            <SvgXml
                        style={{
                            marginHorizontal:135,
                        }}
                        xml={SVG.visa}
                         
                        />
                            <Text style={{
                            marginTop:5,
                            fontFamily:FONT.thin,
                            fontSize: SIZES.medium,
                        }}>
                            1293942831090384
                            </Text>
                            <Text style={{
                            marginTop:15,
                        }}>
                            00/00
                            </Text>
                        </View>
                        </View>                           
                       </Card>  
                       </TouchableOpacity>

                       <TouchableOpacity onPress={() => {router.navigate('paymentno')}}>
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
                            // marginTop:10,
                            fontFamily:FONT.bold,
                            fontSize: SIZES.large,
                        }}>
                            M.ADAM ADAM
                            </Text>
                        <Text style={{
                            marginTop:25,
                            marginRight:45,
                            fontFamily:FONT.regular,
                            fontSize: SIZES.medium,
                        }}>
                            {t('num')}
                            </Text>
                            <Text style={{
                            marginTop:15,
                            marginRight:45,
                            fontFamily:FONT.regular,
                            fontSize: SIZES.medium,
                        }}>
                            Exp
                            </Text>
                       
                        </View>

                        <View style={{
                            position:'absolute',
                            paddingHorizontal:110,
                            paddingVertical:0,
                            flexDirection:'column',
                            alignContent:'space-between',
                            alignItems:'flex-start'
                            
                        }}>
                           
                            <SvgXml
                        style={{
                            marginHorizontal:135,
                        }}
                        xml={SVG.mastercard}
                        width={50}
                        height={50} 
                        />
                            <Text style={{
                            marginTop:5,
                            fontFamily:FONT.thin,
                            fontSize: SIZES.medium,
                        }}>
                            1293942831090384
                            </Text>
                            <Text style={{
                            marginTop:15,
                        }}>
                            00/00
                            </Text>
                        </View>
                        </View>                          
                       </Card>                        
                       </TouchableOpacity>
                       </View>

                </ScrollView>
            </ImageBackground>
      </SafeAreaView>

    );


}
