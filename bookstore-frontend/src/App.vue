<template>
  <v-app>
    <Navbar/>

    <v-main>
      <!-- <MainPage/> -->
      <router-view></router-view>
      <v-dialog
        v-model="dialog"
        persistent
        max-width="30rem"
        v-if="$store.state.modalLoginActive"
        ><v-card><LoginCard/></v-card>
      </v-dialog>
    </v-main>
  </v-app>
</template>

<script>
import axios from './plugins/axios';
import Navbar from "./components/bar/Navbar.vue";
import LoginCard from "./components/card/LoginModalCard.vue"
// import MainPage from './components/pages/MainPage.vue';

export default {
  name: "App",

  components: {
    Navbar,
    LoginCard,
    // MainPage
  },

  data: () => ({
    dialog: true,
  }),
  created(){
    this.onAuthChange()
  },
  methods: {
    toggleModal(){
      this.$store.dispatch("modalLoginAction")
    },
    // async loginByToken(){
    //   const token = localStorage.getItem("token")
    //   try {
    //     const result = await axios.post("http://localhost:3000/customer/loginByToken" ,{token: token})
    //     this.$store.dispatch("keepUser", result.data.user)
    //   }
    //   catch(err){
    //     console.log(err.message)
    //   }
    // }
    onAuthChange () {
       const token = localStorage.getItem('token')
       if (token) {
         this.getUser()
       }
     },
     async getUser () {
      try {
        const result = await axios.get("http://localhost:3000/user/me")
        this.$store.dispatch("keepUser", result.data)
      }
      catch(err){
        console.log(err)
      }
     }
  },

};
</script>
<style scoped>
.v-dialog {
 overflow-y: none !important; 
}
</style>
