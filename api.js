import axios from 'axios';

export const getPhotos = async () => {
    const result = await axios.get(`https://dog.ceo/api/breed/african/images`)
    return result.data.message
}