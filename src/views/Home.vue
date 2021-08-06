<template>
  <div class="home">
    <Loader v-if="fetchOrNot"/>
    <PhotosTable
    :photos="getPhotos"
    v-else
    />
  </div>
</template>

<script>
// @ is an alias to /src
import PhotosTable from '@/components/PhotosTable/PhotosTable'
import Loader from '@/components/Loader'
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'HomePage',
    components: {
      PhotosTable, Loader
    },
    data: () => ({
      fetchOrNot: true
    }),
    async mounted () {
        await this.fetchPhotos()
        this.fetchOrNot = false
    },
    methods: {
        ...mapActions(['fetchPhotos'])
    },
    computed: {
        ...mapGetters(['getPhotos'])
    }
}
</script>
