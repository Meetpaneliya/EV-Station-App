import { View, Text, FlatList,Dimensions } from 'react-native'
import React, {useEffect,useRef} from 'react'
import PlaceItem from './PlaceItem';
import { SelectMarkercontext } from '../../Context/SelectMarkerContex';
import { useContext } from 'react';

export default function PlaceListView({placeList}) {
  const flatListRef = useRef(null);

  // const {selectedMarker, setSelectedMarker} = useContext(SelectMarkercontext)
  //   useEffect(()=>{
  //     selectedMarker&&scrollToIndex(selectedMarker)
  //   },[selectedMarker])

    // const scrollToIndex=(index)=>{
    //     flatListRef.current?.scrollToIndex({animated:true,index})
    // }
    const getItemLayout=(_,index)=>({
      length: Dimensions.get('window').width,
      offset: Dimensions.get('window').width * index, 
      index
    })
  return (
    <View>
      <FlatList 
      data={placeList}
      horizontal={true}
      pagingEnabled
       ref={flatListRef}
       getItemLayout={getItemLayout}
      showsHorizontalScrollIndicator={false}
      renderItem={({item,index})=>(
        <Veiw key={index}>
            <PlaceItem place={item} />
        </Veiw>
      )}/>
    </View>
  )
}

// import { View, Text, FlatList } from 'react-native'
// import React from 'react'

// export default function PlaceListView({PlaceList}) {
//   return (
//     <View>
//       <FlatList
//       data={PlaceList}
//       renderItem={({item,index})=>(
//         <View>
//           <Text>{item.displayName.Text}</Text>
//         </View>
//       )}/>
//     </View>
//   )
// }