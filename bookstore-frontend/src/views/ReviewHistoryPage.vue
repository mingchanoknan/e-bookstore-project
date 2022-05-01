<template>
  <div>
    <TypeBar />
    <br />
    <v-container style="font-family: 'Kanit', sans-serif">
      <center><h1>รีวิวของฉัน</h1></center>
      <v-divider></v-divider><br/>

          
    </v-container>
  </div>
</template>
<script>
import TypeBar from "../components/bar/Typebar.vue";
export default {
  name: "DetailPage",
  components: {
    TypeBar,
  },
  data: () => ({}),
};
</script>
<style scoped>
</style>
