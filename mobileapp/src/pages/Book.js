import React, {useState} from 'react';
import { Text,
      SafeAreaView,
      Platform,
      StyleSheet,
      StatusBar,
      AsyncStorage,
      TextInput,
      TouchableOpacity,
      Alert } from 'react-native';
import api from '../services/api'

// import { Container } from './styles';

export default function Book({navigation, route}) {
  const [date, setDate] = useState('')
  const id = route.params.id


  async function handleSubmit(){
    const user_id = await AsyncStorage.getItem('user')
    await api.post(`/spots/${id}/bookings`, {
      date
    },{
      headers:{user_id}
    }) 
    Alert.alert('Solicitação de Reserva enviada.')
    navigation.navigate('List')
  }


  function handleCancel(){
    navigation.navigate('List')
  }
  return ( 
    <SafeAreaView style={styles.container }>
    <Text style={styles.label}>DATA DE INTERESSE *</Text> 
       <TextInput 
        style={styles.input}
        placeholder="Qual a data da reserva?"
        placeholderTextColor="#999"
        keyboardType="email-address"
        autoCapitalize="words"
        autoCorrect={false}
        value={date} 
        onChangeText={setDate} />

         <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Solicitar Reserva</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={handleCancel}>
            <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
    container:{
      margin:30,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      
    } ,
     label: {
         fontWeight: 'bold',
         color: '#444',
         marginBottom: 8,
         marginTop: 30,
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
     cancelButton:{
       marginTop: 10,
         backgroundColor:'#cecece',
        },
     buttonText:{
         color: '#fff',
         fontWeight:'bold',
         fontSize: 16,
     }
    })
