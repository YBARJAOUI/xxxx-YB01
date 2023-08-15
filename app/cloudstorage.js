import React, { useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    View,
    ImageBackground,
    TextInput,
    StyleSheet
    
} from "react-native";
import { Button } from "@rneui/themed";
import { SIZES, COLORS, IMAGES, FONT } from '../constants';
import { useTranslation } from "react-i18next";
import { Header } from "./layout/header";
import { useNavigation } from '@react-navigation/native';
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import moment from "moment/moment";



 

export default function CloudStorage() {

  
  

    const [date, setDate] = useState(new Date());
    const router = useNavigation();
    const {t, i18n} = useTranslation();
    const [searchTerm, setSearchTerm] = useState("");


    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate;
      setDate(currentDate);
      setShow(false);
      console.log(currentDate);
      
      
    };

    const showMode = (currentMode) => {
      DateTimePickerAndroid.open({
        value: date,
        onChange,
        mode: currentMode,
        is24Hour: true,
      }
      
      );
    };

    const showDatepicker = () => {
      
      showMode('date');
      
    };
  
    const showTimepicker = () => {
      showMode('time');
    };
  

    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.gray2 }}>
            <ImageBackground source={IMAGES.bg} resizeMode="cover" style={{width:'100%', height: '100%'}}>

                <Header headerTitle= {t('Clode-Storage')} />
                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={{
                            flex:1,
                            flexDirection:'column',
                            alignContent:"space-between",
                            alignItems:'center',
                            marginVertical:40,
                    }}>
                       <TextInput 
                        onPressIn={showDatepicker}
                        value={moment(date).format("DD/MM/YYYY")}

                      placeholder={t('ID')}
                      placeholderTextColor={'black'}
                      style={ styles.contstyle}
                      
                       />
                        <TextInput
                        onPressIn={showDatepicker}
                        value={moment(date).format("DD/MM/YYYY")}
                      
                       placeholder={t('date-demande')}
                        placeholderTextColor={'black'}
                       style={ styles.contstyle }

                       />   
  



                        <TextInput 
                        onPressIn={showTimepicker}
                        value={moment(date).format("hh:mm")}
                       placeholder={t('heure-debut')}
                        placeholderTextColor={'black'}
                        style={ styles.contstyle }

                       />


                    <TextInput 
                      onPressIn={showTimepicker}
                      value={moment(date).format("hh:mm")}
                    
                       placeholder={t('heure-fin')}
                        placeholderTextColor={'black'}
                        style={ styles.contstyle }

                       />
                       

            <Button
              title={t('valider')}
              loading={false}
              loadingProps={{ size: 'small', color: 'white' }}
              buttonStyle={{
                backgroundColor: 'transparent',
                borderRadius: 38,
                borderWidth:6,
                borderColor:COLORS.tertiary,
                shadowColor: "#000",
                elevation: 6,
              }}
              titleStyle={{ fontFamily: FONT.bold, fontSize: SIZES.large, color:COLORS.tertiary }}
              containerStyle={{
                height: 73,
                width: 324,
                marginVertical: 30,
              }}
              onPress={() => console.log("hello")}
            />           
                 
                        </View>
  
                </ScrollView>
            </ImageBackground>
      </SafeAreaView>

    );


}



const styles = StyleSheet.create({
  contstyle : {
                       paddingLeft:52,
                        width:315,
                        height:59,
                        backgroundColor: '#FFF',
                        borderRadius: 38,
                        fontSize:SIZES.large,
                        fontFamily:FONT.bold,
                        borderColor:COLORS.tertiary,
                        shadowColor: "#000",
                        elevation: 5,
                        marginVertical: 15,
  }
})