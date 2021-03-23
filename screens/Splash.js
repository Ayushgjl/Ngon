import React, {useEffect} from 'react';
import {View, StyleSheet,Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


const Splash =({
    navigation,
}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Onboarding')
        }, 3000);
      
    }, [])
    
    return(
        <LinearGradient colors={['#AE3DD1', '#4F1595']} style={styles.body}>
        <View>
            <Image source={require('./images/logo.png')} style={styles.logo}></Image>
        </View>
        </LinearGradient>
    )      
    };
    
    const styles = StyleSheet.create({
        body:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#4F1595'
        },
        logo: {
          marginTop: 0,
          paddingLeft: 110,
          paddingRight: 110,
      }     
    })
export default Splash;