import React from 'react';
import {View, StyleSheet,Text  } from 'react-native';


const Search = ({}) => {

    return(
        <View style={styles.container}>
           <Text style={styles.text}>Search for anything </Text>

                <Text>No results found for ”ipsum”</Text>
        </View>

    );
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

 texto:{
     flex:1,
     alignItems:'center',
     justifyContent:'center' 
 }

})

export default Search;