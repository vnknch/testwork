import axios from "axios"
export default {
    state: {
        posts:[]
    },
    actions: {
        async fetchPosts ({commit}) {
            const response = await axios('https://jsonplaceholder.typicode.com/posts', {
                method: 'GET'
            })
            const posts = response.data
            commit('setPosts', posts)
        }
    },
    mutations: {
        setPosts (state, data) {
            state.posts = data
            console.log(state.posts)
        }
    },
    getters: {
        getPosts: s => s.posts
    }
}