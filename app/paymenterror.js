import { useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    ImageBackground,
    
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { Card, Button,Image } from "@rneui/themed";
import { SIZES, COLORS, IMAGES, FONT, SVG } from '../constants';
import { useTranslation } from "react-i18next";
import { Header } from "./layout/header";
import { useNavigation } from '@react-navigation/native';


 

export default function PaymentError() {
    const router = useNavigation();
    const {t, i18n} = useTranslation();
    const [searchTerm, setSearchTerm] = useState("");

    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.gray2 }}>
            <ImageBackground source={IMAGES.bg} resizeMode="cover" style={{width:'100%', height: '100%'}}>

                <Header headerTitle= {t('Erreur')} />
                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={{
                        
                            flexDirection:'column',
                            alignContent:"space-between",
                            alignItems:'center',
                            marginVertical:20,
                    }}>
                        <Image 
                        source={IMAGES.paymentno}
                        style={{
                            height:163,
                            width:163
                        }}
                        />
                <Card 
                containerStyle={{
                           
                           borderRadius:38,
                           backgroundColor: COLORS.gray3,
                           borderWidth:0,
                           shadowColor: "#000",
                           width:334,
                           height:298,
                           shadowOffset: {
                               width: 0,
                               height: 12,
                           },
                           shadowOpacity: 0.51,
                           shadowRadius: 13.16,

                           elevation: 20,}}
                           
                       >
                        <Text style={{
                            fontFamily:FONT.bold,
                            fontSize:SIZES.large,
                            textTransform:"uppercase",
                            textAlign:'center',
                        }}>
                            {t('Facture')} #3281
                            </Text>
                        <View style={{
                           
                            flexDirection:'row',
                            alignContent:'space-between',
                            paddingHorizontal:10,
                        }}>

                        <View style={{
                            
                            flexDirection:'column',
                            alignContent:'space-between',
                            alignItems:'flex-start',
                          
                        }}>
                        <Text style={{
                            marginTop:35,
                            fontFamily:FONT.bold,
                            fontSize: SIZES.medium,
                        }}>
                            {t('Date-edition')}
                            </Text>
                        <Text style={{
                            marginTop:25,
                            marginRight:45,
                            fontFamily:FONT.bold,
                            fontSize: SIZES.medium,
                        }}>
                            {t('Periode-Facturé')}
                            </Text>
                            <Text style={{
                            marginTop:25,
                            fontFamily:FONT.bold,
                            fontSize: SIZES.medium,
                        }}>
                            {t('ID')}
                            </Text>
                            <Text style={{
                            marginTop:25,
                            fontSize: SIZES.medium,
                            fontFamily:FONT.bold,
                        }}>
                            {t('Montant')}
                            </Text>
                        </View>

                        <View style={{
                            position:'absolute',
                            paddingHorizontal:170,
                            paddingVertical:1,
                            flexDirection:'column',
                            alignContent:'space-between',
                            alignItems:'flex-start',
                            marginTop:35,
                            
                        }}>
                            <Text
                            style={{
                                fontSize: SIZES.medium,
                            }}>
                                00/00/0000
                                </Text>
                            <Text style={{
                            marginTop:25,
                            fontSize: SIZES.medium,
                        }}>
                            avril 2023
                            </Text>
                            <Text style={{
                            marginTop:25,
                            fontSize: SIZES.medium,
                        }}>
                            K23FTW4Z67
                            </Text>
                            <Text style={{
                            marginTop:25,
                            fontFamily:FONT.bold,
                            fontSize: SIZES.medium,
                        }}>
                            20,00 €
                            </Text>
                        </View>
                        </View>
                       </Card>  
                       
                                
            <Button
              title={t('Ressayer')}
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
                marginVertical: 20,
              }}
              onPress={() => console.log('heho')}
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
                marginVertical: -10,
              }}
              onPress={() => {router.navigate('payments')}}
            />           
                 
                        </View>
                           
                       

                </ScrollView>
            </ImageBackground>
      </SafeAreaView>

    );
}
// const styles = StyleSheet.create({

//     textstyle: {
//         marginTop:25,
//         fontFamily:FONT.bold,
//         fontSize: SIZES.medium,
//     }
// })
