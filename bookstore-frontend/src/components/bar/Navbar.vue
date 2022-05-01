<template>
  <v-app-bar app color="#D9D0C7" dark>
    <h2 class="brand-name" @click="$router.push('/main')">Sophie</h2>
    <v-btn @click="$router.push('/main')" text><p class="menu">SHOP</p></v-btn>
    <v-btn text @click="$router.push('/myBook')"><p class="menu">MY BOOKS</p></v-btn>
    <v-btn text @click="$router.push('/manual')"><p class="menu">USER MANUAL</p></v-btn>
    <v-btn text @click="$router.push('/customerRegister')"><p class="menu">Register</p></v-btn>
    <v-spacer></v-spacer>
    <span class="button-container">
        <v-icon color="black" large>mdi-notebook-heart-outline</v-icon>
        <div class="number-prop">0</div>
    </span>
        <span class="button-container" @click="$router.push('/cart/:cartId')">
        <v-icon color="black" large>mdi-cart-outline</v-icon>
        <div class="number-prop">0</div>
    </span>
    <span class="button-container" v-if="$store.state.user != null">
        <v-icon color="black" large>mdi-account-circle-outline</v-icon>
    </span>
    <span @click="activeModal()" class="button-container" v-if="$store.state.user == null">
        <v-icon @click="$router.push('/customerRegister')" color="black" large>mdi-login</v-icon>
    </span>
  </v-app-bar>
</template>
<script>
import axios from "axios";
export default {
  name: "NavigationBar",
  

  data: () => ({
    check: false,
  }),
  methods: {
      add(value){
          this.$store.dispatch("incrementAction", value)
      },
      async generateImage(){
        // axios.get("https://dog.ceo/api/breeds/image/random").then((value) => {
        //   console.log(value.data.message)
        // }).catch((err) => {
        //   console.log(err)
        // })
        try {
          const result = await axios.get("https://dog.ceo/api/breeds/image/random")
          console.log(result.data.message)
        }
        catch(err){
          console.log(err)
        }
      },
      activeModal(){
        this.$store.dispatch("modalLoginAction");
      }
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Boogaloo&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
.brand-name {
  color: black;
  font-family: "Boogaloo", cursive;
  letter-spacing: 1px;
  font-size: xx-color="black" large;
  padding-left: 0.8em;
  padding-right: 1em;
}
.menu {
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  padding-left: 0.2em;
  padding-right: 0.2em;
  margin-bottom: 0px !important;
  font-family: "Open Sans", sans-serif;
}

.button-container {
    position: relative;
    cursor: pointer;
    margin-left: 0.8em;
    margin-right: 0.8em;
}
.number-prop {
    width: 1.3em;
    height: 1.3em;
    background-color: red;
    border-radius: 50%;
    text-align: center;
    position: absolute;
    top: -5px;
    left: 24px;
    font-size: small;
}
</style>
