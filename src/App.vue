<template>
  <div id="app">
    <Header/>
    <router-view/>
    <BottomPhotos/>
    <SubscribedSection/>
    <Footer/>
  </div>
</template>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
   * {
    margin: 0;
    padding: 0;
   }
</style>
<script>
import Header from '@/components/Navigation/Header'
import BottomPhotos from '@/components/BottomPhotos'
import SubscribedSection from '@/components/SubscribedSection'
import Footer from '@/components/Navigation/Footer'
export default {
  components: {
    Header, BottomPhotos, SubscribedSection, Footer
  }
}
</script>