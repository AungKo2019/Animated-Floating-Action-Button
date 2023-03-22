import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

const FloatingButton = () => {

  const [icon_cloud]=useState(new Animated.Value(40));
  const [icon_print]=useState(new Animated.Value(40));
  const [icon_share]=useState(new Animated.Value(40));

  const [pop,setPop] = useState(false);

  const popIn=()=>{
    setPop(true);
    Animated.timing(icon_cloud,
      {
        toValue:130,
        duration:500,
        useNativeDriver:false,
      }
      ).start();
    Animated.timing(icon_print,
      {
        toValue:110,
        duration:500,
        useNativeDriver:false,
      }
      ).start();
    Animated.timing(icon_share,
      {
        toValue:130,
        duration:500,
        useNativeDriver:false,
      }
      ).start();
  }

  const popOut=()=>{
    setPop(false);
    Animated.timing(icon_cloud,
      {
        toValue:40,
        duration:500,
        useNativeDriver:false,
      }
      ).start();
    Animated.timing(icon_print,
      {
        toValue:40,
        duration:500,
        useNativeDriver:false,
      }
      ).start();
    Animated.timing(icon_share,
      {
        toValue:40,
        duration:500,
        useNativeDriver:false,
      }
      ).start();
  }

  return (
    <View style={{flex:1}}>
      <Animated.View style={[styles.circle,{bottom:icon_cloud}]}>
        <TouchableOpacity>
          <Icon name='cloud-upload' size={25} color='#FFFF'/>
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={[styles.circle,{bottom:icon_print,right:icon_print}]}>
        <TouchableOpacity>
          <Icon name='print' size={25} color='#FFFF'/>
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={[styles.circle,{right:icon_share}]}>
        <TouchableOpacity>
          <Icon name='share-alt' size={25} color='#FFFF'/>
        </TouchableOpacity>
      </Animated.View>
      <TouchableOpacity style={styles.circle} onPress={()=>{pop===false ? popIn() : popOut()}}>
        <Icon name='plus' size={25} color='#FFFF'/>
      </TouchableOpacity>
    </View>
  )
}

export default FloatingButton

const styles = StyleSheet.create({
    circle:{
        backgroundColor:'#f52d56',
        width:60,
        height:60,
        position:'absolute',
        bottom:40,
        right:40,
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center'
        
    }
})