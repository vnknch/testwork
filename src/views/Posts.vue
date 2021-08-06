<template>
  <div class="posts">
    <Loader v-if="fetchOrNot"/>
    <PostsTable
    :posts="getPosts"
    v-else
    />
  </div>
</template>
<script>
import PostsTable from '@/components/PostsTable/PostsTable'
import Loader from '@/components/Loader'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'PostsPage',
  components: {
      PostsTable, Loader
  },
  data: () => ({
    fetchOrNot: true
  }),
  async mounted () {
    await this.fetchPosts()
    this.fetchOrNot = false
    this.fetchPhotos()
  },
  methods: {
    ...mapActions(['fetchPosts', 'fetchPhotos'])
  },
  computed: {
    ...mapGetters(['getPosts'])
  },
}
</script>