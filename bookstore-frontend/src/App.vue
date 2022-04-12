<template>
  <v-app>
    <Navbar/>

    <v-main>
      <!-- <MainPage/> -->
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/bar/Navbar.vue';
// import MainPage from './components/pages/MainPage.vue';

export default {
  name: 'App',

  components: {
    Navbar,
    // MainPage
},

  data: () => ({

  }),
  methods: {
  }
};
</script>
