import React from "react";
import {View, Text, FlatList, TouchableOpacity, Image} from "react-native"
import { useSelector } from "react-redux";

const Favorites = ({navigation}) => {
    const { favoritesUrls } = useSelector(state => state.galleryReducer)

    return (
        <View>
            <View>
      <FlatList
        style={{marginTop: 15}}
        columnWrapperStyle={{flex: 1,
            justifyContent: "space-around"}}
        keyExtractor={item => item}
        horizontal={false}
        numColumns={4}
        data={favoritesUrls}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => {
              navigation.navigate('Photo', {item})
              }}>
              <Image
                source={{uri: item}}
                style={{
                  borderRadius: 10,
                  margin: 2,
                  flex: 1,
                  height: 90,
                  width: 90,
                  flexDirection: 'row',
                }}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
        </View>
    )
}

export default Favorites