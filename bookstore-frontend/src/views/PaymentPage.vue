<template>
  <div>
    <TypeBar />
    <br />
    <v-container style="font-family: 'Kanit', sans-serif">
      <center><h1>Payment</h1></center>
      <v-divider></v-divider><br />
      <v-row>
        <v-col lg="6" sm="12" md="12">
          <h1>CART TOTALS</h1>
          <v-divider></v-divider><br />
          <p>ราคาสินค้า 100.00 THB</p>
          <center>
            <v-btn
              @click="$router.push('/cart')"
              title
              color="black"
              style="color: white"
              large
              width="250px"
            >
              กลับไปหน้าตะกร้าสินค้า
            </v-btn>
          </center>
          <br />

          <v-divider></v-divider>
        </v-col>

        <v-col lg="6" sm="12" md="12">
          <v-card color="#EDC4D6" style="color: black; padding: 1rem">
                  <center><h1>สรุปรายการสินค้า</h1></center>
      <v-divider></v-divider><br />
            <v-row>
              <v-col lg="6" sm="12" md="12">
                <h3>PRODUCT</h3>
                <p style="margin: 0;" >SPY x FAMILY เล่ม 02</p>
                <p>โดย Tatsuya Endo</p>
                <section>
                </section>
              </v-col>
              <v-col lg="6" sm="12" md="12">
                <h3>ราคาสินค้า</h3>
                <p>100.00 THB</p>
                <center></center>
              </v-col> </v-row
            ><v-divider></v-divider><br>
            <center>
              <v-btn
                @click="$router.push('/payment')"
                title
                color="black"
                style="color: white"
                large
                width="250px"
              >
                ชำระเงิน
              </v-btn>
            </center>
          </v-card>
          <br />
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
