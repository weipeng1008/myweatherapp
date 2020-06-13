import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, SafeAreaView, Image} from 'react-native';

export default function Home({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      
    <ImageBackground source={require('../imgs/weatherbg.jpg')} 
    style={{width:'100%',height:'100%'}}>

    <View style={{alignItems:'center', justifyContent:'center'}}>
      <Image source={require('../assets/wlogo.png')} style={{width:90, height:90, marginTop:150}}></Image>
      <Text style={styles.textstyle}>//  I t ' s    a l l    a b o u t  -   W E A T H E R  //</Text>
    </View>

    <TouchableOpacity onPress={() => navigation.push('Weather')}
     style={{alignItems:'center', justifyContent:'center'}}>
      <View><Text style={styles.textstyle2}>Let's Check</Text></View>
    </TouchableOpacity>

    </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textstyle: {
    color:'black',
    marginTop:50,
    fontSize:14,
    textAlign:'center',
    fontFamily: 'CourierNewPS-ItalicMT'
  },

  textstyle2: {
    marginTop: 40,
    backgroundColor:'black',
    width:'100%',
    alignItems:'center',
    color:'white',
    padding:10,
  },

});
