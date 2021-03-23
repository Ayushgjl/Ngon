import React from 'react';
import {View,Text,Image, StyleSheet, TouchableOpacity} from 'react-native';

const Success =({}) => {
    return(
     <View style={styles.container}>

     <View style={styles.circle}>
         <Image source={require('./images/success.png')} style={styles.success}></Image>
     </View>
     
     <Text style={styles.texto}>Success</Text>
     <Text style={styles.text}>You will be attending Chartity raising for orphans program on 2021-03-05</Text>

        <View style={styles.button}>
        <TouchableOpacity>
            <Text style = {styles.buttontext}>
               Done
            </Text>
         </TouchableOpacity>
        </View>

     </View>
        
    )
};

const styles = StyleSheet.create ({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    backgroundColor: 'white',
},
circle: {
    width: 130,
    height: 130,
    borderColor: "green",
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderRadius: 100,
},
success:{
   alignItems:'center',
    width:'40%',
    height:'30%',
    marginTop:45,
    marginLeft:37.5,   
},
button:{
    margin:15,
    alignItems:'center',
    justifyContent:'center',
},
buttontext:{
    textAlign:'center',
    borderWidth:1.5,
    color:'#A62CCC',
    padding: 10,
    height:40,
    width:150,
    borderRadius:10,
    borderColor: '#A62CCC',
    backgroundColor: 'white'
},
text: {
    margin: 15,
    fontSize: 19,
    fontStyle: 'normal',
    textAlign: 'center',
    
    
},
texto:{
    margin: 15,
    fontSize: 17,
    fontStyle: 'normal',
    textAlign: 'center',
    color:'green'
}
 



});

export default Success;