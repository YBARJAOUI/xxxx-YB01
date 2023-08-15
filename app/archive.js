import { useState } from "react";
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


 

export default function Archive() {
  const [datedebut, setDateD] = useState(new Date());
  const [datefin, setDatef] = useState(new Date(22));
  
    const router = useNavigation();
    const {t, i18n} = useTranslation();
    const [searchTerm, setSearchTerm] = useState("");

    const onChangef = (event, selectedDatef) => {
      const currentDatef = selectedDatef;
      console.log(currentDatef)
      setDatef(currentDatef);
      setShow(false);
    };

    const showModef = () => {
      DateTimePickerAndroid.open({
        value: datefin,
        onChangef,
        mode: 'date',
        is24Hour: true,
      }
      
      );
    };




    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate;
      setDateD(currentDate);
      setShow(false);
    };

    const showMode = () => {
      DateTimePickerAndroid.open({
        value: datedebut,
        onChange,
        mode: 'date',
        is24Hour: true,
      }
      
      );
    };

    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.gray2 }}>
            <ImageBackground source={IMAGES.bg} resizeMode="cover" style={{width:'100%', height: '100%'}}>

                <Header headerTitle= {t('Cloud')} />
                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={{
                        
                            flexDirection:'column',
                            alignContent:"space-between",
                            alignItems:'center',
                            marginVertical:120,
                    }}>
                        
                       <TextInput 
                        
                         onPressIn={showMode}
                         value={ moment(datedebut).format("DD/MM/YYYY")}

                      placeholder={t('Date-Debut')}
                      placeholderTextColor={'black'}
                        
                       style={styles.contstyle}

                       />

                    <TextInput 
                       
                       onPressIn={showModef}
                         value={moment(datefin).format("DD/MM/YYYY")}
                         placeholder={t('Date-Fin')}
                        placeholderTextColor={'black'}
                        marginVertical={37}
                        style={styles.contstyle}
                       />
                       

            <Button
              title={t('chercher')}
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
                marginVertical: 40,
              }}
              onPress={() => {router.navigate('archiveresultat')}}
            />           
                 
                        </View>
                           
                       

                </ScrollView>
            </ImageBackground>
      </SafeAreaView>

    );


}

const styles = StyleSheet.create({
  contstyle :{
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
  }

})
