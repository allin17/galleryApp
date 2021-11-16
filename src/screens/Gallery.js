import React, {useEffect, useState} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { getImageUrls } from '../../redux/galleryReducer'

const Gallery = ({navigation}) => {
  const { photoUrls } = useSelector(state => state.galleryReducer);
  const { favoritesUrls } = useSelector(state => state.galleryReducer)
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getImageUrls())
  }, []);

  
  console.log(photoUrls.urlsArr)
  return (
    <View>
      <FlatList
        style={{ margin: 12 }}
        columnWrapperStyle={{
          flex: 1,
          justifyContent: "space-around"
        }}
        keyExtractor={item => item}
        horizontal={false}
        numColumns={4}
        data={photoUrls.urlsArr}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => {
              navigation.navigate('Photo', { item })
            }}>
              <Image
                source={{ uri: item }}
                style={{
                  borderRadius: 10,
                  margin: 2,
                  flex: 1,
                  height: 90,
                  width: 90,
                  flexDirection: 'row',
                }}
              />
              <Image style={ (favoritesUrls.includes(item)) ? {flex: 1, width: 30, height: 30, position: 'absolute',marginLeft: 60, marginTop: 60}
              : null}
              source={{uri: 'https://www.freeiconspng.com/thumbs/heart-png/heart-png-15.png'}}/>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
Gallery.navigationOptions = {
  headerShown: false,
};

export default Gallery;
