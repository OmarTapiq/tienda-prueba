<template>
  <div id="app">
    <!-- <SideBar/> -->
    <notifications group="foo"/>
    <router-view/>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue';

export default {
  components: {
    SideBar,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh !important;
}

a {
  color: #6e84a3 !important;
}
</style>
