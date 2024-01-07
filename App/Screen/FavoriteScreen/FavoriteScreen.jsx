import { View, Text, ActivityIndicator,StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'
import PlaceItem from '../HomeScreen/PlaceItem'

export default function FavoriteScreen() {
  return (
    <View>
      <PlaceItem/>
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
