<template>
  <div>
    <br/>
    <v-container style="font-family: 'Kanit', sans-serif">
      <center><h1>Cart Item</h1></center>
      <v-divider></v-divider><br />
      <v-row>

        <v-col lg="6" sm="12" md="12">
          <v-card v-for="(item,index) in allItemInCart" :key="index" class="mx-auto my-12 font" style="position: relative" height="270px" width="600px">
            <v-row>
              <v-col lg="4" sm="12" md="12">
                <div class="background-card"></div>
                <center><v-img height="auto" width="150"
                :src="'http://localhost:3000/' + item.image_cover">
                </v-img>
                </center>
              </v-col>

              <v-col lg="8" sm="12" md="12">
                <div class="front">
                  <v-container fluid class="px-6 py-6">
                    
                    <p class="type">{{item.title}}</p>
                    <!-- <v-tooltip bottom color="#da9c9d">
                      <template v-slot:activator="{ on, attrs }">
                        <div v-bind="attrs" v-on="on" class="header">
                          Tatsuya Endo
                        </div>
                      </template>
                      <span>Tatsuya Endo</span>
                    </v-tooltip>
                    <div class="author">
                      <span style="text-decoration: underline">
                        Siam Inter Comics&nbsp;&nbsp;
                      </span>
                    </div> -->
                  </v-container>

                  <v-container class="px-6 pb-6">
                    <span>
                      <v-row>
                        <v-spacer></v-spacer>
                        <div class="price">{{item.price}} ฿</div>
                      </v-row>
                    </span>
                  </v-container>
                </div>
              </v-col>
            </v-row>
            <div class="pr-3 pb-3" align="right">
              <v-icon @click="deleteItem(index,item )" large>mdi-trash-can-outline</v-icon>
            </div>
          </v-card>
          <v-divider></v-divider><br />
        </v-col>

        <v-col lg="6" sm="12" md="12">
          <v-card color="#FFF3F3" style="color: black; padding: 1rem">

            <h1>CART TOTALS</h1>
            <v-divider></v-divider><br />
            <p>ราคาสินค้า {{totalPrice}} THB</p>
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
          <center>
            <v-btn title color="#D7ECFF" large @click="$router.push('/')"> เลือกซื้อหนังสือต่อ </v-btn>
          </center>
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
  },
  methods: {
    async deleteItem(index, item) {
      let text = "ต้องการลบออกจากตะกร้า!";
      if (confirm(text) == true) {
        try{
          const result = await axios.delete(`http://localhost:3000/deleteItem/${item.item_no}/${this.$store.state.user.cart.cart_id}`)
          console.log(result.data)
          this.totalPrice -= item.price
          this.allItemInCart.splice(index,1)
        }catch(err){
          console.log(err)
        }}

    },
    async getItemInCart(){
      const result = await axios.get(`http://localhost:3000/itemsInCart/${this.$store.state.user.cart.cart_id}`);
      this.allItemInCart = result.data
      this.totalPrice = this.allItemInCart[0].total_price
    }
  },
};
</script>
<style scoped>
</style>
