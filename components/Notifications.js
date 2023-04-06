import { View, Text } from 'react-native'
import React from 'react'

export default function Notifications() {
  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center', backgroundColor:'#fff'}}>
      <Text style={{fontSize:20, color:'#E0115F',}}> You Have 0 Notifications</Text>
    </View>
  )
}