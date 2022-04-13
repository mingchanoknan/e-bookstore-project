<template>
  <div>
    <p>Kpunnzaa</p>
    <v-btn @click="click()">123</v-btn>
    <img :src="image" v-if="image != ''">
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "TestPage",
  data:()=> ({
    image: ""
  }),
  methods:{
    click(){
      axios.get('https://dog.ceo/api/breeds/image/random').then((value)=>{
        this.image = value.data.message
        console.log(value)
      }).catch((err) => {
        console.log(err)
      })
    }
  }
};

</script>
<style scoped></style>
