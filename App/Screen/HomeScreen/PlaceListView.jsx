import { View, Text, FlatList,Dimensions } from 'react-native'
import React, {useEffect,useRef} from 'react'
import PlaceItem from './PlaceItem';
import { SelectMarkercontext } from '../../Context/SelectMarkerContex';
import { useContext } from 'react';
import { data } from '../../Utils/Data';
export default function PlaceListView() {

 // console.log("****",data)
  const flatListRef = useRef(null);

  // const {selectedMarker, setSelectedMarker} = useContext(SelectMarkercontext)
  //   useEffect(()=>{
  //     selectedMarker&&scrollToIndex(selectedMarker)
  //   },[selectedMarker])

    // const scrollToIndex=(index)=>{
    //     flatListRef.current?.scrollToIndex({animated:true,index})
    // }
    // const getItemLayout=(_,index)=>({
    //   length: Dimensions.get('window').width,
    //   offset: Dimensions.get('window').width * index, 
    //   index
    // })
  return (
    <View>
      <FlatList 
      data={data}
      horizontal={true}
      pagingEnabled
       ref={flatListRef}
      //  getItemLayout={getItemLayout}
      showsHorizontalScrollIndicator={false}
      renderItem={({item,index})=>(
        <View key={index}>
            <PlaceItem place={item} />
        </View>
      )}/>
    </View>
  )
}

