import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { useNavigation, useTheme, useFocusEffect } from '@react-navigation/native';
import { ListItem, Icon } from '@rneui/themed';
import {useTranslation} from 'react-i18next';
import i18n from '../../translations/i18n';
import { FONT, COLORS, SIZES, IMAGES } from '../../constants';
import { storeData } from "../../utils/Storage";




const DrawerMenu = (props) => {

    const {t, i18n} = useTranslation()
    const router = useNavigation();
    const [lang, setLang] = useState(`${i18n.language}`);
    useEffect(() => {

    }, [])

    useFocusEffect(
        React.useCallback(() => {
            
          return () => {};
        }, [])
    );


    return (
    
            <>
                <View
                
                    style={{
                        flexDirection:'row',
                        alignItems:'center',
                        paddingHorizontal:25,
                        paddingVertical:30,
                        backgroundColor:COLORS.info
                        
                    }}
                >  
                <View style={{
                    flex:1,
                    flexDirection:"row",
                    justifyContent:'space-around',
                    alignItems:'center',
                }}>

                <Image 
                source={IMAGES.avatar}
                style={{
                        width:45,
                        height:45,
                    }}
                />

                
                    <View>
                        <Text style={{fontFamily: FONT.regular, fontSize: SIZES.thin, color:COLORS.white}}>USER user</Text>
                        <Text style={{fontFamily: FONT.bold,color:COLORS.white, fontSize: SIZES.medium}}>email@gmail.com</Text>
                    </View>
                    </View>
                </View>
                <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={{paddingHorizontal:15,paddingVertical:20,flex:1, backgroundColor:COLORS.white}}>
                   
                   
                <TouchableOpacity onPress={() => {router.navigate('home')}}>
                    <ListItem containerStyle={styles.listItem}>
                        <Icon name="home" type="material-community" color="grey" />
                        <ListItem.Content>
                        <ListItem.Title>{t('Acceuil')}</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                   </TouchableOpacity>
            
                        <ListItem containerStyle={styles.listItem}>
                        <Icon name="account-star" type="material-community" color="grey" />
                        <ListItem.Content>
                        <ListItem.Title>{t('Mes-Abonnements')}</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>

                    <TouchableOpacity onPress={() => {router.navigate('vehicules')}}>
                    <ListItem containerStyle={styles.listItem}>
                        <Icon name="car" type="material-community" color="grey" />
                        <ListItem.Content>
                        <ListItem.Title>{t('Mes-Vehicules')}</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {router.navigate('factures')}}>
                    <ListItem containerStyle={styles.listItem}>
                        <Icon name="receipt" type="material-community" color="grey" />
                        <ListItem.Content>
                        <ListItem.Title>{t('Mes-Factures')}</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => {router.navigate('archive')}}>
                    <ListItem containerStyle={styles.listItem}>
                        <Icon name="cloud" type="material-community" color="grey" />
                        <ListItem.Content>
                        <ListItem.Title>{t('Cloud')}</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {router.navigate('profil')}}>
                    <ListItem containerStyle={styles.listItem}>
                        <Icon name="account" type="material-community" color="grey" />
                        <ListItem.Content>
                        <ListItem.Title>{t('Profil')}</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                    </TouchableOpacity>

                    <ListItem containerStyle={styles.listItem}>
                        <Icon name="cog" type="material-community" color="grey" />
                        <ListItem.Content>
                        <ListItem.Title>{t('Perference')}</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>

                    <ListItem containerStyle={styles.listItem}>
                        <Icon name="comment-alert" type="material-community" color="grey" />
                        <ListItem.Content>
                        <ListItem.Title>{t('Reclamation')}</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>

                    <ListItem containerStyle={styles.listItem}>
                        <Icon name="book" type="material-community" color="grey" />
                        <ListItem.Content>
                        <ListItem.Title>{t('propos')}</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>

                    <ListItem containerStyle={styles.listItem}>
                        <Icon name="exclamation" type="material-community" color="grey" />
                        <ListItem.Content>
                        <ListItem.Title>C.G.U</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                    
                    <TouchableOpacity onPress={() => {
                            storeData('langue', lang =='fr' ? 'en' : 'fr');
                            i18n.changeLanguage(lang =='fr' ? 'en' : 'fr');
                            setLang(lang == 'fr' ? 'en' : 'fr');

                        }}>
                    <ListItem containerStyle={styles.listItem}>
                        <Icon name="earth" type="material-community" color="grey" />
                        <ListItem.Content>
                        <ListItem.Title>{t('ChangerLangue')} {lang}</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                    </TouchableOpacity>

                    {/* <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Prepost');
                        }}
                        style={[styles.navLink, {borderBottomColor:COLORS.grey, borderBottomWidth:1}]}
                    >
                        <SvgXml style={{marginRight:10}} xml={ICONS.upload} width={20} height={20} stroke={colors.title}/>
                        <Text style={[styles.navText,{color:colors.title}]}>{t("publier")}</Text>
                        <SvgXml style={{}} xml={ICONS.bracketright} width={16} height={16} stroke={colors.title}/>
                    </TouchableOpacity> */}

                
                <View style={{
                    marginLeft:-15,
                    marginRight:-34,
                    paddingBottom:30,
                    paddingHorizontal:15,
                    paddingTop:20,
                    backgroundColor:COLORS.gray3,
                    
                    }}>
                    <Text style={{fontFamily: FONT.bold, fontSize: SIZES.large}}>Envycar - Mobile</Text>
                    <Text style={{fontFamily: FONT.regular, fontSize: SIZES.small}}>App Version 1.0.1</Text>
                </View>
                </View>
                </ScrollView>
            </>
    
    );
};

const styles = StyleSheet.create({
    listItem: {
        backgroundColor: COLORS.transparent
    },
    navLink:{
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:10,
    },
    navText:{
        ...FONT.regular,
        color:COLORS.black,
        flex:1,
        marginHorizontal:20
    }
})


export default DrawerMenu;