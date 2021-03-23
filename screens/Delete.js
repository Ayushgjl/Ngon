import React from 'react';
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native';

const Delete = ({}) => {
    return(
        <View style={styles.container}>
        <Text style={styles.text}>Are you sure you want to delete?</Text>

        <View style={styles.button}>
       <TouchableOpacity>
           <Text style = {styles.buttontext}>
              Yes,delete
           </Text>
        </TouchableOpacity>

        <TouchableOpacity>
           <Text style = {styles.buttontext}>
              No,keep
           </Text>
        </TouchableOpacity>
        </View>
        </View>
    )
};


const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
        flex:1
    },
    text:{
        marginTop: 150,
        marginLeft:49,
        fontSize: 19,
        left:0,
        color:'black',
    },
    button:{
        flexDirection: 'row'
        
    }
})

export default Delete;