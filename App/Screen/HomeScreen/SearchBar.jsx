import { View, Text} from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Colors from '../../Utils/Colors';
import { Ionicons } from '@expo/vector-icons';

export default function SearchBar({searchedLocation}) {
  return (
    <View style={{
        display:'flex',
        flexDirection:'row',
        marginTop:'15',
        paddingHorizontal:5,
        backgroundColor:Colors.WHITE,
        borderRadius:6 
    }}>
        <Ionicons name="location-sharp" size={24} color={Colors.GRAY} style={{paddingTop:10}}/>
      <GooglePlacesAutocomplete
      placeholder='Search EV Charging Station'
      fetchDetails={true}
      onPress={(data, details = null) => {
        console.log(data, details);
        searchedLocation(details?.geometry?.location)
      }}
      query={{
        key: 'IhAbPAMX0AvGX1rQQZhcj8wa0SzvCW4a"',
        language: 'en',
      }}
    />
    </View>
  )
}