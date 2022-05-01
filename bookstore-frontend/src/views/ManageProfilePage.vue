<template>
  <div>
    <TypeBar />
    <br />
    <v-container style="font-family: 'Kanit', sans-serif">
      <center><h1>My Account</h1></center>
      <v-divider></v-divider><br/>
      <v-row>
        <v-col lg="6" sm="12" md="12">

          <h1>CART TOTALS</h1>
            <v-divider></v-divider><br/>
            <p>ราคาสินค้า 709.00 THB</p>
            <center>
              <v-btn @click="$router.push('/cart/:cartId')"
                title
                color="black"
                style="color: white"
                large
                width="250px"
              >
                กลับไปหน้าตะกร้าสินค้า
              </v-btn>
            </center><br>

            <v-divider></v-divider>
        </v-col>



        <v-col lg="6" sm="12" md="12">
          <v-card color="#EFFFE3" style="color: black; padding: 1rem">
            <center><h1>ใส่ qr code</h1></center>

          </v-card>
        </v-col>
      </v-row>
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
