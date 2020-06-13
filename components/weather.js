import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, SafeAreaView, ActivityIndicator, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Weather() {
  const[isLoading, setIsLoading] =useState(false);
  const[weather, setWeather] =useState(null);
  const[city, setCity] =useState('');

  const retrieveWeather = () => {
      setIsLoading(true)
      fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=9fd7a449d055dba26a982a3220f32aa2')
      .then(response=>response.json())
      .then(responseJson => {
          setIsLoading(false)
          console.log(responseJson);
          setWeather(responseJson);
      })
      .catch(error=> {
          setIsLoading(false);
          console.log(error);
      })
  }

let mainView;
  if (weather){
    if (isLoading){
        mainView = (<View><ActivityIndicator></ActivityIndicator></View>)
    }
    else {

    mainView=(<View style={{alignItems:'center'}}>
        <Image source={'https://openweathermap.org/img/wn/'+weather["weather"][0]["icon"]+"@2x.png"} style={{width:100, height:100, marginTop:30}} />
        <Text style={styles.contentText}>{weather.name}</Text>
        <Text style={styles.contentText}>{weather["weather"][0]["main"]}</Text>
        <Text style={styles.contentText}>"{weather["weather"][0]["description"]}"</Text>
        <Text style={styles.contentText}>{(weather["main"]["temp"]-273.15).toFixed(2)} ℃</Text>
        <Text style={styles.contentText}>Pressure : {weather["main"]["pressure"]}</Text>
        <Text style={styles.contentText}>Humidity : {weather["main"]["humidity"]}</Text>
    </View>)
 }
}
  

  return (
    <SafeAreaView style={styles.container}>
    <ImageBackground source={require('../imgs/city.jpg')} style={{width:'100%',height:'100%'}}>
    <View style={styles.inputrow}>
    <TextInput placeholder="Enter city name" style={{flex:2, color:'white', paddingLeft:50, paddingTop:20, fontSize:18}} onChangeText={(text) => setCity(text)} value={city}></TextInput>
    <TouchableOpacity onPress={retrieveWeather}>
        <View>
        <Text style={styles.buttonstyle}>Curent Weather</Text>
        </View>
    </TouchableOpacity>
    </View>

    {mainView}

    </ImageBackground>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  buttonstyle: {
    color: 'black',
    backgroundColor: 'white',
    padding: 20,
    marginTop: 20,
    marginRight: 20,
    flex: 1
  },

  inputrow: {
    flexDirection:'row',
    paddiing:'50'
  },

  contentText: {
    color:'white', 
    fontSize:15,
    textAlign:'center',
    padding: 10,
  }
});
