import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'

export default function FavoriteScreen() {
  return (
    <View>
      <View style={{height:'100%',
    display:'flex', alignItems:'center', justifyContent:'center'}}>
        <ActivityIndicator
        size={'large'}
        color={Colors.PRIMARY} />
        <Text style={{fontFamily:'outfit', marginTop:5}}>Loading...</Text>
      </View>
    </View>

  )
}