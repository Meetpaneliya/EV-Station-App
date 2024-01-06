import { View, Text } from 'react-native'
import React, { useContext, useState } from 'react'
import { Marker } from 'react-native-maps'
import { SelectMarkercontext } from '../../Context/SelectMarkerContex'

export default function Markers({index,place}) {

  const {selectedMarker, setSelectedMarker} = useContext(SelectMarkercontext)
  return place && (
    <Marker
          coordinate={{
            latitude: place.location?.latitude,
            longitude: place.location?.longitude
          }}

          onPress={()=>{
            setSelectedMarker(index)
          }}
        />
  )
}