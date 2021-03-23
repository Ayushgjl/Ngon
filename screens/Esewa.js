import React, {useState} from 'react';
import { View,Text,StyleSheet,TextInput,TouchableOpacity,Button } from 'react-native';




const Esewa = ({}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return(
     <View style={styles.container}>
        <View style={styles.esewa}>
        <Text style={styles.text}>Welcome,</Text>
        <Text style={styles.texto}>Sign in to continue</Text>

        <Text style={{marginLeft:20, marginTop:25, color:'black', fontSize:15}}>eSewa ID (Mobile/Email)</Text>
        
        <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Mobile/Email"
          placeholderTextColor="gray"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <Text style={{marginLeft:20, marginTop:25, color:'black', fontSize:15}}>Password/MPIN</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="gray"
          secureTextEntry={true}
         
        />
      </View>
      <View>
       <TouchableOpacity style={styles.button}>
           <Text style = {styles.buttontext}>
              Login
           </Text>
        </TouchableOpacity>
       </View>

        </View>

     </View>
         
        )
    }


const styles = StyleSheet.create ({
    container:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'#E5E5E5',
        
    },

    esewa:{
        marginLeft:20,
        marginRight:20,
        borderRadius:10,
        backgroundColor:'white'
    },
    text:{
        fontSize: 45,
        fontStyle:'normal',
        marginLeft:20
    },
    texto:{
        fontStyle:'normal',
        fontSize:22,
        marginLeft:20
    },
    inputView: {
        marginLeft:20,
        marginRight:20,
        marginTop:10,
        backgroundColor:'#E5E5E5',
        height: 50,
        marginBottom: 20,
        borderRadius:5,
        alignItems:'flex-start',
      },
      TextInput: {
        height: 50,
        padding: 10,
        
      },
      button:{
        elevation: 8,
        backgroundColor: "#13BF25",
        borderRadius: 10,
        height:'25%',
        marginLeft:'5%',
        marginRight:'5%',
        marginBottom:'10%'
        
      },
      buttontext:{
          
          alignItems:'center',
          justifyContent:'center'

      }



})

export default Esewa;