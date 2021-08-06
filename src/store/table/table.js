import axios from "axios";
export default {
    state: {
        photos: [],
        randomPhotos: []
    },
    actions: {
         async fetchPhotos ({ commit, dispatch }) {
                const response = await axios('https://jsonplaceholder.typicode.com/albums/1/photos', {
                    method: 'GET'
                });
                const photos = (response.data);
                commit('setPhotos', photos);
                dispatch('selectPosts', photos)
            },
            selectPosts ({ commit }, data) {
                const randomPhotos = []
                for (let i = 0; i < 4; i++) {
                    const randomNumber = Math.ceil(Math.random() * 50)
                    randomPhotos.push(data[randomNumber])
                }
                commit('setRandomPhotos', randomPhotos)
            }
        },
    mutations: {
        setPhotos (state, data) {
            state.photos = data
        },
        setRandomPhotos (state, data) {
            state.randomPhotos = data
        }
    },
    getters: {
        getPhotos: state => state.photos,
        getRandomPhotos: state => state.randomPhotos
    }
}