import { getPhotos } from "../api/api"

const SET_IMAGES = 'SET_IMAGES'
const ADD_FAVORITES = 'ADD_FAVORITES'
const REMOVE_FAVORITES = 'REMOVE_FAVORITES'
const REMOVE_COMPLETELY = 'REMOVE_COMPLETELY'


const initialState = {
    photoUrls: [],
    favoritesUrls: ['https://images.dog.ceo/breeds/african/n02116738_1180.jpg']
}

const galleryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IMAGES:
            return {
                ...state,
                photoUrls: action.data
            }

        case ADD_FAVORITES:
            return {
                ...state,
                favoritesUrls: [...state.favoritesUrls, action.data.favorites]
            }

        case REMOVE_FAVORITES:
            return {
                ...state,
                favoritesUrls: state.favoritesUrls.filter((item) => {
                    return item!== action.data.favorites
                })
            }
        case REMOVE_COMPLETELY:
            return {
                ...state,
                favoritesUrls: state.favoritesUrls.filter((item) => {
                    return item!== action.data.photo
                }),
                urlsArr: state.photoUrls.urlsArr.filter((item) => {
                    return item!== action.data.photo
                })
            }

        default:
            return state
    }
}

export const setImages = (urlsArr) => ({
    type: SET_IMAGES,
    data: {urlsArr}
})

export const addFavorites = (favorites) => ({
    type: ADD_FAVORITES,
    data: {favorites}
})

export const removeFavorites = (favorites) => ({
    type: REMOVE_FAVORITES,
    data: {favorites}
})

export const removeCompletely = (photo) => ({
    type: REMOVE_COMPLETELY,
    data: {photo}
})

export const getImageUrls = () => async (dispatch) => {
    let response = await getPhotos()
    dispatch(setImages(response))
}

export default galleryReducer