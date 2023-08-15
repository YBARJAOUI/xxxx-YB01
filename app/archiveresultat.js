import { useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    ImageBackground,
    StyleSheet,
    TouchableOpacity
    
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { Card, Button,Image, Input } from "@rneui/themed";
import { SIZES, COLORS, IMAGES, FONT, SVG } from '../constants';
import { useTranslation } from "react-i18next";
import { Header } from "./layout/header";
import { useNavigation } from '@react-navigation/native';
import { SvgXml } from 'react-native-svg'; 

export default function ArchiveResultat() {
    const router = useNavigation();
    const {t, i18n} = useTranslation();
    const [searchTerm, setSearchTerm] = useState("");

    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.gray2 }}>
            <ImageBackground source={IMAGES.bg} resizeMode="cover" style={{width:'100%', height: '100%'}}>

                <Header headerTitle= {t('Cloud')} />
                <ScrollView showsVerticalScrollIndicator={true}>

                <Button
              title={t('Clode-Storage')}
              loading={false}
              loadingProps={{ size: 'small', color: 'white' }}
              buttonStyle={{
                backgroundColor: 'transparent',
                borderRadius: 38,
                borderWidth:5,
                borderColor:COLORS.tertiary,
                shadowColor: "#000",
                elevation: 6,
              }}
              titleStyle={{ fontFamily: FONT.bold, fontSize: SIZES.small, color:COLORS.tertiary }}
              containerStyle={{
                alignSelf:'flex-end',
                marginHorizontal:30,
                height: 45,
                width: 172,
                marginVertical: 30,
              }}
              onPress={() => {router.navigate('cloudstorage')}}
            /> 
            <View 
            style={{
                flex:1,
                justifyContent: 'center',
                alignContent:"center",
                alignItems:'center',
                fontFamily:FONT.thin,
            }}
            >
            <Text
            style={{
                fontFamily:FONT.thin,
            }}>
                {t('cl1')}
                </Text>
                <Text
                style={{
                    fontFamily:FONT.thin,
                }}>
                    {t('cl2')}
                </Text> 
            </View>
                    <View style={{
                        
                            flexDirection:'column',
                            alignContent:"space-between",
                            alignItems:'center',
                            marginVertical:15,
                    }}>
                        <TouchableOpacity onPress={() => {router.navigate('playvedeo')}}>
                    <Card 
                containerStyle={styles.contsyle}
                       > 
                        <View
                       style={{
                        flexDirection:"row",
                        alignContent:"space-around",
                        alignItems:'center',                       
                       }}
                       >
                       <SvgXml
                        style={{
                            marginHorizontal:15,
                        }}
                        xml={SVG.vedeo}
                        width={85}
                        height={85} 
                        />
                      <View
                       style={styles.viewstyle}
                      >
                        <Text
                        style={{
                            fontFamily:FONT.bold,
                            fontSize:SIZES.medium,
                            lineHeight: 30,
                        }}
                        >
                            00 /00 /0000
                            </Text>
                        <Text
                         style={{
                            fontFamily:FONT.regular,
                            fontSize:SIZES.medium,
                        }}
                        >
                            23:34:42
                            </Text>
                        <View 
                         style={{
                            flex:1,
                            flexDirection:"row",
                            marginHorizontal:60,
                            alignContent:"center",
                            alignItems:'flex-end'
                           }}
                        >
                            <SvgXml                       
                        xml={SVG.petitelecharger}
                        width={26}
                        height={26} 
                        />
                        <SvgXml
                        style={{
                            marginHorizontal:18,
                        }}
                        xml={SVG.play}
                        width={30}
                        height={30} 
                        />
                        </View>
                      </View>
                        </View>                        
                       </Card>
                       </TouchableOpacity> 
                       <Card 
                containerStyle={styles.contsyle}
                       > 
                        <View
                       style={{
                        flexDirection:"row",
                        alignContent:"space-around",
                        alignItems:'center',                       
                       }}
                       >
                       <SvgXml
                        style={{
                            marginHorizontal:15,
                        }}
                        xml={SVG.vedeo}
                        width={85}
                        height={85} 
                        />
                      <View
                       style={styles.viewstyle}
                      >
                        <Text
                        style={{
                            fontFamily:FONT.bold,
                            fontSize:SIZES.medium,
                            lineHeight: 30,
                        }}
                        >
                            00 /00 /0000
                            </Text>
                        <Text
                         style={{
                            fontFamily:FONT.regular,
                            fontSize:SIZES.medium,
                        }}
                        >
                            23:34:42
                            </Text>
                        <View 
                         style={{
                            flex:1,
                            flexDirection:"row",
                            marginHorizontal:60,
                            alignContent:"center",
                            alignItems:'flex-end'
                           }}
                        >
                            <SvgXml                      
                        xml={SVG.petitelecharger}
                        width={26}
                        height={26} 
                        />
                        <SvgXml
                        style={{
                            marginHorizontal:18,
                        }}
                        xml={SVG.play}
                        width={30}
                        height={30} 
                        />
                        </View>
                      </View>
                        </View>
                       </Card>
                       <Card 
                containerStyle={styles.contsyle}
                       > 
                        <View
                       style={{
                        flexDirection:"row",
                        alignContent:"space-around",
                        alignItems:'center',                        
                       }}
                       >
                       <SvgXml
                        style={{
                            marginHorizontal:15,
                        }}
                        xml={SVG.vedeo}
                        width={85}
                        height={85} 
                        />
                      <View
                       style={styles.viewstyle}
                      >
                        <Text
                        style={{
                            fontFamily:FONT.bold,
                            fontSize:SIZES.medium,
                            lineHeight: 30,
                        }}
                        >
                            00 /00 /0000
                            </Text>
                        <Text
                         style={{
                            fontFamily:FONT.regular,
                            fontSize:SIZES.medium,
                        }}
                        >
                            23:34:42
                            </Text>
                        <View 
                         style={{
                            flex:1,
                            flexDirection:"row",
                            marginHorizontal:60,
                            alignContent:"center",
                            alignItems:'flex-end'
                           }}
                        >
                            <SvgXml                       
                        xml={SVG.petitelecharger}
                        width={26}
                        height={26} 
                        />
                        <SvgXml
                        style={{
                            marginHorizontal:18,
                        }}
                        xml={SVG.play}
                        width={30}
                        height={30} 
                        />
                        </View>
                      </View>
                        </View>                            
                       </Card>
                       <Card 
                containerStyle={styles.contsyle}
                       > 
                        <View
                       style={{
                        flexDirection:"row",
                        alignContent:"space-around",
                        alignItems:'center',                        
                       }}
                       >
                       <SvgXml
                        style={{
                            marginHorizontal:15,
                        }}
                        xml={SVG.vedeo}
                        width={85}
                        height={85} 
                        />
                      <View
                      style={styles.viewstyle}
                      >
                        <Text
                        style={{
                            fontFamily:FONT.bold,
                            fontSize:SIZES.medium,
                            lineHeight: 30,
                        }}
                        >
                            00 /00 /0000
                            </Text>
                        <Text
                         style={{
                            fontFamily:FONT.regular,
                            fontSize:SIZES.medium,
                        }}
                        >
                            23:34:42
                            </Text>
                        <View 
                         style={{
                            flex:1,
                            flexDirection:"row",
                            marginHorizontal:60,
                            alignContent:"center",
                            alignItems:'flex-end'
                           }}
                        >
                            <SvgXml                    
                        xml={SVG.petitelecharger}
                        width={26}
                        height={26} 
                        />
                        <SvgXml
                        style={{
                            marginHorizontal:18,
                        }}
                        xml={SVG.play}
                        width={30}
                        height={30} 
                        />
                            </View>
                         </View>
                        </View>                            
                       </Card>
                       <Card 
                containerStyle={styles.contsyle}
                       > 
                        <View
                       style={{
                        flexDirection:"row",
                        alignContent:"space-around",
                        alignItems:'center',                       
                       }}
                       >
                       <SvgXml
                        style={{
                            marginHorizontal:15,
                        }}
                        xml={SVG.vedeo}
                        width={85}
                        height={85} 
                        />
                      <View
                      style={styles.viewstyle}
                      >
                        <Text
                        style={{
                            fontFamily:FONT.bold,
                            fontSize:SIZES.medium,
                            lineHeight: 30,
                        }}
                        >
                            00 /00 /0000
                            </Text>
                        <Text
                         style={{
                            fontFamily:FONT.regular,
                            fontSize:SIZES.medium,
                        }}
                        >
                            23:34:42
                            </Text>
                        <View 
                         style={{
                            flex:1,
                            flexDirection:"row",
                            marginHorizontal:60,
                            alignContent:"center",
                            alignItems:'flex-end'
                           }}
                        >
                            <SvgXml                       
                        xml={SVG.petitelecharger}
                        width={26}
                        height={26} 
                        />
                        <SvgXml
                        style={{
                            marginHorizontal:18,
                        }}
                        xml={SVG.play}
                        width={30}
                        height={30} 
                        />
                        </View>
                            </View>
                                </View>                            
                       </Card>
                        </View>
                </ScrollView>
            </ImageBackground>
      </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    contsyle :{
        borderRadius:38,
        backgroundColor: COLORS.gray3,
        borderWidth:0,
        shadowColor: "#000",
        width:312,
        height:117,
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,
        elevation: 20,
    },
    viewstyle: {
        flexDirection:"column",
                        alignContent:"space-around",
                        alignItems:'flex-start',
                        marginHorizontal:20,
    }
})
