import React, {useState, useEffect} from 'react';
import {View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    AsyncStorage,
     } from 'react-native'

    import api from '../services/api';
    import logo from '../assets/logo.png'
// import { Container } from './styles';

export default function Login({navigation}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [techs, setTechs] = useState('')
   

    useEffect(()=>{
        AsyncStorage.getItem('user').then( user => {
            if(user){
                navigation.navigate('List')
            }
        })
    }, [])

    async function handleSubmit(){
            const response = await api.post('/sessions',{email, password})
            const {_id} = response.data
            await AsyncStorage.setItem('user', _id)
            await AsyncStorage.setItem('techs', techs)
            navigation.navigate('List')
    }

    function emailOnChangeText(text){
            setEmail(text)
    }

    function passOnChangeText(text){
        setPassword(text)
    }
    function techsOnChangeText(text){
        setTechs(text)
    }
  return (
    //<ScrollView>
       
     <View style={styles.container}>
       <Image source={logo}/>
       <View style={styles.form}>
       <Text style={styles.label}>SEU E-MAIL *</Text> 
       <TextInput 
        style={styles.input}
        placeholder="Seu e-mail"
        placeholderTextColor="#999"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        value={email} 
        onChangeText={emailOnChangeText} />

<Text style={styles.label}>PASSWORD *</Text> 
       <TextInput 
        style={styles.input}
        secureTextEntry={true}
        placeholder="Senha de Acesso"
        placeholderTextColor="#999"
        autoCapitalize="none"
        autoCorrect={false}
        value={password} 
        onChangeText={passOnChangeText}>
            
        </TextInput>
        

<Text style={styles.label}>TECNOLOGIAS *</Text> 

       <TextInput 
        style={styles.input}
        placeholder="Tecnologias de interesse"
        placeholderTextColor="#999"
        autoCapitalize="words"
        autoCorrect={false}
        value={techs} 
        onChangeText={techsOnChangeText} />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Encontrar Spots</Text>
        </TouchableOpacity>
       </View>
    </View>
 //  </ScrollView>
    
  
  );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
   
        
    },
    form:{
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30,
    },
    
     label: {
         fontWeight: 'bold',
         color: '#444',
         marginBottom: 8,
     },
     input:{
        borderWidth:1,
        borderColor: '#ddd',
        color:'#444',
        fontSize: 16,
        paddingHorizontal: 20,
        height:44,
        marginBottom: 20,
        borderRadius:2,
     },

     button:{
         height:42,
         backgroundColor:'#f05a5b',
         justifyContent: 'center',
         alignItems:'center',
        borderRadius:2,
        
        },
     buttonText:{
         color: '#fff',
         fontWeight:'bold',
         fontSize: 16,
     }
})



