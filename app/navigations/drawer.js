import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation, useTheme, useFocusEffect } from '@react-navigation/native';
import { ListItem, Icon } from '@rneui/themed';
import {useTranslation} from 'react-i18next';
import i18n from '../../translations/i18n';
import { FONT, COLORS, SIZES } from '../../constants';


const DrawerMenu = (props) => {

    const {t, i18n} = useTranslation()
    const navigation = useNavigation();

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
                        backgroundColor:COLORS.secondary
                        
                    }}
                >  
                    <View>
                        <Text style={{fontFamily: FONT.regular, fontSize: SIZES.large}}>Salut</Text>
                        <Text style={{fontFamily: FONT.regular,color:COLORS.white, fontSize: SIZES.medium}}>email</Text>
                    </View>
                </View>
                <View style={{paddingHorizontal:15,paddingVertical:20,flex:1, backgroundColor:COLORS.white}}>
                    <ListItem containerStyle={styles.listItem}>
                        <Icon name="inbox" type="material-community" color="grey" />
                        <ListItem.Content>
                        <ListItem.Title>Inbox</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                                        <ListItem containerStyle={styles.listItem}>
                        <Icon name="inbox" type="material-community" color="grey" />
                        <ListItem.Content>
                        <ListItem.Title>Inbox</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>

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

                </View>
                <View style={{paddingBottom:30,paddingHorizontal:15,paddingTop:20, backgroundColor:COLORS.gray3}}>
                    <Text style={{fontFamily: FONT.bold, fontSize: SIZES.large}}>Envycar - Mobile</Text>
                    <Text style={{fontFamily: FONT.regular, fontSize: SIZES.small}}>App Version 1.0.1</Text>
                </View>
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