<script >
import { store } from './store.js'
import SiteHeader from './components/SiteHeader.vue'
import SiteMain from './components/SiteMain.vue'

export default {
  components: {
    SiteHeader,
    SiteMain
  },
  data() {
    return {
      store
    }
  },
  mounted() {
    console.log(this.store);
  }
}
</script>

<template>

  <SiteHeader></SiteHeader>
  <SiteMain></SiteMain>

</template>

<style>

</style>
