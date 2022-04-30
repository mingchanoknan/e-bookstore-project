<template>
  <v-app>
    <Navbar />

    <v-main>
      <!-- <MainPage/> -->
      <router-view></router-view>
      <v-dialog
        v-model="dialog"
        persistent
        max-width="600px"
        v-if="$store.state.modalLoginActive"
        ><v-card><LoginCard /></v-card></v-dialog>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/bar/Navbar.vue";
import LoginCard from './components/card/loginCard.vue';

// import MainPage from './components/pages/MainPage.vue';

export default {
  name: "App",

  components: {
    Navbar,
    LoginCard,
    // MainPage
  },

  data: () => ({
    dialog: false,
  }),
  methods: {
    toggleModal(){
      this.$store.dispatch("modalLoginAction")
    }
  },

};
</script>
