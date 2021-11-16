import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native"
import { removeFavorites, addFavorites, removeCompletely } from '../../redux/galleryReducer'

import { useDispatch, useSelector } from 'react-redux';

const PhotoScreen = (phUrl) => {

    const dispatch = useDispatch()

    const { favoritesUrls } = useSelector(state => state.galleryReducer)

    const onAdd = () => {
        return (
            dispatch(addFavorites(phUrl.route.params.item))
        )
    }

    const onRemove = () => {
        return (
            dispatch(removeFavorites(phUrl.route.params.item))
        )
    }

    const onRemoveCompletely = () => {
        return (
            dispatch(removeCompletely(phUrl.route.params.item))
        )
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',
         backgroundColor: 'black', resizeMode: 'cover'}}>
            <Image source={{ uri: phUrl.route.params.item }}
                style={{
                    flex: 1,
                    height: 400,
                    width: 400,
                    resizeMode: 'contain',
                    backgroundColor: 'black'
                }} />
            <View style={{}}>

                { (favoritesUrls.includes(phUrl.route.params.item))
                    ? (<TouchableOpacity
                        onPress={onRemove}
                        style={{
                            backgroundColor: 'white',
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            width: 300,
                            height: 30
                        }}>
                            <Image 
                            style={{position: 'absolute',marginLeft: 20, width: 30, height: 30}}
                            source={{
                                uri: 'https://cdn-icons-png.flaticon.com/512/2001/2001388.png'
                            }}/>
                        <Text style={{ color: 'black', marginTop: 5, textAlign: 'center' }}> Удалить из избранного </Text>
                    </TouchableOpacity>)
                    : (<TouchableOpacity
                        onPress={onAdd}
                        style={{
                            backgroundColor: 'white',
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            width: 300,
                            height: 30
                        }}>
                            <View>
                        <Text style={{ color: 'black', marginTop: 7, textAlign: 'center' }}> Добавить в избранное</Text>
                        <Image style={{position: 'absolute',marginLeft: 20, width: 30, height: 30}}
                        source={{
                            uri: 'https://cdn-icons-png.flaticon.com/512/2001/2001166.png'
                        }}/>
                        </View>
                    </TouchableOpacity>)

                }
                <View
                    style={{
                        borderBottomColor: 'gray',
                        borderBottomWidth: 1,
                    }}
                />
                <TouchableOpacity
                    onPress={onRemoveCompletely}
                    style={{
                        backgroundColor: 'white',
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        width: 300,
                        height: 30
                    }}>
                    <Image style={{ position: 'absolute',marginLeft: 23, width: 25, height: 25 }} source={{
                        uri: 'https://www.iconsdb.com/icons/preview/black/delete-xxl.png'
                    }}/>
                    <Text style={{ color: 'black', flex: 1, marginTop: 5, textAlign: 'center' }}> Удалить изображение </Text>
                    
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default PhotoScreen