import * as React from 'react';
import { Header as HeaderRNE, HeaderProps, Icon, Text  } from "@rneui/themed";
import { StyleSheet, TouchableOpacity, View, Pressable } from "react-native";
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { FONT, SIZES, COLORS } from "../../constants";
import { StatusBar } from 'expo-status-bar';




export function Header (props) {
    
    const router = useNavigation();

    return (
        <>
            <StatusBar hidden />
            <HeaderRNE
              ViewComponent={LinearGradient} // Don't forget this!
              linearGradientProps={{
                colors: [COLORS.secondary, COLORS.tertiary],
                start: { x: 0, y: 0.5 },
                end: { x: 1, y: 0.5 },
              }}
            containerStyle={styles.headerContainer}
            leftComponent={
                <View style={styles.headerRight}>
                    <TouchableOpacity onPress={() => router.dispatch(DrawerActions.openDrawer) }>
                        <Icon name="menu" color="white" size={34} />
                    </TouchableOpacity>
                </View>
            }
            centerComponent={{ text: props.headerTitle, style: styles.heading ,}}
            
            />



    </>

    )
}

const styles = StyleSheet.create({
    headerContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 0,
      width: '100%',
      paddingVertical: 15,
    },
    heading: {
      color: 'white',
      fontSize: SIZES.large,
      fontFamily: FONT.regular,
      marginTop: 7
    },
    headerRight: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: 5,
    },
    subheaderText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    });