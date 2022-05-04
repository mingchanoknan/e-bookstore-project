<template>
  <div>
    <br />
    <v-container style="font-family: 'Kanit', sans-serif">
      <center><h1>Payment</h1></center>
      <v-divider></v-divider><br />
      <v-row>
        <v-col lg="6" sm="12" md="12">
          <h1>CART TOTALS</h1>
          <v-divider></v-divider><br />
          <p><b>จำนวน {{allItemInCart.length}} รายการ</b></p>
          <p><b>ราคารวมสินค้า {{totalPrice}} THB</b></p>
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
        <v-col lg="6" sm="12" md="12"><h3>PRODUCT</h3></v-col>
        <v-col lg="6" sm="12" md="12"><h3>ราคาสินค้า</h3></v-col>
      </v-row>
      
            <v-row v-for="(item,index) in allItemInCart" :key="item.item_no">
              <v-col lg="6" sm="12" md="12">
                <p style="margin: 0;" >{{index+1}}.)&nbsp;&nbsp;{{item.title}}</p>
                <!-- <p>โดย Tatsuya Endo</p> -->
                <section>
                </section>
              </v-col>
              <v-col lg="6" sm="12" md="12">
                <p>{{item.price}} THB</p>
                <center></center>
              </v-col> </v-row
            ><v-divider></v-divider><br>
            <center>
              <v-btn
                @click="pay()"
                title
                color="green"
                style="color: white"
                large
                width="250px"
              >
                ยืนยันการชำระเงิน
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
import axios from "@/plugins/axios";
export default {
  name: "DetailPage",
  components: {
  },
  data: () => ({
    allItemInCart:[],
    totalPrice:0
  }),
    created() {
    this.getItemInCart();
  },methods: {
    async getItemInCart(){
      const result = await axios.get(`http://localhost:3000/itemsInCart/${this.$store.state.user.cart.cart_id}`);
      this.allItemInCart = result.data
      this.totalPrice = this.allItemInCart[0].total_price
    },
    async pay(){
      let text = "ยืนยันการชำระเงิน";
      if (confirm(text) == true) {
      try{
        const result = await axios.put(`http://localhost:3000/payment/${this.$store.state.user.cart.cart_id}/${this.$store.state.user.customer_id}`)
        console.log(result.data)
        this.$router.push("/myBook")
      }catch(err){
        console.log(err)
        alert("")
      }}
      else{
        this.$router.push.push('/payment')
      }
    }
  },
};
</script>
<style scoped>
</style>
